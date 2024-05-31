import { http, HttpResponse } from 'msw';

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
  const path = `${API_URL}/workspaces/1/projects`;
  cy.intercept('POST', path, (req) => {
    req.reply({ id: counter++, workspaceId: 1, name: req.body.name });
  });
}

export function interceptCreateIssueEndpoint() {
  let counter = 1;
  cy.intercept('POST', `${API_URL}/projects/1/issues`, (req) => {
    req.reply({ id: ++counter, projectId: 1, title: req.body.title });
  });
}

export function mockAuthAccessEndpoint() {
  return http.get(`${API_URL}/auth/access`, () => {
    return HttpResponse.json({ id: 1, name: 'Mateus Sarmento' });
  });
}

export function mockCreateWorkspaceEndpoint() {
  let counter = 1;
  return http.post(`${API_URL}/workspaces`, async ({ request }) => {
    const body = (await request.json()) as any;
    return HttpResponse.json({ id: counter++, name: body.name });
  });
}

export function mockCreateProjectEndpoint() {
  let counter = 1;
  return http.post(`${API_URL}/workspaces/1/projects`, async ({ request }) => {
    const body = (await request.json()) as any;
    return HttpResponse.json({ id: counter++, workspaceId: 1, name: body.name });
  });
}

export function mockCreateIssueEndpoint() {
  let counter = 1;
  return http.post(`${API_URL}/projects/:projectId/issues`, async ({ request, params }) => {
    const body = (await request.json()) as any;
    return HttpResponse.json({ id: ++counter, projectId: params.projectId, title: body.title });
  });
}
