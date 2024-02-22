/// <reference types="cypress" />

describe("Wait...", () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()

    })

    it('Must wait for the elements to be available', ()=> {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })

    it.only('Use of find', ()=> {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', "Item 1")
        cy.get('#lista li span')
            .should('contain', "Item 2")
    })

    it.only("Use of timeout", ()=> {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', {timeout: 1000}).type('Funciona')        
        //cy.get('#novoCampo').type('Funciona')        

        
        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', "Item 2")
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
    })
})