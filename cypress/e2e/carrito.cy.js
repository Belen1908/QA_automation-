describe('Carrito-Sauce Demo', () => {
    beforeEach(()=>{
        cy.login('standard_user', 'secret_sauce')
    })


    it('Compra completa con un producto', () => {
      // Agregar producto al carrito
      cy.addProductToCart('sauce-labs-backpack')
      cy.get('.shopping_cart_badge').should('have.text', '1')
      cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
      // Ir al carrito
      cy.irAlCarrito()
      //cuenta items
      cy.get('.cart_item').should('have.length', 1)
      //llena formulario checkout
      cy.completarCheckOut('Juan', 'Dudoso', '5000')
      // Confirmar pedido
      cy.confirmarPedido()
    })
  
    
    it('Compra completa con tres productos', () => {
  
      // Login 
      cy.login('standard_user', 'secret_sauce')

      // Agregar tre productos
       cy.addProductMore()
  
      // Ir al carrito
      cy.irAlCarrito()
      cy.get('.cart_item').should('have.length', 3)
  
      // Iniciar checkout y completar formulario
      cy.completarCheckOut('Juan', 'Pérez','5000')
  
      // Confirmar pedido
      cy.confirmarPedido()
  
    })
  

    it('Remover 2 productos', () => {
  
      // Login 
      cy.login('standard_user', 'secret_sauce')

      // Agregar dos productos
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_badge').should('have.text', '1')
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_badge').should('have.text', '2')
  
      // Ir al carrito
      cy.irAlCarrito()
      cy.get('.cart_item').should('have.length', 2)
  
      // Eliminar producto, valida que el carrito tenga 1 solo item
      cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_badge').should('have.text', '1')
      cy.get('[data-test="item-quantity"]').should('have.text', '1')
    })

  })