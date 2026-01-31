
---

````md
# 🧪 Cypress E2E – SauceDemo

![Cypress CI](https://github.com/brezinskieduarda/cypress/actions/workflows/ci.yml/badge.svg)

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
````

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* **Node.js**
* **Git**

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

---

## ▶️ Executando os testes

### 🔹 Modo interativo (UI)

Executa os testes com interface gráfica do Cypress:

```bash
npx cypress open
```

### 🔹 Modo headless (terminal / CI)

Executa todos os testes de forma automática:

```bash
npx cypress run
```

---

## 🧠 Arquitetura do projeto

Este projeto segue uma abordagem **Cypress-first**, sem utilização de **Page Object Model (POM)**.

### Principais características:

* ✅ **Commands customizados** para reaproveitamento de ações
* ✅ **Seletores baseados em `data-test`**
* ✅ **Fixtures** para centralização da massa de dados
* ✅ Testes organizados por **funcionalidade**

Essa abordagem prioriza:

* Legibilidade
* Manutenção
* Menor acoplamento
* Aderência às boas práticas recomendadas pelo Cypress

---

## 🧪 Cenários automatizados

### 🔐 Login

* Login com usuário válido
* Login com usuário bloqueado
* Login com senha incorreta

### 🛒 Carrinho

* Adicionar produto ao carrinho
* Remover produto do carrinho
* Validação da quantidade de itens

### 💳 Checkout

* Preenchimento dos dados obrigatórios
* Finalização de compra com sucesso

### 🔒 Segurança

* Tentativa de acesso a rota protegida sem login

  > O SauceDemo pode responder com **redirect para login** ou **404**, ambos tratados como bloqueio válido.

---

## 👩‍💻 Autora

**Eduarda Brezinski**
Projeto desenvolvido com foco em **boas práticas de QA Automation** e **portfólio profissional**.

