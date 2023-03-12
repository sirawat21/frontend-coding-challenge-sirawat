/* Change password page E2E test */
describe("Change password page E2E test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  /* Test show an error message when form no input */
  it("Test show an error message when form no input", () => {
    cy.get("button[name*='primary']").click();
    cy.get("p[name*='errorMessageofoldPasswordFormInput']").should('exist');
    cy.get("p[name*='errorMessageofnewPasswordFormInput']").should('exist');
  });

  /* Test show an error message when old password input is no value */
  it('Testing show an error message when old password input is no value', () => {
    cy.get("#oldPasswordFormInput").type(" ");
    cy.get("#newPasswordFormInput").type("abcdd12345");
    cy.get('button[name*="primary"]').click();
    cy.get("p[name*='errorMessageofoldPasswordFormInput']").should('exist');
  });

});
