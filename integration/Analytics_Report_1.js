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
    it('Post Login, Analytics Report', function(){	
    cy.visit('/api/custom-report/view/run-report/39?t=7++++++++++++&timestampActuals=%7B%22id%22%3A324%2C%22date%22%3A%222019-08-01%22%2C%22templateStatus%22%3A%22APPROVED%22%2C%22template%22%3A%7B%22id%22%3A0%2C%22name%22%3Anull%7D%2C%22status%22%3A%22ADDED%22%2C%22source%22%3A%22ACTUALS%22%2C%22freeze%22%3Afalse%7D&entity=PORTFOLIO++++++++++++&entityId=undefined&rId=39');
    //Geographic Concentrations
    cy.get('[ng-if="!vm.showPopup"] > .wid-100 > .mr10').find('option').each(($portfolio) => {
    cy.get('[ng-if="!vm.showPopup"] > .wid-100 > .mr10').select(($portfolio).text())
    cy.get('[ng-if="!vm.showPopup"] > .wid-100 > [ng-if="vm.dropDown.length"]').find('option').each(($scenario) => {
    cy.get('[ng-if="!vm.showPopup"] > .wid-100 > [ng-if="vm.dropDown.length"]').select(($scenario).text())
    cy.log(($portfolio).text(),($scenario).text())   
})
}) 
    //Receivables Concentrations
    cy.get('.pr5 > .border > [ng-if="vm.config"] > .ptb5 > .fr').find('option').each(($RCscenario) => {
    cy.get('.pr5 > .border > [ng-if="vm.config"] > .ptb5 > .fr').select(($RCscenario).text())
    cy.log('Receivables Concentrations',($RCscenario).text())
})
   //Receivables Concentrations
    cy.get('.pl5 > .border > [ng-if="vm.config"] > .ptb5 > .fr').find('option').each(($RCscenario1) => {
    cy.get('.pl5 > .border > [ng-if="vm.config"] > .ptb5 > .fr').select(($RCscenario1).text())
    cy.log('Receivables Concentrations',($RCscenario1).text())
})
 //Roll Rate Analysis
  cy.get('.ng-isolate-scope > .wid-100 > .mr10').find('option').each(($RRAoption) => {
  cy.get('.ng-isolate-scope > .wid-100 > .mr10').select(($RRAoption).text())
  cy.get('.ng-isolate-scope > .wid-100 > [ng-if="vm.dropDown.length"]').find('option').each(($months) => {
  cy.get('.ng-isolate-scope > .wid-100 > [ng-if="vm.dropDown.length"]').select(($months).text()).wait(2000).then((response) =>{
  cy.timeConversion(response.duration).then((value) =>{
  cy.log(($RRAoption).text(),($months).text(),value)
})
})   
})
}) 
})
})