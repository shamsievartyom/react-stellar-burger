import { BASE_URL } from '../../../src/utils/constants'

describe('example to-do app', () => {

    const testUser = {
        login: 'testtest@test.test',
        password: 'testtest',
    }

    beforeEach(() => {
        cy.visit('/login')
        cy.intercept('GET', (BASE_URL + '/ingredients'), { fixture: 'ingredients.json' })
        cy.intercept('POST', (BASE_URL + '/auth/login'), { fixture: 'login.json' })
        cy.intercept('GET', (BASE_URL + '/auth/user'), { fixture: 'user.json' })
        cy.intercept('POST', (BASE_URL + '/orders'), { fixture: 'orders.json' })
    })

    it('should send order', () => {
        cy.get('form input').first().type(testUser.login);
        cy.get('form').find('input').eq(1).type(testUser.password);
        cy.get('form').find('button').click()
        cy.location('pathname').should('eq', '/react-stellar-burger');
        cy.log('We logged in')//login

        cy.get('[data-testid="BurgerConstructorList_main__container"]').find('div').first().children().should('not.exist');//bun in constructor not exist
        cy.get('[data-testid="BurgerIngredients_article__container"] > :nth-child(1)').find('li').first().trigger('dragstart');//drag
        cy.get('[data-testid="BurgerConstructorList_main__container"]').trigger('drop')//drop
        cy.get('[data-testid="BurgerConstructorList_main__container"]').find('div').first().contains('Краторная булка')//bun inside constructor
        cy.log('dnd work fine')//drag bun to constructor

        cy.get('[data-testid="BurgerConstructor_section"]').find('.button').click()
        cy.location('pathname').should('eq', '/react-stellar-burger')
        cy.get('[data-testid="Modal_window"]').contains('12023')
        cy.log('order works fine')//open order modal
    })
})