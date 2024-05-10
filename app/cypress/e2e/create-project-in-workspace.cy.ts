import { createWorkspace, workspaceList } from './home';
import { createProject, expectProjectCreated } from './workspace';

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

    createWorkspace('Epicstory');
    workspaceList().contains('Epicstory').click();

    cy.contains('Workspace 1');

    const projectName1 = 'Epicstory Api';
    createProject(projectName1);
    expectProjectCreated(projectName1);

    const projectName2 = 'Epicstory App';
    createProject(projectName2);
    expectProjectCreated(projectName2);
  });
});
