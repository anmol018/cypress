/// <reference types="Cypress" />
describe('My First Test', function () {
		
		
						
	Cypress.Commands.add('loginByCSRF', (csrfToken) => {
	cy.request({
    method: 'POST',
    url: '/login', // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      emailid: 'mashwani.diwakar@oxanepartners.com',
      password: 'welcome@123',
	  _csrf: csrfToken // insert this as part of form body
    }
	})
  })
  beforeEach(function(){
	cy.viewport(1366, 768)
	//cy.clear('caches')
  })
  		
    it('Post New Transaction Creation, Searching it on Pipeline Module', function(){		
		cy.request('/')
      .its('body')
      .then((body) => {
        // we can use Cypress.$ to parse the string body
        // thus enabling us to query into it easily
        const $html = Cypress.$(body)
        const csrf  = $html.find("input[name=_csrf]").val()

            cy.loginByCSRF(csrf)
            .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.include("Dashboard")
		    //Navigation to Pipeline Module
      cy.visit('/runCustomReport?customReportId=17&platformCurrency=%7B%22codeValueId%22:79,%22codeValueKey%22:%22EUR%22,%22codeValue%22:%22EUR%22,%22active%22:true%7D&entity=PORTFOLIO&entityId=PORTFOLIO&timestampActuals=%7B%22date%22:%22Jan-2019%22,%22templateStatus%22:%22APPROVED%22,%22bpEndDate%22:%2201-Jan-2024%22,%22bpName%22:%22Jan-2019%22,%22templateFrequencyId%22:438,%22source%22:%22ACTUALS%22,%22bpStartDate%22:%2201-Feb-2019%22,%22status%22:%22ADDED%22%7D&timestampRebp=undefined&t=2&tn=Costa&ds=MANAGEMENT').wait(10000)
      cy.get('.bd-left-0 > chart.ng-isolate-scope > [ng-if="vm.config"] > .bd-bottom > .fr').select('UW')
      //cy.get("chart[config='vm.laPieConfig.config']").siblings().contains('Current')
      cy.get('.bd-left-0 > chart.ng-isolate-scope > [ng-if="vm.config"] > #chart-')
      .should('be.visible')
      cy.get(':nth-child(2) > :nth-child(1) > .h5 > .plr5').click()
      cy.get('.icon-cross').click()
      cy.get(':nth-child(3) > :nth-child(1) > .h5 > .plr5').click()
      cy.get('.icon-cross').click()
      cy.get(':nth-child(4) > :nth-child(1) > .h5 > .plr5').click()
      cy.get('.icon-cross').click()
      cy.get('.flex-1.mr5 > ox-table.ng-scope > [ng-class="vm.config.class"] > .wid-100 > .ml-auto').select('Asset Type')
      cy.get('.flex-1.mr5 > ox-table.ng-scope > [ng-class="vm.config.class"] > .table > [ng-if="!vm.groupBy"] > tr.ng-scope > td.leftAlign > .ng-isolate-scope > .ng-scope > .ng-binding > .leftAlign').click()
      cy.get('.fixed > .pointer')
      .should('be.visible').click().wait(5000)
      cy.get(':nth-child(19) > .bg-color-white > [ng-class="vm.config.class"] > .table > [ng-if="!vm.groupBy"] > tr.ng-scope > :nth-child(1)')
      .should('be.visible').click()
      cy.get('.fixed > .pointer')
      .should('be.visible').click()

  		})
		})
	})
})