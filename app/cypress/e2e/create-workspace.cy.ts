describe('Create workspace', () => {
  it('should create an workspace', () => {
    cy.visit('/');
    cy.contains('Workspaces');
    cy.get('[data-testid="workspace-name-input"]').type('Epicstory');
    cy.get('[data-testid="create-workspace-button"').click();
    cy.get('[data-testid="workspace-list"]').contains('Epicstory');
  });
});
