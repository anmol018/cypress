//-- This is a parent command --
  Cypress.Commands.add('loginByCSRF', (csrfToken) => {
    cy.request('/')
    .its('body')
    .then((body) => {
      // we can use Cypress.$ to parse the string body
      // thus enabling us to query into it easily
      const $html = Cypress.$(body)
      const csrfToken  = $html.find("input[name=_csrf]").val()
    cy.request({
      method: 'POST',
      url: '/login', // baseUrl is prepended to url
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        emailid: 'mritunjay.sinha@oxanepartners.com',
        password: 'C@ge2018',
        _csrf: csrfToken // insert this as part of form body
      }
    })
    })
  })           