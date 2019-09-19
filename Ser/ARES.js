/// <reference types="Cypress" />
describe('login',() =>

{

   it('go to login',() =>{
       cy.request('https://ares.oxanepanorama.com').then((response) => {
       cy.log(response.duration).wait(5000)
       cy.get('#username')
       .type("ashwani.diwakar@oxanepartners.com")
       cy.get('.btn').click().wait(4000)
       cy.get('#password')
       .type("welcome@123")
       cy.get('.btn').click().wait(4000)
      
       //cy.get(':nth-child(1) > .dashboard-nav-item > .dashboard-nav-link > .dashboard-nav-icon').click().wait(3000)
       cy.get(':nth-child(15) > .datatable-body-row > .datatable-row-center > [style="width: 200px; height: auto; min-width: 200px; max-width: 200px;"] > .datatable-body-cell-label > .text-truncate').click().wait(6000)
       
       
       var end=Cypress.moment('Feb-2018');
       cy.fixture('template.json').then((e)=>{
        e.MONTHLY.ACTUALS.forEach(element => {
           cy.visit('https://ares.oxanepanorama.com/api/custom-report/view/run-report/'+element.id+'?t=7%20%20%20%20%20%20%20%20%20%20%20%20&timestampActuals=%7B%22id%22:'+element.template.id+',%22date%22:%22'+element.date+'%22,%22templateStatus%22:%22APPROVED%22,%22template%22:%7B%22id%22:0,%22name%22:null%7D,%22status%22:%22ADDED%22,%22source%22:%22ACTUALS%22,%22freeze%22:false%7D&entity=PORTFOLIO%20%20%20%20%20%20%20%20%20%20%20%20&entityId=undefined&rId='+element.id).wait(10000)
           var start=Cypress.moment(element.date);
           startInside = start.subtract(1,'months');
          // component();
       });
      });

      function component()
      {
 
     //Roll Rate Analysis #Loans
     cy.get('.mr10').should('be.visible').select('# Loans').wait(40000)
     while(startInside.diff(end)>=0){
         cy.get('.ng-isolate-scope > .ptb5 > [ng-if="vm.dropDown.length"]').should('be.visible').select(startInside.format('YYYY-MM-DD')).wait(20000)
         startInside = startInside.add(1,'months');
     }
     //Trend Analysis
     cy.get(':nth-child(3) > .ml5 > .ng-isolate-scope > [ng-if="vm.config"] > .wid-100 > .fr').should('be.visible').select('Clarity Bank Score').wait(20000)
     cy.get(':nth-child(3) > .ml5 > .ng-isolate-scope > [ng-if="vm.config"] > .wid-100 > .fr').should('be.visible').select('Clarity Fraud Score').wait(20000)
     cy.get(':nth-child(3) > .ml5 > .ng-isolate-scope > [ng-if="vm.config"] > .wid-100 > .fr').should('be.visible').select('APR').wait(20000)
     cy.get(':nth-child(3) > .ml5 > .ng-isolate-scope > [ng-if="vm.config"] > .wid-100 > .fr').should('be.visible').select('Origination Amount').wait(20000)
     cy.get(':nth-child(3) > .ml5 > .ng-isolate-scope > [ng-if="vm.config"] > .wid-100 > .fr').should('be.visible').select('Term').wait(20000)
    //Loss Rate Analysis - OPPFI Score
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('200 - 400').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('400 - 600').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('600 - 800').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('800+').wait(4000)
     //Loss Rate Analysis - Clarity Bank Score
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > .ng-pristine').should('be.visible').select('Clarity Bank Score').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('400 - 700').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('700 - 800').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('800 - 850').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('850+').wait(4000)
     //Loss Rate Analysis - Clarity Fraud Score
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Clarity Fraud Score').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('400 - 700').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('700 - 800').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('800 - 850').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('850+').wait(4000)
     //Loss Rate Analysis - APR
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('APR').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('50% - 100%').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('100% - 150%').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('150%+').wait(4000)
     
     //Loss Rate Analysis - Origination Amount
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Origination Amount').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('500 - 2000').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('2000 - 4000').wait(4000)
     cy.get(':nth-child(4) > :nth-child(1) > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('4000+').wait(4000)
     
    
     //Strats  - OPPFI Score
     //cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Term').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('APR').wait(2000)
     //Strats  - Clarity Bank Score
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Clarity Bank Score').wait(2000)
     //cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Term').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('APR').wait(2000)
     //Strats  - Clarity Fraud Score
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Clarity Fraud Score').wait(2000)
     //cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Term').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('APR').wait(2000)
     //Strats  - APR
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('APR').wait(2000)
    // cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('OPPFI Score').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Term').wait(2000)
     //Strats  - Origination Amount
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Origination Amount').wait(2000)
     //cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('OPPFI Score').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Term').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('APR').wait(2000)
     //Strats  - Term
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.support.length"]').should('be.visible').select('Term').wait(2000)
     //cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('OPPFI Score').wait(2000)
     cy.get('.mr5 > loss-rate.ng-scope > .ptb5 > [ng-if="vm.supportLimits.length"]').should('be.visible').select('APR').wait(2000)
     //Delinquency Vs Company Score
     cy.get(':nth-child(5) > .ml5 > chart.ng-scope > [ng-if="vm.config"] > .ptb5 > .fr').should('be.visible').select('Clarity Bank Score').wait(2000)
     cy.get(':nth-child(5) > .ml5 > chart.ng-scope > [ng-if="vm.config"] > .ptb5 > .fr').should('be.visible').select('Clarity Fraud Score').wait(2000)
     cy.get(':nth-child(5) > .ml5 > chart.ng-scope > [ng-if="vm.config"] > .ptb5 > .fr').should('be.visible').select('APR').wait(2000)
     cy.get(':nth-child(5) > .ml5 > chart.ng-scope > [ng-if="vm.config"] > .ptb5 > .fr').should('be.visible').select('Origination Amount').wait(2000)
     cy.get(':nth-child(5) > .ml5 > chart.ng-scope > [ng-if="vm.config"] > .ptb5 > .fr').should('be.visible').select('Term').wait(2000)
     //Strats
     cy.get('strats.ng-scope > .wid-100 > .fr').should('be.visible').select('Clarity Bank Score').wait(2000)
     cy.get('strats.ng-scope > .wid-100 > .fr').should('be.visible').select('Clarity Fraud Score').wait(2000)
     cy.get('strats.ng-scope > .wid-100 > .fr').should('be.visible').select('APR').wait(2000)
     cy.get('strats.ng-scope > .wid-100 > .fr').should('be.visible').select('Origination Amount').wait(2000)
     cy.get('strats.ng-scope > .wid-100 > .fr').should('be.visible').select('Term').wait(2000)
 
 
 }
      
  
 })
 })
})
