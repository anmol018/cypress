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
        username: 'ashwani.diwakar@oxanepartners.com',
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
        username: 'ashwani.diwakar@oxanepartners.com',
        password: 'welcome@123'
      }
    })
  })
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