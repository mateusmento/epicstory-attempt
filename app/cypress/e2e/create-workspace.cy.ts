import { createWorkspace, expectWorkspaceCreated } from './home';

describe('Create workspace', () => {
  const API_URL = 'http://localhost:3000';

  it('should create an workspace', () => {
    let counter = 0;
    cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
      req.reply({ id: counter++, name: req.body.name });
    });

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
