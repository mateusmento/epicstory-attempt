import * as signin from './page-objects/signin';
import { signupUser } from './page-objects/signup';

describe('Sign up a new user', () => {
  it('should sign up a new user', () => {
    cy.visit('/app/signup/');

    cy.contains('Sign up');
    cy.contains('Start your journey with Epicstory.');

    const email = 'mateus@email.com';
    signupUser('Mateus Sarmento', email, 'admin123');

    cy.contains('Sign in');

    signin.emailInput().should('have.value', email);
  });
});
