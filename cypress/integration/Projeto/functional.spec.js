/// <reference types="cypress" />

describe("Should test at a functional level", () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
            cy.get('[data-test=email]').type('matheusipsnobre@gmail.com')
            cy.get('[data-test=passwd]').type('1')
            cy.get('.btn').click()
            cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should create an account',()=>{
        cy.get('[data-test=menu-settings] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')


    })
})