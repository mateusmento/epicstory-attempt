const API_URL = 'http://localhost:3000';

export function interceptCreateWorkspaceEndpoint() {
  let counter = 1;
  cy.intercept('POST', `${API_URL}/workspaces`, (req) => {
    req.reply({ id: counter++, name: req.body.name });
  });
}
