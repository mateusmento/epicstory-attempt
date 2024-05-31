import { createWorkspace, workspaceList } from './page-objects/home';
import { mockCreateProjectEndpoint, mockCreateWorkspaceEndpoint } from './intercepts/intercepts';
import { createProject, expectProjectCreated } from './page-objects/workspace';
import { setupWorker } from 'msw/browser';

describe('Create project in workspace', () => {
  const worker = setupWorker(mockCreateWorkspaceEndpoint(), mockCreateProjectEndpoint());

  beforeEach(() => {
    worker.start({ quiet: true });
  });

  afterEach(() => {
    worker.stop();
  });

  it('should create a project in workspace', () => {
    cy.visit('/');

    const workspaceName = 'Epicstory';
    createWorkspace(workspaceName);
    workspaceList().contains(workspaceName).click();

    cy.contains('Workspace 1');

    const projectName1 = 'Epicstory Api';
    createProject(projectName1);
    expectProjectCreated(projectName1);

    const projectName2 = 'Epicstory App';
    createProject(projectName2);
    expectProjectCreated(projectName2);
  });
});
