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

  // BUG CONOCIDO – Bug-001 (cypress/docs/Bug-SauceDemo.docx):
  // el checkout permite continuar con el carrito vacío. El test valida el comportamiento
  // esperado y queda en skip hasta que el bug se corrija, para no romper el pipeline.
  it.skip("CP-003 – No permite hacer checkout con el carrito vacío [Bug-001]", () => {
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
