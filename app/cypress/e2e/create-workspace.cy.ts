describe('Create workspace', () => {
  it('should create an workspace', () => {
    cy.visit('/');
    cy.contains('Workspaces');
  });
});
