---

```md
# 🧪 Cypress E2E – SauceDemo

Projeto de **automação de testes End-to-End (E2E)** utilizando **Cypress**, aplicado ao site de demonstração **SauceDemo**  
🔗 https://www.saucedemo.com

O objetivo deste projeto é validar os principais fluxos funcionais da aplicação, cobrindo **login, carrinho, checkout e segurança**, seguindo **boas práticas de automação** e uma arquitetura moderna **Cypress-first** (sem Page Object).

---

## 🚀 Tecnologias utilizadas
- **JavaScript**
- **Cypress**
- **Node.js**
- **Git / GitHub**

---

## 📁 Estrutura do projeto

```

cypress/
e2e/
checkout/
checkout.cy.js
inventory/
cart.cy.js
login/
login.cy.js
logout.cy.js
fixtures/
users.json
checkout.json
support/
commands.js
e2e.js
.gitignore
cypress.config.js
package.json
package-lock.json

````

### 📌 Descrição das pastas
- **e2e/** → Specs organizados por funcionalidade
- **fixtures/** → Massa de dados (usuários e dados de checkout)
- **support/** → Commands customizados e configurações globais do Cypress

---

## ▶️ Pré-requisitos
Antes de rodar o projeto, você precisa ter instalado:
- **Node.js**
- **Git**

---

## 📦 Instalação
Clone o repositório e instale as dependências:

```bash
npm install
````

---

## ▶️ Executando os testes

### 🔹 Modo interativo (Cypress UI)

```bash
npx cypress open
```

### 🔹 Modo headless (terminal / CI)

```bash
npx cypress run
```

---

## 🧠 Arquitetura adotada

Este projeto **não utiliza Page Object Model (POM)**.

A abordagem adotada é:

* **Commands customizados** (`cypress/support/commands.js`)
* **Seletores baseados em `data-test`**
* **Fluxos explícitos nos testes**
* **Reuso através de comandos e fixtures**

Essa estratégia é alinhada com as recomendações modernas do Cypress, priorizando:

* Legibilidade
* Manutenção
* Redução de acoplamento

---

## 🔧 Commands customizados (exemplos)

Os principais comandos utilizados no projeto:

```js
cy.login(username, password)
cy.submitLogin(username, password)
cy.logout()

cy.addItemToCart(itemSlug)
cy.removeItemFromCart(itemSlug)
cy.shouldHaveCartItems(quantity)

cy.startCheckout()
cy.fillCheckoutInfo(data)
cy.finishCheckout()
```

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

  > O teste trata tanto **redirect para login** quanto **404**, pois ambos representam bloqueio de acesso válido no SauceDemo.

---

## 📊 Massa de dados

Os dados de teste estão centralizados em:

* `cypress/fixtures/users.json`
* `cypress/fixtures/checkout.json`

Isso facilita manutenção e reutilização dos cenários.

---

## ⚙️ Configuração do Cypress

Arquivo `cypress.config.js`:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
  },
})
```

---

## 📌 Observações importantes

* O SauceDemo pode retornar **404** ao acessar rotas protegidas sem login.
* O teste de segurança considera esse comportamento como **válido**.
* O projeto está preparado para execução local e em pipelines CI.

---

## 👩‍💻 Autora

**Eduarda Brezinski**
Projeto desenvolvido com foco em **boas práticas de QA Automation e portfólio profissional**.

