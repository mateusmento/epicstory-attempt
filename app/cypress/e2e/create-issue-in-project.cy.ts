import { createWorkspace, workspaceList } from './page-objects/home';
import {
  mockCreateIssueEndpoint,
  mockCreateProjectEndpoint,
  mockCreateWorkspaceEndpoint,
} from './intercepts/intercepts';
import { createIssue, expectIssueCreated } from './page-objects/project';
import { createProject, projectList } from './page-objects/workspace';
import { setupWorker } from 'msw/browser';

describe('Create issue in project', () => {
  const worker = setupWorker(
    mockCreateWorkspaceEndpoint(),
    mockCreateProjectEndpoint(),
    mockCreateIssueEndpoint(),
  );

  beforeEach(() => {
    worker.start({ quiet: true });
  });

  afterEach(() => {
    worker.stop();
  });

  it('should create issue in project', () => {
    cy.visit('/');

    const workspaceName = 'Epicstory';
    createWorkspace(workspaceName);
    workspaceList().contains(workspaceName).click();

    const projectName = 'Epicstory Api';
    createProject(projectName);
    projectList().contains(projectName).click();

    const issueTitle1 = 'Create workspace';
    createIssue(issueTitle1);
    expectIssueCreated(issueTitle1);

    const issueTitle2 = 'Create project in workspace';
    createIssue(issueTitle2);
    expectIssueCreated(issueTitle2);
  });
});
