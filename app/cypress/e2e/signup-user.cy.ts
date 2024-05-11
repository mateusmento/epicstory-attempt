import { interceptAuthAccessEndpoint } from './intercepts/intercepts';

describe('Sign up a new user', () => {
  it('should sign up a new user', () => {
    interceptAuthAccessEndpoint();

    cy.visit('/signup');
    cy.contains('Sign up');
    cy.contains('Create an account');

    const signupNameInput = () => cy.get('[data-testid="signup-name-input"]');
    const signupEmailInput = () => cy.get('[data-testid="signup-email-input"]');
    const signupPasswordInput = () => cy.get('[data-testid="signup-password-input"]');
    const signupButton = () => cy.get('[data-testid="signup-button"]');

    function signupUser(name: string, email: string, password: string) {
      signupNameInput().type(name);
      signupEmailInput().type(email);
      signupPasswordInput().type(password);
      signupButton().click();
    }

    const email = 'mateus@email.com';
    signupUser('Mateus Sarmento', email, 'admin123');

    cy.contains('Sign in');

    const signinEmailInput = () => cy.get('[data-testid="signin-email-input"]');
    signinEmailInput().should('have.value', email);
  });
});
