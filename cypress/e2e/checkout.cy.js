describe('Checkout Demo-Souce', () =>{
    it('Checkout completo correctamente', () => {
        // Login 
        cy.login('standard_user','secret_sauce' )
        // Agregar producto y completar compra
        cy.addProductToCart('sauce-labs-backpack')
        cy.get('.shopping_cart_link').click()
        cy.completarCheckOut('Juan', 'Pérez','5000')
        cy.confirmarPedido()
    
        // Logout
        //cy.logout()  
      })

      it('Checkout campos vacios', () => {
        // Login 
       cy.login('standard_user','secret_sauce' )
        // Agregar producto y completar compra
       cy.addProductToCart('sauce-labs-backpack')
       cy.get('.shopping_cart_link').click()
       cy.get('[data-test="checkout"]').click()
       cy.url().should('include', '/checkout-step-one.html')
       cy.get('[data-test="continue"]').click()
       cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Error: First Name is required')  
  
      })

    })