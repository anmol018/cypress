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
    it('Post Login, Analytics Report, Geographic Concentration', function(){	
    cy.visit('/api/custom-report/view/run-report/39?t=7++++++++++++&timestampActuals=%7B%22id%22%3A324%2C%22date%22%3A%222019-08-01%22%2C%22templateStatus%22%3A%22APPROVED%22%2C%22template%22%3A%7B%22id%22%3A0%2C%22name%22%3Anull%7D%2C%22status%22%3A%22ADDED%22%2C%22source%22%3A%22ACTUALS%22%2C%22freeze%22%3Afalse%7D&entity=PORTFOLIO++++++++++++&entityId=undefined&rId=39');
     //cy.get('[ng-if="!vm.showPopup"] > .wid-100 > .mr10').select('Eligible Portfolio')
     cy.getCookies().then((cookies) => {
     const $html = cookies[0].value
     cy.log('Component:- Geographic Concentations')
     cy.log('Eligible Portfolio * WAVG OPPFI Score')
     //cy.get('[ng-if="!vm.showPopup"] > .wid-100 > .mr10').select('Eligible Portfolio').
     //cy.log('Eligible Portfolio Request')
     cy.request({
      method: 'POST',
      url: '/api/getViewExecutionResult?t=7', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      body: {
        "result": {
        "key": "GEOGRAPHIC_CONCENTRATION_SCORE",
        "arguments": {
        "TRANSACTION_ID": "TRANSACTION_ID",
        "TEMPLATE_FREQUENCY_ID": 324
      }
      }
      }
    }).then((response) => {
      //cy.writeFile('cypress/fixtures/menu.json',response.body.result.result)
    })
     cy.request({
      method: 'POST',
      url: '/api/getViewExecutionResult?t=7', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      body: {"component_config":{"key":"COMPONENT_CONFIG","arguments":{"TRANSACTION_ID":"TRANSACTION_ID"},"groupBy":"component_key"}}
      }).then((response) => {
      cy.writeFile('cypress/fixtures/menu.json',response.body.result.component_config.ROLL_RATE_ANALYSIS)
      //cy.log(response.body.result.result).writeFile('cypress/fixtures/menu.json',response.body.result.result)
      cy.timeConversion(response.duration).then((value) =>{
      cy.log('Eligible Portfolio Duration',value)
      })
    })
    //cy.log('Total Portfolio Request')
    cy.request({
      method: 'POST',
      url: '/api/getViewExecutionResult?t=7', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      body: {
        "result": {
        "key": "GEOGRAPHIC_CONCENTRATION_SCORE_INC",
        "arguments": {
        "TRANSACTION_ID": "TRANSACTION_ID",
        "TEMPLATE_FREQUENCY_ID": 324
      }
      }
      }
    }).then((response) => {
      //cy.writeFile('cypress/fixtures/menu.json',response.body.result.result)
      //cy.log(response.body.result.result).writeFile('cypress/fixtures/menu.json',response.body.result.result)
      cy.timeConversion(response.duration).then((value) =>{
      cy.log('Total Portfolio Duration',value)
    })  
    })
    cy.request({
      method: 'POST',
      url: '/api/getViewExecutionResult?t=7', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      body: {"result":{"key":"GEOGRAPHIC_CONCENTRATION_LOAN_INC","arguments":{"TRANSACTION_ID":"TRANSACTION_ID","TEMPLATE_FREQUENCY_ID":324}}}
    }).then((response) => {
      //cy.writeFile('cypress/fixtures/menu.json',response.body.result.result)
      //cy.log(response.body.result.result).writeFile('cypress/fixtures/menu.json',response.body.result.result)
      cy.timeConversion(response.duration).then((value) =>{
      cy.log('Total Portfolio * #Receivables Duration',value)
      })
    })
})
})
})
    