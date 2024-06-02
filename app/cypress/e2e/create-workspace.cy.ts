import { createWorkspace, expectWorkspaceCreated } from './page-objects/home';
import { mockCreateWorkspaceEndpoint } from './intercepts/intercepts';
import { setupWorker } from 'msw/browser';

describe('Create workspace', () => {
  const worker = setupWorker(mockCreateWorkspaceEndpoint());

  beforeEach(() => {
    worker.start({ quiet: true });
  });

  afterEach(() => {
    worker.stop();
  });

  it('should create an workspace', () => {
    cy.visit('/');
    cy.contains('Workspaces');

    const workspaceName1 = 'Epicstory';
    createWorkspace(workspaceName1);
    expectWorkspaceCreated(workspaceName1);

    const workspaceName2 = 'Derbel';
    createWorkspace(workspaceName2);
    expectWorkspaceCreated(workspaceName2);
  });
});
