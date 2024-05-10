import { createWorkspace, workspaceList } from './home';
import { interceptCreateWorkspaceEndpoint } from './intercepts';
import { createIssue, expectIssueCreated } from './project';
import { createProject, projectList } from './workspace';

describe('Create issue in project', () => {
  const API_URL = 'http://localhost:3000';

  it('should create issue in project', () => {
    interceptCreateWorkspaceEndpoint();

    cy.intercept('POST', `${API_URL}/workspaces/1/projects`, (req) => {
      req.reply({ id: 1, workspaceId: 1, name: req.body.name });
    });

    let counter = 1;
    cy.intercept('POST', `${API_URL}/projects/1/issues`, (req) => {
      req.reply({ id: ++counter, projectId: 1, title: req.body.title });
    });

    cy.visit('/');

    const workspaceName = 'Epicstory';
    createWorkspace(workspaceName);
    workspaceList().contains(workspaceName).click();

    const projectName = 'Epicstory Api';
    createProject(projectName);
    projectList().contains(projectName).click();

    const issueTitle1 = 'Create workspace';
    createIssue(issueTitle1);
    expectIssueCreated(issueTitle1);

    const issueTitle2 = 'Create project in workspace';
    createIssue(issueTitle2);
    expectIssueCreated(issueTitle2);
  });
});
