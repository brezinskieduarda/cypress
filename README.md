# 🧪 Cypress E2E – SauceDemo

![Cypress CI](https://github.com/brezinskieduarda/cypress/actions/workflows/ci.yml/badge.svg?branch=main)

Projeto de automação de testes End-to-End (E2E) utilizando **Cypress**, aplicado ao site SauceDemo.  
🔗 https://www.saucedemo.com

---

## ✅ Tecnologias
- JavaScript
- Cypress
- Node.js
- Git / GitHub

---

## 📁 Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── checkout/
│   │   └── checkout.cy.js
│   ├── inventory/
│   │   └── cart.cy.js
│   └── login/
│       ├── login.cy.js
│       └── logout.cy.js
├── fixtures/
│   ├── checkout.json
│   └── users.json
├── support/
│   ├── commands.js
│   └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── package-lock.json
⚙️ Pré-requisitos
Node.js

Git

📦 Instalação
npm install
▶️ Executando os testes
🔹 Modo interativo (UI)
npx cypress open
🔹 Modo headless (terminal / CI)
npx cypress run
🧠 Arquitetura do projeto
Abordagem Cypress-first (sem Page Object), com:

Commands customizados (cypress/support/commands.js)

Seletores baseados em data-test

Fixtures em cypress/fixtures

🧪 Cenários automatizados
🔐 Login
Login com usuário válido

Login com usuário bloqueado

Login com senha incorreta

🛒 Carrinho
Adicionar produto ao carrinho

Remover produto do carrinho

Validação da quantidade de itens

💳 Checkout
Preenchimento dos dados obrigatórios

Finalização de compra com sucesso

🔒 Segurança
Tentativa de acesso a rota protegida sem login (redirect ou 404)

👩‍💻 Autora
Eduarda Brezinski