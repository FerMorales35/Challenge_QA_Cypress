import "cypress-mochawesome-reporter/register";
import login from "../../pages/login";
import home from "../../pages/Home";

describe("Casos de Prueba Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("CP-001 - Login exitoso con usuario estándar", () => {
    cy.fixture("loginData").then((data) => {
      const user = data.validUser;
      login.typeUsername(user.username);
      login.typePassword(user.password);
      login.clickLogin();
      home.validateHomeTitle();
    });
  });

  it("CP-002 - Login fallido con usuario bloqueado", () => {
    cy.fixture("loginData").then((data) => {
      const user = data.invalidUser;
      login.typeUsername(user.username);
      login.typePassword(user.password);
      login.clickLogin();
      login.validationMessageLockedUser();
    });
  });
});
