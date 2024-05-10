import { createWorkspace, expectWorkspaceCreated } from './page-objects/home';
import { interceptCreateWorkspaceEndpoint } from './intercepts/intercepts';

describe('Create workspace', () => {
  it('should create an workspace', () => {
    interceptCreateWorkspaceEndpoint();

    cy.visit('/');
    cy.contains('Workspaces');

    const workspaceName1 = 'Epicstory';
    createWorkspace(workspaceName1);
    expectWorkspaceCreated(workspaceName1);

    const workspaceName2 = 'Derbel';
    createWorkspace(workspaceName2);
    expectWorkspaceCreated(workspaceName2);
  });
});
