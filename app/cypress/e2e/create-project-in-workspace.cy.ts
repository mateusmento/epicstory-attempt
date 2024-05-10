describe('Create project in workspace', () => {
  const API_URL = 'http://localhost:3000';

  it('should create a project in workspace', () => {
    {
      let counter = 1;
      cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
        req.reply({ id: counter++, name: req.body.name });
      });
    }

    {
      let counter = 1;
      cy.intercept('POST', `${API_URL}/workspaces/1/projects`, (req) => {
        req.reply({ id: counter++, workspaceId: 1, name: req.body.name });
      });
    }

    cy.visit('/');

    const workspaceNameInput = () => cy.get('[data-testid="workspace-name-input"]');
    const createWorkspaceButton = () => cy.get('[data-testid="create-workspace-button"');
    const workspaceList = () => cy.get('[data-testid="workspace-list"]');

    workspaceNameInput().type('Epicstory');
    createWorkspaceButton().click();
    workspaceList().contains('Epicstory').click();

    cy.contains('Workspace 1');

    const projectNameInput = () => cy.get('[data-testid="project-name-input"');
    const createProjectButton = () => cy.get('[data-testid="create-project-button"');
    const projectList = () => cy.get('[data-testid="project-list"]');

    function createProject(name: string) {
      projectNameInput().type(name);
      createProjectButton().click();
      projectList().contains(name).click();
      projectNameInput().should('have.value', '');
    }

    createProject('Epicstory Api');
    createProject('Epicstory App');
  });
});
