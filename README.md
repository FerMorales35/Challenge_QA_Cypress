# Challenge_QA - Cypress Automation Framework

Automatización de pruebas end-to-end (UI + API) con Cypress.

---

## 🎯 Objetivo

Este proyecto automatiza las pruebas end-to-end de la web [SauceDemo](https://www.saucedemo.com), cubriendo:

- Inicio de sesión
- Gestión del carrito de compras
- Validaciones de API de MercadoLibre

---

## 🛠 Requisitos previos

Antes de clonar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Git (para clonar el repositorio)

---

## 🚀 Instalación

1. Clonar el proyecto o copiar la carpeta:

   ```bash
   git clone <url-del-repo> && cd Challenge_QA
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

---

## 🧪 Ejecutar pruebas

1. ✅ Todas las pruebas (UI + API):
   ```bash
   npx cypress run
   ```
2. ✅ Ejecutar test específico:

   ```bash
   npm run test:login -> Casos de prueba sobre Login
   npm run test:Cart -> Casos de prueba sobre carro de compras
   npm run test:Api -> Caso de prueba sobre la Api de MercadoLibre
   ```

3. ✅ Ejecutar test desde interfaz de Cypress:
   ```bash
   npm run cypress:open
   ```

---

## 📸 Capturas de pantalla

Cypress genera automáticamente capturas al fallar:

```bash
cypress/screenshots/
```

---

## 📊 Reportes (HTML)

Los reportes se generan en:

```bash
cypress/reports/
```

---
