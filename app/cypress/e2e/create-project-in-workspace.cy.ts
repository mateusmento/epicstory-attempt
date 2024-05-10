import { createWorkspace, workspaceList } from './page-objects/home';
import { interceptCreateProjectEndpoint, interceptCreateWorkspaceEndpoint } from './intercepts';
import { createProject, expectProjectCreated } from './page-objects/workspace';

describe('Create project in workspace', () => {
  it('should create a project in workspace', () => {
    interceptCreateWorkspaceEndpoint();
    interceptCreateProjectEndpoint();

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
