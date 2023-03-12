/* Change password page E2E test */
describe("Change password page E2E test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Test show an error message when form no input", () => {
    cy.get("button[name*='primary']").click();
    cy.get("p[name*='errorMessageofoldPasswordFormInput']").should('exist');
    cy.get("p[name*='errorMessageofnewPasswordFormInput']").should('exist');
  });

  it("Test show an error message when old-password form is no value", () => {
    cy.get("#oldPasswordFormInput").type(" ");
    cy.get("#newPasswordFormInput").type("abcdd12345");
    cy.get('button[name*="primary"]').click();
    cy.get("p[name*='errorMessageofoldPasswordFormInput']").should('exist');
  });

  it("Test show an error message when new-password form has invalid input; input length < 8", () => {
    cy.get("#oldPasswordFormInput").type("something_value_of_old_password");
    cy.get("#newPasswordFormInput").type("abc123");
    cy.get('button[name*="primary"]').click();
    cy.get("p[name*='errorMessageofnewPasswordFormInput']").should('exist');
  });

  it("Test show an error message when new-password form has invalid input; mix numbers and characters", () => {
    cy.get("#oldPasswordFormInput").type("something_value_of_old_password");
    cy.get("#newPasswordFormInput").type("abcdefghij");
    cy.get('button[name*="primary"]').click();
    cy.get("p[name*='errorMessageofnewPasswordFormInput']").should('exist');
 });

});
