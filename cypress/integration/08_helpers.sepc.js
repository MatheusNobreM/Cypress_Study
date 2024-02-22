/// <reference types="cypress"/>

describe("Helpers...", () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //  cy.get('#formNome').then($el => {
        //     // $el.val('funciona via jquery')
        //     cy.wrap($el).type('funciona via cypress')
        //  })
    

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o SEGUNDO botão'))

    })

    it.only('Its...', () => {
        //cy.visit('https://wcaquino.me/cypress/componentes.html')
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')
    })

    it.only('Invoke...', () => {
        const getValue = () => 1; 

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hacked!"/>')
    })

})