class checkOutComplete {
  elements = {
    title: () => cy.get('[data-test="title"]'),
    messageCompleteOrder: () => cy.get('[data-test="complete-header"]'),
  };

  validatePageTitle() {
    this.elements.title().should("have.text", "Checkout: Complete!");
  }

  validateCompleteOrder() {
    this.elements
      .messageCompleteOrder()
      .should("have.text", "Thank you for your order!");
  }
}

module.exports = new checkOutComplete();
