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

    createWorkspace('Epicstory');
    expectWorkspaceCreated('Epicstory');

    createWorkspace('Derbel');
    expectWorkspaceCreated('Derbel');
  });
});
