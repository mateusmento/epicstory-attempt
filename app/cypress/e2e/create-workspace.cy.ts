const API_URL = 'http://localhost:3000';

describe('Create workspace', () => {
  it('should create an workspace', () => {
    let idCounter = 0;
    cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
      req.reply({ id: idCounter++, name: req.body.name });
    });

    cy.visit('/');
    cy.contains('Workspaces');
    cy.get('[data-testid="workspace-name-input"]').type('Epicstory');
    cy.get('[data-testid="create-workspace-button"').click();
    cy.get('[data-testid="workspace-list"]').contains('Epicstory');
  });
});
