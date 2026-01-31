# 🧪 Cypress E2E – SauceDemo

Projeto de automação de testes End-to-End (E2E) com Cypress no site SauceDemo.  
Site: https://www.saucedemo.com

## ✅ Tecnologias
- JavaScript
- Cypress
- Node.js
- Git/GitHub

## 📁 Estrutura do projeto
```text
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
    checkout.json
    users.json
  support/
    commands.js
    e2e.js
.gitignore
cypress.config.js
package.json
package-lock.json
▶️ Pré-requisitos
Node.js instalado

Git instalado

📦 Instalação
npm install
🚀 Executando os testes
Modo interativo (UI)
npx cypress open
Modo headless (terminal)
npx cypress run
🧠 Arquitetura
Projeto em abordagem Cypress-first (sem Page Object), com:

Commands customizados em cypress/support/commands.js

Uso de data-test nos seletores

Fixtures para dados em cypress/fixtures

🔧 Commands principais
cy.login(username, password)

cy.submitLogin(username, password)

cy.logout()

cy.addItemToCart(itemSlug)

cy.removeItemFromCart(itemSlug)

cy.shouldHaveCartItems(quantity)

cy.startCheckout()

cy.fillCheckoutInfo(data)

cy.finishCheckout()

cy.shouldSeeCheckoutSuccess()

✅ Cenários cobertos
Login
Login com usuário válido

Usuário bloqueado

Senha incorreta

Carrinho
Adicionar produto

Remover produto

Validar quantidade de itens

Checkout
Preencher dados obrigatórios

Finalizar compra com sucesso

Segurança
Acesso a rota protegida sem login
Obs: o SauceDemo pode responder com redirect para login ou 404; o teste trata ambos como bloqueio válido.

👩‍💻 Autora
Eduarda Brezinski