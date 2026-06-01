describe ('Login Sauce Demo',()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login exitoso',()=>{
        // cy.log('test 1') 
        cy.login('standard_user', 'secret_sauce')

        cy.get('.app_logo').should('have.text', 'Swag Labs')
    })

    it('Login con contrasenia incorrecta',()=>{
        // cy.log('test 2')
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('12345')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match any user in this service')  
    })

    it('Login vacio',()=>{
        // cy.log('test 2')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username is required')  
    })
    it('Login locked',()=>{
        // cy.log('test 2')
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Sorry, this user has been locked out')  
    })

    it('LogoutUsr',()=>{
        // cy.log('test 1') 
        cy.login('standard_user', 'secret_sauce')
        cy.logout()
    })

    
    

})