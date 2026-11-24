# Cypress E2E – SauceDemo

[![Cypress Tests](https://github.com/FerMorales35/Challenge_QA_Cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/FerMorales35/Challenge_QA_Cypress/actions/workflows/cypress.yml)

Framework de automatización end-to-end (UI + API) con **Cypress + JavaScript**, aplicando **Page Object Model**, datos en fixtures, reportes HTML con **Mochawesome** y ejecución continua con **GitHub Actions**.

## 🎯 Alcance

Sitio bajo prueba: [SauceDemo](https://www.saucedemo.com)

| Módulo | Casos |
|---|---|
| Login | Login exitoso · Usuario bloqueado |
| Carrito / Checkout | Compra completa · Eliminar producto del carrito |
| API | Validación de respuesta y estructura (status 200, claves esperadas) |

Documentación de QA en [`cypress/docs`](cypress/docs): casos de prueba y reporte de bug.

## 🧱 Estructura

```
cypress/
├── e2e/
│   ├── ui/          # Tests de interfaz (login, carrito)
│   └── api/         # Tests de API
├── pages/           # Page Objects
├── fixtures/        # Datos de prueba
├── support/         # Comandos y configuración global
└── docs/            # Casos de prueba y reporte de bug
.github/workflows/   # Pipeline de CI
```

## 🛠 Requisitos

- Node.js 18 o superior
- Git

## 🚀 Instalación

```bash
git clone https://github.com/FerMorales35/Challenge_QA_Cypress.git
cd Challenge_QA_Cypress
npm install
```

## 🧪 Ejecución

```bash
npx cypress run          # Todos los tests (UI + API)
npm run test:login       # Solo login
npm run test:Cart        # Solo carrito y checkout
npm run test:Api         # Solo API
npm run cypress:open     # Modo interactivo
```

## 📊 Reportes

- Reporte HTML en `cypress/reports/` (también se publica como artefacto en cada ejecución del pipeline).
- Capturas automáticas ante fallos en `cypress/screenshots/` y videos en `cypress/videos/`.

## ⚙️ CI

El workflow [`cypress.yml`](.github/workflows/cypress.yml) se ejecuta en cada push y pull request a `main`: instala dependencias, corre los tests en Chrome, genera el reporte Mochawesome y lo sube como artefacto.

---

👤 **Fernando Sebastián Morales** – QA Automation Engineer · [LinkedIn](https://www.linkedin.com/in/fernando-sebasti%C3%A1n-morales-6ba86292/)
