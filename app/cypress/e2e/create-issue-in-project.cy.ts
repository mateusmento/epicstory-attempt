import { createWorkspace, workspaceList } from './home';
import {
  interceptCreateIssueEndpoint,
  interceptCreateProjectEndpoint,
  interceptCreateWorkspaceEndpoint,
} from './intercepts';
import { createIssue, expectIssueCreated } from './project';
import { createProject, projectList } from './workspace';

describe('Create issue in project', () => {
  it('should create issue in project', () => {
    interceptCreateWorkspaceEndpoint();
    interceptCreateProjectEndpoint();
    interceptCreateIssueEndpoint();

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
