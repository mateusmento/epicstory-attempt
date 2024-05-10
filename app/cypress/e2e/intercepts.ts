const API_URL = 'http://localhost:3000';

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
