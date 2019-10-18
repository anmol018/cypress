//Cypress.config("defaultCommandTimeout", 10)
const addContext = require('mochawesome/addContext')
describe('Analytics Report', function () {		
    beforeEach(function(){
        cy.viewport(1366, 768)
        cy.loginByCSRF()
         .then((resp) => {
         expect(resp.status).to.eq(204)
         cy.log("Login Successful")
    })
    })
    it('Post Login, Analytics Report, Delinquency', function(){	
        cy.server()
        cy.route('POST','/api/getViewExecutionResult?t=7').as('iteration')
    cy.visit('/api/custom-report/view/run-report/39?t=7++++++++++++&timestampActuals=%7B%22id%22%3A324%2C%22date%22%3A%222019-08-01%22%2C%22templateStatus%22%3A%22APPROVED%22%2C%22template%22%3A%7B%22id%22%3A0%2C%22name%22%3Anull%7D%2C%22status%22%3A%22ADDED%22%2C%22source%22%3A%22ACTUALS%22%2C%22freeze%22%3Afalse%7D&entity=PORTFOLIO++++++++++++&entityId=undefined&rId=39');
    //Delinquency
    cy.get('.ml5 > loss-rate select').should('be.visible').find('option').each(($Doption) => {
    cy.get('.ml5 > loss-rate select').select(($Doption).text()).wait('@iteration').then((response) => {
        expect(response.status).to.eq(200)
        cy.timeConversion(response.duration).then(($value) =>{
    cy.log('Response Duration:',$value)
    cy.log('Delinquency',($Doption).text())
})
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