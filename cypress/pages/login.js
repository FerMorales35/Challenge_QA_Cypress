class login {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    messageLockedUser: () => cy.get('[data-test="error"]'),
  };

  typeUsername(username) {
    this.elements.usernameInput().should("be.enabled").type(username);
  }
  typePassword(password) {
    this.elements.passwordInput().should("be.enabled").type(password);
  }
  clickLogin() {
    this.elements.loginBtn().should("be.enabled").click();
  }
  validationMessageLockedUser(errorMessage) {
    this.elements
      .messageLockedUser()
      .should("be.visible")
      .and("have.text", "Epic sadface: Sorry, this user has been locked out"); // Hacé que uno de los casos de prueba falle intencionalmente (Quite el punto del mensaje que se muestra para forzar el fallo en el assert)
  }
}

module.exports = new login();
