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
  cy.visit('/api/custom-report/view/run-report/39?t=7++++++++++++&timestampActuals=%7B%22id%22%3A324%2C%22date%22%3A%222019-08-01%22%2C%22templateStatus%22%3A%22APPROVED%22%2C%22template%22%3A%7B%22id%22%3A0%2C%22name%22%3Anull%7D%2C%22status%22%3A%22ADDED%22%2C%22source%22%3A%22ACTUALS%22%2C%22freeze%22%3Afalse%7D&entity=PORTFOLIO++++++++++++&entityId=undefined&rId=39');
 //Roll Rate Analysis
  cy.get('.ng-isolate-scope > .wid-100 > .mr10').find('option').each(($RRAoption) => {
  cy.get('.ng-isolate-scope > .wid-100 > .mr10').select(($RRAoption).text())
  cy.get('.ng-isolate-scope > .wid-100 > [ng-if="vm.dropDown.length"]').find('option').each(($months) => {
  cy.get('.ng-isolate-scope > .wid-100 > [ng-if="vm.dropDown.length"]').select(($months).text())      
  cy.log(($RRAoption).text(),($months).text())
})
})
})
})
