/// <reference types="Cypress" />
describe('My First Test', function () {		
    beforeEach(function(){
        cy.viewport(1366, 768)
         cy.loginByCSRF()
         .then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.include("Dashboard")
})
    })
    it('Post Login, Loan Summary Report', function(){	
     cy.visit('http://172.16.1.4/mng/runCustomReport?customReportId=17&platformCurrency=%7B%22codeValueId%22:79,%22codeValueKey%22:%22EUR%22,%22codeValue%22:%22EUR%22,%22active%22:true%7D&entity=PORTFOLIO&entityId=PORTFOLIO&timestampActuals=%7B%22date%22:%22Jan-2019%22,%22templateStatus%22:%22APPROVED%22,%22bpEndDate%22:%2201-Jan-2024%22,%22bpName%22:%22Jan-2019%22,%22templateFrequencyId%22:370,%22source%22:%22ACTUALS%22,%22bpStartDate%22:%2201-Feb-2019%22,%22status%22:%22ADDED%22%7D&timestampRebp=undefined&t=9&tn=Dominus&ds=MANAGEMENT')
     .wait(5000);
     
                
    })
})