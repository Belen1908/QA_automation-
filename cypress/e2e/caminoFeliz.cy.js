describe('Happy Path Login', () => {
    it('Abrir pagina de login', () => {
      cy.visit('https://cypress-playground.vercel.app/login')
    })
  })

  it('Iniciar sesion con credenciales validas', () => {
    cy.setvalue('[data-testid="login-email"]').type('test@test.com')
     cy.setvalue('[data-testid="login-password"]').type('123')})

  //  it('formulario registrate', () => {
        //cy.set('.border-b > .text-gray-500').click()
    //})

    describe('Formularios ', () => {
        it('abrir formularios', () => {
            cy.visit('https://cypress-playground.vercel.app/forms')
        })
    })