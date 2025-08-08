describe("API - Mercado Libre", () => {
  it('Debería contener la clave "departments" en la respuesta', () => {
    cy.request({
      method: "GET",
      url: "https://www.mercadolibre.com.ar/menu/departments",
    }).then((response) => {
      // Validar status 200
      expect(response.status).to.eq(200);

      // Validar que exista "departments" en la respuesta
      expect(response.body).to.have.property("departments");

      // Log opcional para ver los departamentos
      cy.log("Departamentos:", JSON.stringify(response.body.departments));
    });
  });
});
