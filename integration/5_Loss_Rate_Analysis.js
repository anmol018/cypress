/// <reference types="Cypress" />
describe('Analytics Report', function () {		
    beforeEach(function(){
        cy.viewport(1366, 768)
        cy.loginByCSRF()
         .then((resp) => {
         expect(resp.status).to.eq(204)
         cy.log("Login Successful")
    })
    })
    it('Post Login, Analytics Report, Roll Rate Analysis', function(){	
    cy.visit('/api/custom-report/view/run-report/39?t=7++++++++++++&timestampActuals=%7B%22id%22%3A324%2C%22date%22%3A%222019-08-01%22%2C%22templateStatus%22%3A%22APPROVED%22%2C%22template%22%3A%7B%22id%22%3A0%2C%22name%22%3Anull%7D%2C%22status%22%3A%22ADDED%22%2C%22source%22%3A%22ACTUALS%22%2C%22freeze%22%3Afalse%7D&entity=PORTFOLIO++++++++++++&entityId=undefined&rId=39').wait(10000);
 //Loss Rate Analysis
  cy.get('#lossRateAnalysis > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').find('option').each(($LRAoption) => {
  cy.get('#lossRateAnalysis > .ptb5 > [ng-if="vm.support.length"]').select(($LRAoption).text())
  cy.get('#lossRateAnalysis > .ptb5 > [ng-if="vm.supportLimits.length"]').find('option').each(($LRAscenario) => {
  cy.get('#lossRateAnalysis > .ptb5 > [ng-if="vm.supportLimits.length"]').select(($LRAscenario).text())
  //cy.get('#lossRateAnalysis > .ptb5 > .ng-isolate-scope > .plr10 > .icon-arrowdown').click()
  //cy.get('#lossRateAnalysis > .ptb5 > .ng-isolate-scope > .p5').find('label').each(($country)=> {
  //cy.get('#lossRateAnalysis > .ptb5 > .ng-isolate-scope > .p5 > .noStyle .ng-pristine').click(($country).text())    
  cy.log(($LRAoption).text(),($LRAoption).text())
})
})
})
})
