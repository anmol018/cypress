/// <reference types="Cypress" />
//Cypress.config("defaultCommandTimeout", 10)
const addContext = require('mochawesome/addContext')

describe('Rapid Finance RCF', function () {		
    beforeEach(function(){
        cy.viewport(1366, 768)
        cy.loginByCSRF()
         .then((resp) => {
         expect(resp.status).to.eq(204)
         cy.log("Login Successful")
         
    })
    })
    it('Post Login,Loan Summary', function(){
        // cy.server()
        // cy.route('POST','api/getViewExecutionResult?t=7').as('iteration')
         cy.fixture("5_Rapid.json").then((e)=>{
            e.MONTHLY.ACTUALS.forEach(element => {
                cy.visit('/api/custom-report/view/run-report/8?t='+element.tid+'%20%20%20%20%20%20%20%20%20%20%20%20&timestampActuals=%7B%22id%22:'+element.id+',%22date%22:%22'+element.date+'%22,%22templateStatus%22:%22APPROVED%22,%22template%22:%7B%22id%22:0,%22name%22:null%7D,%22status%22:%22ADDED%22,%22source%22:%22ACTUALS%22,%22freeze%22:false%7D&entity=PORTFOLIO%20%20%20%20%20%20%20%20%20%20%20%20&entityId=undefined&rId=8');
                cy.get('#chart-delinquencyStratificationDPD').should('be.visible')
                     })
         }) 
         Cypress.on('test:after:run', (test, runnable) => {
            if (test.state === 'failed') {
                const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
                addContext({ test }, `${Cypress.spec.name}/${screenshotFileName}`)
            }
            })
        })
        it('Post Login, Stratification', function(){
        cy.fixture("5_Rapid.json").then((e)=>{
            e.MONTHLY.ACTUALS.forEach(element => {
        cy.visit('api/custom-report/view/run-report/9?t='+element.tid+'%20%20%20%20%20%20%20%20%20%20%20%20&timestampActuals=%7B%22id%22:'+element.id+',%22date%22:%22'+element.date+'%22,%22templateStatus%22:%22APPROVED%22,%22template%22:%7B%22id%22:0,%22name%22:null%7D,%22status%22:%22ADDED%22,%22source%22:%22ACTUALS%22,%22freeze%22:false%7D&entity=PORTFOLIO%20%20%20%20%20%20%20%20%20%20%20%20&entityId=undefined&rId=9');
        cy.get('.flex.mt10 > .flex-1.ml5 > chart.ng-isolate-scope > [ng-if="vm.config"] > #chart-').should('be.visible')
})
})
        Cypress.on('test:after:run', (test, runnable) => {
            if (test.state === 'failed') {
                const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
                addContext({ test }, `${Cypress.spec.name}/${screenshotFileName}`)
            }
            })
   

})
})