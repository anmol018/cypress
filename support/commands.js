//-- This is a parent command --
  Cypress.Commands.add('loginByCSRF', (csrfToken) => {
    cy.request('/api/application-module/config')
    cy.getCookies().should('have.length', 1).then((cookies) => {
      const $html = cookies[0].value
      cy.log($html)
    cy.request({
      method: 'POST',
      url: '/api/getAuthentication', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        username: 'admin@oxanepartners.com',
      }
    })
    cy.request({
      method: 'POST',
      url: '/api/authentication', // baseUrl is prepended to url
      headers:{
        "X-XSRF-Token": $html
      },
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        username: 'admin@oxanepartners.com',
        password: 'Oxane@123'
      }
    })
  })
})
Cypress.Commands.add('analyticsreport', (element) => {
var end=Cypress.moment('Aug-2018');
       cy.fixture('template.json').then((e)=>{
        e.MONTHLY.ACTUALS.forEach(element => {
           cy.visit('/api/custom-report/view/run-report/'+element.id+'?t=7%20%20%20%20%20%20%20%20%20%20%20%20&timestampActuals=%7B%22id%22:'+element.template.id+',%22date%22:%22'+element.date+'%22,%22templateStatus%22:%22APPROVED%22,%22template%22:%7B%22id%22:0,%22name%22:null%7D,%22status%22:%22ADDED%22,%22source%22:%22ACTUALS%22,%22freeze%22:false%7D&entity=PORTFOLIO%20%20%20%20%20%20%20%20%20%20%20%20&entityId=undefined&rId='+element.id).wait(10000)
           var start=Cypress.moment(element.date);
           startInside = start.subtract(1,'months');
          // component();
       });
      });
    })
Cypress.Commands.add('timeConversion', (millisec) => {
  var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        if (seconds < 60) {
            return seconds + " Sec";
        } else if (minutes < 60) {
            return minutes + " Min";
        } else if (hours < 24) {
            return hours + " Hrs";
        } else {
            return days + " Days"
        }
    })