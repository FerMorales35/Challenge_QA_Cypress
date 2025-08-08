class checkOutInformation {
  elements = {
    title: () => cy.get('[data-test="title"]'),
    inputFirstName: () => cy.get('[data-test="firstName"]'),
    inputLastName: () => cy.get('[data-test="lastName"]'),
    inputPostalCode: () => cy.get('[data-test="postalCode"]'),
    btnContinue: () => cy.get('[data-test="continue"]'),
  };

  validatePageTitle() {
    this.elements.title().should("have.text", "Checkout: Your Information");
  }

  typeFirstName(firstName) {
    this.elements.inputFirstName().should("be.enabled").type(firstName);
  }

  typeLastName(lastName) {
    this.elements.inputLastName().should("be.enabled").type(lastName);
  }

  typePostalCode(postalCode) {
    this.elements.inputPostalCode().should("be.enabled").type(postalCode);
  }

  clickBtnContinue() {
    this.elements.btnContinue().should("be.enabled").click();
  }
}

module.exports = new checkOutInformation();
