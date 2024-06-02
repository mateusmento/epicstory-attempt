import { mockAuthAccessEndpoint } from './intercepts/intercepts';
import { signinEmailInput } from './page-objects/signin';
import { signupUser } from './page-objects/signup';
import { setupWorker } from 'msw/browser';

describe('Sign up a new user', () => {
  const worker = setupWorker(mockAuthAccessEndpoint());

  beforeEach(() => {
    worker.start({ quiet: true });
  });

  afterEach(() => {
    worker.stop();
  });

  it('should sign up a new user', () => {
    cy.visit('/signup');

    cy.contains('Sign up');
    cy.contains('Create an account');

    const email = 'mateus@email.com';
    signupUser('Mateus Sarmento', email, 'admin123');

    cy.contains('Sign in');

    signinEmailInput().should('have.value', email);
  });
});
