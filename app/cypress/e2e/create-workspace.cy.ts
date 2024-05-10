describe('Create workspace', () => {
  const API_URL = 'http://localhost:3000';

  it('should create an workspace', () => {
    let counter = 0;
    cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
      req.reply({ id: counter++, name: req.body.name });
    });

    cy.visit('/');
    cy.contains('Workspaces');

    const workspaceNameInput = () => cy.get('[data-testid="workspace-name-input"]');
    const createWorkspaceButton = () => cy.get('[data-testid="create-workspace-button"');
    const workspaceList = () => cy.get('[data-testid="workspace-list"]');

    const createWorkspace = (name: string) => {
      workspaceNameInput().type(name);
      createWorkspaceButton().click();
      workspaceList().contains(name);
      workspaceNameInput().should('have.value', '');
    };

    createWorkspace('Epicstory');
    createWorkspace('Derbel');
  });
});
