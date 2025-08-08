class checkOutOverview {
  elements = {
    title: () => cy.get('[data-test="title"]'),
    productDescription: () => cy.get('[data-test="inventory-item-name"]'),
    btnFinish: () => cy.get('[data-test="finish"]'),
  };

  validatePageTitle() {
    this.elements.title().should("have.text", "Checkout: Overview");
  }

  validateProductDescription() {
    this.elements
      .productDescription()
      .should("have.text", "Sauce Labs Backpack");
  }

  clickBtnFinish() {
    this.elements.btnFinish().should("be.enabled").click();
  }
}

module.exports = new checkOutOverview();
