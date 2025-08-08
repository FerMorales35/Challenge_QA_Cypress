class cart {
  elements = {
    title: () => cy.get('[data-test="title"]'),
    productDescription: () => cy.get('[data-test="inventory-item-name"]'),
    btnRemove: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    btnCheckOut: () => cy.get('[data-test="checkout"]'),
  };

  validateCartTitle() {
    this.elements.title().should("be.visible").and("have.text", "Your Cart");
  }

  validateProductDescription() {
    this.elements
      .productDescription()
      .should("have.text", "Sauce Labs Backpack");
  }

  clickBtnRemove() {
    this.elements.btnRemove().click();
  }

  clickBtnCheckOut() {
    this.elements.btnCheckOut().should("be.enabled").click();
  }
}

module.exports = new cart();
