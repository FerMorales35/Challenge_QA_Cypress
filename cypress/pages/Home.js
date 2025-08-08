class home {
  elements = {
    homeTitle: () => cy.get('[data-test="title"]'),
    addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    btnShoppingCart: () => cy.get('[data-test="shopping-cart-link"]'),
  };

  validateHomeTitle() {
    this.elements.homeTitle().should("be.visible").and("have.text", "Products");
  }

  clickBtnAddToCart() {
    this.elements.addToCartBtn().should("be.enabled").click();
  }

  clickBtnShoppingCart() {
    this.elements.btnShoppingCart().click();
  }
}

module.exports = new home();
