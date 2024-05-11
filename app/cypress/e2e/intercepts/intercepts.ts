const API_URL = 'http://localhost:3000';

export function interceptAuthAccessEndpoint() {
  cy.intercept('GET', `${API_URL}/auth/access`, { id: 1, name: 'Mateus Sarmento' });
}

export function interceptCreateWorkspaceEndpoint() {
  let counter = 1;
  cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
    req.reply({ id: counter++, name: req.body.name });
  });
}

export function interceptCreateProjectEndpoint() {
  let counter = 1;
  cy.intercept('POST', `${API_URL}/workspaces/1/projects`, (req) => {
    req.reply({ id: counter++, workspaceId: 1, name: req.body.name });
  });
}

export function interceptCreateIssueEndpoint() {
  let counter = 1;
  cy.intercept('POST', `${API_URL}/projects/1/issues`, (req) => {
    req.reply({ id: ++counter, projectId: 1, title: req.body.title });
  });
}
