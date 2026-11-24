// Tests de API sobre JSONPlaceholder (API REST pública de prueba)
const API = "https://jsonplaceholder.typicode.com";

describe("API - /posts", () => {
  it("API-01 - GET /posts devuelve 100 posts", () => {
    cy.request(`${API}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("application/json");
      expect(response.body).to.have.length(100);
    });
  });

  it("API-02 - GET /posts/1 respeta el contrato", () => {
    cy.request(`${API}/posts/1`).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.all.keys("userId", "id", "title", "body");
      expect(body.id).to.eq(1);
    });
  });

  it("API-03 - POST /posts crea un recurso", () => {
    const payload = { title: "QA Automation", body: "Creado desde Cypress", userId: 1 };
    cy.request("POST", `${API}/posts`, payload).then(({ status, body }) => {
      expect(status).to.eq(201);
      expect(body).to.include(payload);
      expect(body).to.have.property("id");
    });
  });

  it("API-04 - GET de un recurso inexistente devuelve 404", () => {
    cy.request({ url: `${API}/posts/99999`, failOnStatusCode: false }).then(({ status }) => {
      expect(status).to.eq(404);
    });
  });
});
