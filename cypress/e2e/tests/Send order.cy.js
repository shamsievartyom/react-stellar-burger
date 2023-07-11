describe('example to-do app', () => {

    const testUser = {
        login: 'testtest@test.test',
        password: 'testtest',
    }

    beforeEach(() => {
        cy.visit('/login')
        cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', { fixture: 'ingredients.json' })
        cy.intercept('POST', 'https://norma.nomoreparties.space/api/auth/login', { fixture: 'login.json' })
        cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', { fixture: 'user.json' })
        cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders', { fixture: 'orders.json' })
    })

    it('should send order', () => {
        cy.get('form input').first().type(testUser.login);
        cy.get('form').find('input').eq(1).type(testUser.password);
        cy.get('form').find('button').click()
        cy.location('pathname').should('eq', '/');
        cy.log('We logged in')//login

        cy.get('.BurgerConstructorList_main__container__fLNNG').find('div').first().children().should('not.exist');//bun in constructor not exist
        cy.get('.BurgerIngredients_article__container__oCf6v > :nth-child(1)').find('li').first().trigger('dragstart');//drag
        cy.get('.BurgerConstructorList_main__container__fLNNG').trigger('drop')//drop
        cy.get('.BurgerConstructorList_main__container__fLNNG').find('div').first().contains('Краторная булка')//bun inside constructor
        cy.log('dnd work fine')//drag bun to constructor

        cy.get('.BurgerConstructor_section__lvpR3').find('.button').click()
        cy.location('pathname').should('eq', '/')
        cy.get('.Modal_window__TpQR8').contains('12023')
        cy.log('order works fine')//open order modal
    })
})  