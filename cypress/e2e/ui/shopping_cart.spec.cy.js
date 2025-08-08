import "cypress-mochawesome-reporter/register";
import login from "../../pages/login";
import home from "../../pages/Home";
import cart from "../../pages/Cart";
import checkOutInformation from "../../pages/CheckOutInformation";
import checkOutOverview from "../../pages/CheckOutOverview";
import checkOutComplete from "../../pages/CheckOutComplete";

describe("Casos de Prueba Carrito de compras", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(" CP-001 - Completar compra de producto", () => {
    cy.fixture("loginData").then((data) => {
      const user = data.validUser;
      login.typeUsername(user.username);
      login.typePassword(user.password);
      login.clickLogin();
      home.validateHomeTitle();
      home.clickBtnAddToCart();
      home.clickBtnShoppingCart();
      cart.validateProductDescription();
      cart.clickBtnCheckOut();
      checkOutInformation.validatePageTitle();
      checkOutInformation.typeFirstName(user.userFirstName);
      checkOutInformation.typeLastName(user.userLastName);
      checkOutInformation.typePostalCode(user.userPostalCode);
      checkOutInformation.clickBtnContinue();
      checkOutOverview.validatePageTitle();
      checkOutOverview.validateProductDescription();
      checkOutOverview.clickBtnFinish();
      checkOutComplete.validatePageTitle();
      checkOutComplete.validateCompleteOrder();
    });
  });

  it("CP-003 – Eliminar producto del carrito-Continuar con el proceso de compra", () => {
    cy.fixture("loginData").then((data) => {
      const user = data.validUser;
      login.typeUsername(user.username);
      login.typePassword(user.password);
      login.clickLogin();
      home.validateHomeTitle();
      home.clickBtnAddToCart();
      home.clickBtnShoppingCart();
      cart.validateProductDescription();
      cart.clickBtnRemove();
      cart.clickBtnCheckOut();
      cart.validateCartTitle();
    });
  });
});
