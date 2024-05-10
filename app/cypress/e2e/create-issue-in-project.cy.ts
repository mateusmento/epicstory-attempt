describe('Create issue in project', () => {
  const API_URL = 'http://localhost:3000';

  it('should create issue in project', () => {
    cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
      req.reply({ id: 1, name: req.body.name });
    });

    cy.intercept('POST', `${API_URL}/workspaces/1/projects`, (req) => {
      req.reply({ id: 1, workspaceId: 1, name: req.body.name });
    });

    cy.intercept('POST', `${API_URL}/projects/1/issues`, (req) => {
      req.reply({ id: 1, projectId: 1, title: req.body.title });
    });

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

    projectNameInput().type('Epicstory Api');
    createProjectButton().click();
    projectList().contains('Epicstory Api').click();

    const issueNameInput = () => cy.get('[data-testid="issue-name-input"');
    const createIssueButton = () => cy.get('[data-testid="create-issue-button"');
    const issueList = () => cy.get('[data-testid="issue-list"]');

    const createIssue = (name: string) => {
      issueNameInput().type(name);
      createIssueButton().click();
      issueList().contains(name).click();
      issueNameInput().should('have.value', '');
    };

    createIssue('Create workspace');
    createIssue('Create project in workspace');
  });
});
