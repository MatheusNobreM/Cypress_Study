const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home] > .fas',
        SETTINGS: '[data-test=menu-settings] > .fas',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(.,'Conta teste')]/..//i[@class='far fa-edit']"
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERRESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        BTN_SALVAR: '.btn-primary',
        STATUS: '.col-2',
    },
    EXTRATO: {
        LINHAS: ".list-group > li",
        XP_BUSCA_ELEMENTO: "//span[contains(.,'Desc')]/following-sibling::small[contains(.,'123')]",
    },
    SALDO:{
        FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/../td[2]`
    },
    MESSAGE: '.toast-message'
}



export default locators;