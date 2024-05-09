const API_URL = 'http://localhost:3000';

describe('Create workspace', () => {
  it('should create an workspace', () => {
    let idCounter = 0;
    cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
      req.reply({ id: idCounter++, name: req.body.name });
    });

    const workspaceNameInput = () => cy.get('[data-testid="workspace-name-input"]');
    const createWorkspaceButton = () => cy.get('[data-testid="create-workspace-button"');
    const workspaceList = () => cy.get('[data-testid="workspace-list"]');

    cy.visit('/');
    cy.contains('Workspaces');
    workspaceNameInput().type('Epicstory');
    createWorkspaceButton().click();
    workspaceList().contains('Epicstory');
    workspaceNameInput().should('have.value', '');
    workspaceNameInput().type('Derbel');
    createWorkspaceButton().click();
    workspaceList().contains('Derbel');
    workspaceNameInput().should('have.value', '');
  });
});
