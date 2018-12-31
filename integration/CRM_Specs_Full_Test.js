/// <reference types="Cypress" />
const str1 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomnumbers = () => Math.floor(Math.random() * 10000000);
const lrandomnumbers = () => Math.floor(Math.random() * 10000);	
const mrandomnumbers = () => Math.floor(Math.random() * 1000);
const srandomnumbers = () => Math.floor(Math.random() * 100);

let tvalue;
let tarea;
let mvalue;
let compn;
let compalias;
let compph;
let compwebsite;
let address1
let address2
let address3
let randtext;
	describe('CRM Test with Full Details', function () {	
	Cypress.Commands.add('loginByCSRF', (csrfToken) => {
	cy.request({
    method: 'POST',
    url: '/login', // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      emailid: 'mritunjay.sinha@oxanepartners.com',
      password: 'Oxane@123',
	  _csrf: csrfToken // insert this as part of form body
    }
	})
  })
  beforeEach(function(){
	cy.viewport(1366, 768)
	cy.clearLocalStorage()
  })
  tvalue = `${randomnumbers()}`
  tarea = `${lrandomnumbers()}`
  mvalue = `${randomnumbers()}`
  compn = `Finance${randomnumbers()}`
  compalias = `FF${srandomnumbers()}`
  compph = `${randomnumbers()}`
  compwebsite = `www.${str1()}.com`
  randtext = `${str1()}`
  address1 = `${str1()}`
  address2 = `${str1()}`
  address3 = `${str1()}`
  
  it('Post Login, Company Creation', function(){		
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
            //Companies Landing Page
            cy.visit('/fund#!/crm-companies')
			//Adding Company
			cy.get('.btn').click()
            //Add Company and Contact Details with mandatory fields
            cy.get('.pr10 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-pristine').type(compn)
			cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-pristine').type(compalias)
			cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
            cy.get('.select2-container-active > .ui-select-dropdown').contains('Advisor').click()
            cy.get("[name='companySubType']").click()
            cy.get('.absolute').contains('Investment Bank').click()
            cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .ng-pristine').type(randtext)
            cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .ng-pristine').type(tarea)
            cy.get('.wid-40 > .wid-100 > .select2-choice > .select2-arrow > b').click()
            cy.get('.select2-container-active > .ui-select-dropdown').contains('EUR').click()
            cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .wid-100.fl > .pl5').type(tvalue)
			cy.get('.icon-calendar').click()
			//***This needs to be changed as it is a date function */
			cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click()
			//cy.get("[name='sourceOfFunds']").click()
			//cy.get('.absolute').contains('Endowment Funds').click()
			cy.get('[style="height: calc(100% - 20px);"] > .wid-100').type('A leading pan-european adviser, asset and investment manager, focused on real estate.')
			cy.get("[name='products']").click()
			cy.get('.absolute').contains('Debt Special Sits').click()
			cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('London - Greater London - UK')
			cy.get('.ui-select-highlight').click()
			cy.get('.mr10.border > :nth-child(5) > ul > :nth-child(2) > .ng-pristine').type(address1)
			cy.get(':nth-child(6) > ul > :nth-child(2) > .ng-pristine').type(address2)
			cy.get(':nth-child(7) > ul > :nth-child(2) > .ng-pristine').type(address3)
			cy.get(':nth-child(8) > ul > :nth-child(2) > .ng-pristine').type(mvalue)
			cy.get(':nth-child(9) > ul > :nth-child(2) > .ng-pristine').type(compph)
			cy.get("[name='otherLocationOffice']").click()
			cy.get('.absolute').contains('Aalbeek').click()
			cy.get('[style="flex-wrap: wrap;"] > :nth-child(2) > .mb5').click()
			cy.get(':nth-child(11) > ul > :nth-child(2) > .ng-pristine').type(compwebsite)
			cy.contains('.btn', 'Save').click()
			//cy.wait(2000)
			})
		})
	})
	it('Post Company, Contact Creation', function(){		
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
            //Companies Landing Page
            cy.visit('/fund#!/crm-companies')
			//Adding Contact
			cy.get('.flex > .flex-1').type(compn) 
			cy.get(':nth-child(3) > .ellipsis').click()
      cy.get("[ng-click='vm.showContactForm();']").click()
      cy.get(':nth-child(1) > .mr10 > .flex > :nth-child(1) > :nth-child(2) > .ng-pristine').type
      cy.get(':nth-child(1) > .mr10 > .flex > :nth-child(2) > :nth-child(2) > .ng-pristine')
		  })
		})
	})
})