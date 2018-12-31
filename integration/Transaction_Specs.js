/// <reference types="Cypress" />
const str1 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomnumbers = () => Math.floor(Math.random() * 10000000);
const lrandomnumbers = () => Math.floor(Math.random() * 10000);	
const mrandomnumbers = () => Math.floor(Math.random() * 1000);
const srandomnumbers = () => Math.floor(Math.random() * 100);
let tname;
let tvalue;
let tltv;
let tproperties;
let tarea;
let mvalue;
let toccupancy;
let tgri;
let tyield;
let tconnections;
let tcestrev;
let ttestrev;
let compn;
let compalias;
let compph;
let compwebsite;
let contfname;
let contlname;
let contemail;
let contph;
	describe('My First Test', function () {
		
		
						
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
	//cy.clear('caches')
  })
    it('Post Login, Transaction Creation: Create New Transaction', function(){		
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
		cy.visit('/fund#!/homescreen')
			
			//Xenon Landing Page
			cy.get('.pr5')
			.should('be.visible').contains('Mritunjay Sinha')
			cy.get('[ui-sref="blotter"] > :nth-child(1) > .circle')
			.should('be.visible').click()
			//Add Transaction Page
			tname = `demo${randomnumbers()}`
			tvalue = `${randomnumbers()}`
			tltv = `${srandomnumbers()}`
			tproperties = `${srandomnumbers()}`
			tarea = `${lrandomnumbers()}`
			mvalue = `${randomnumbers()}`
			toccupancy = `${srandomnumbers()}`
			tgri = `${srandomnumbers()}`
			tyield = `${srandomnumbers()}/1000000`
			tconnections = `${srandomnumbers()}`
			tcestrev = `${lrandomnumbers()}`
			ttestrev = `${lrandomnumbers()}`
			compn = `Finance${randomnumbers()}`
			compalias = `FF${srandomnumbers()}`
			compph = `${randomnumbers()}`
			compwebsite = `www.${str1()}.com`
			contfname = `Eddie${srandomnumbers()}`
			contlname = `Brown${srandomnumbers()}`
			contemail = `${str1()}@testmail.com`
			contph = `${randomnumbers()}`
			cy.get('#addTransactionListDiv > div').click({ force: true })
			//cy.get('#addTransactionListDiv > .border').click()
			//cy.get('.ptb5').click()
			//cy.get('.border > .noStyle > :nth-child(1)').click()
			//Add Deal Name
			cy.get('.shadow > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-pristine')
			.should('be.visible').type(tname)
			//Add Internal Strategy
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-pristine > .wid-100 > .ui-select-dropdown').contains('Debt Investment Management').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Debt Investment Management')
			cy.get('.ui-select-highlight').click()
			//Adding Fund
			cy.get(':nth-child(4) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(4) > :nth-child(2) > .ng-invalid > .wid-100 > .ui-select-dropdown').contains('ECO Tranche').click()
			cy.get(':nth-child(1) > :nth-child(4) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(4) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('ECO Tranche')
			cy.get('.select2-result-label > div').click()
			//Add Clients, here we are adding two different clients
			//Adding First Client Name
			cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('ABN Amro Group NV').click()
			cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			//cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			//cy.get('.absolute > :nth-child(1) > .wid-100').type('GIC Private Limited')
			//cy.get('.scroll-y > :nth-child(1) > .mr10').click()
			//cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			//Adding Second Client Name
			//cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			//cy.get('.absolute').contains('GIC Private Limited').click()
			//cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			//cy.get(':nth-child(5) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			//cy.get('.absolute > :nth-child(1) > .wid-100').type('Pluto finace')
			//cy.get('.scroll-y > :nth-child(1) > .mr10').click()
			//cy.get('[ng-if="vm.showInfo"]').click()
			//Add Mandates, here we are adding two Different Mandates
			//Adding First Mandate
			cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click(3)
			cy.get('.absolute').contains('Transaction Management').click()
			cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Asset Management')
			//cy.get('.absolute').contains('Asset Management').click()
			cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			//Adding Second Mandate
			cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute').contains('Acquisition Management').click()
			cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine > .relative > .wid-100 > .ml-auto').click()
			cy.get('.absolute > :nth-child(1) > .wid-100').type('Financial Management')
			cy.get('.absolute').contains('Financial Management').click()
			cy.get('#transactionForm > .shadow > :nth-child(1)').click()
			//Adding Entity
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .ui-select-dropdown').contains('CCL').click()
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('CCL')
			cy.get('.select2-result-label > div').click()
			//Adding Deal Status
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Sold').click()
			cy.get(':nth-child(8) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(8) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Active')
			cy.get('.select2-result-label > div').click()
			//Adding Reason for Status
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .ui-select-choices').contains('Special Servicing').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Management')
			cy.get('#ui-select-choices-row-4-0 > .select2-result-label > div').click()
			//Adding Deal Owner
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Manish Maheshwari').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(10) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Manish Maheshwari')
			cy.get('.select2-result-label > div').click()
			//Adding Seller from the Dropdown
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('ABC International Bank').click()
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type('Starz Real Estate')
			cy.get('.select2-result-label > div').click()
			cy.get(':nth-child(11) > .input-group > .vCenter').click()
			cy.get('.input-form > :nth-child(1) > :nth-child(2) > .ng-pristine').type(compn)
			cy.get('.ng-invalid.ng-dirty > .input-form > :nth-child(2) > :nth-child(2) > .ng-pristine').type(compalias)
			cy.get(':nth-child(3) > :nth-child(2) > .fr > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown').contains('Advisor').click()
			cy.get('.fr > .relative > .wid-100 > .ellipsis').click()
			cy.get('.absolute').contains('Investment Bank').click()
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(5) > :nth-child(1)').click()
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(5) > :nth-child(2) > .ng-pristine').type(compph)
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(6) > :nth-child(2) > .ng-pristine').type(compwebsite)
			cy.get('.ng-invalid.ng-valid-maxlength > .input-form > :nth-child(7) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown').contains('Tanmaya Sanghvi').click()
			cy.contains('.btn', 'Save').click()
			cy.get(':nth-child(11) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > .input-group > .ng-pristine > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type(compn)
			cy.get('#ui-select-choices-row-6-0 > .select2-result-label').click()
			//Adding Sponsor
			cy.get(':nth-child(12) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(12) > .input-group > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Accrue').click()
			//Adding Borrower
			cy.get(':nth-child(1) > :nth-child(13) > :nth-child(2) > .ng-pristine').type('Augusta Ventures')
			//Adding Borrower Contact
			cy.get(':nth-child(1) > :nth-child(14) > :nth-child(2) > .ng-pristine').type('Kajal Kumari')
			//Adding Exclusivity
			cy.get(':nth-child(15) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice').contains('No')
			cy.get(':nth-child(15) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(15) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Transaction Size
			cy.get('.fl > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.fl > .wid-100 > .ui-select-dropdown').contains('EUR').click()
			cy.get('[style="margin: 0 5%;"] > :nth-child(2) > :nth-child(2) > .fr').type(tvalue)
			//Adding Loan Type
			cy.get('[style="margin: 0 5%;"] > :nth-child(3) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('[style="margin: 0 5%;"] > :nth-child(3) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Senior').click()
			//Adding LTV
			cy.get('[style="margin: 0 5%;"] > :nth-child(4) > :nth-child(2) > .ng-pristine').type(tltv)
			//Adding Country
			cy.get(':nth-child(5) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(5) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Belgium').click()
			//Adding #Properties
			cy.get('[style="margin: 0 5%;"] > :nth-child(6) > :nth-child(2) > .ng-pristine').type(tproperties)
			//Adding Property Type
			cy.get('.ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.ng-invalid > .wid-100 > .ui-select-dropdown').contains('Residential').click()
			//Adding Total Area
			cy.get(':nth-child(8) > :nth-child(2) > .fl').type(tarea)
			cy.get('.fr > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.fr > .wid-100 > .ui-select-dropdown > .ui-select-choices').contains('sqft').click()
			//Adding Market Value
			cy.get('[style="margin: 0 5%;"] > :nth-child(9) > :nth-child(2) > .ng-pristine').type(mvalue)
			//Adding Occupancy
			cy.get('[style="margin: 0 5%;"] > :nth-child(10) > :nth-child(2) > .ng-pristine').type(toccupancy)
			//Adding GRI
			cy.get('[style="margin: 0 5%;"] > :nth-child(11) > :nth-child(2) > .ng-pristine').type(tgri)
			//Adding Net Yield
			cy.get('[style="margin: 0 5%;"] > :nth-child(12) > :nth-child(2) > .ng-pristine').type(tyield)
			//Adding # Connections
			cy.get('[style="margin: 0 5%;"] > :nth-child(13) > :nth-child(2) > .ng-pristine').type(tconnections)
			//Adding Closing Date
			cy.get('.vCenter.flex > .flex > .vCenter > .icon-calendar').click()
			cy.get('.ui-datepicker-next > .ui-icon').click()
			cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').click()
			//Adding Date Listed
			cy.get(':nth-child(15) > li.vCenter > .flex > .vCenter > .icon-calendar').click()
			cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').click()
			//Adding Next Phase Target Date
			cy.get('[ng-if="!vm.transactionInformation.transactionId"] > li.vCenter > .flex > .vCenter > .icon-calendar').click()
			cy.get('.ui-datepicker-next > .ui-icon').click()
			cy.get('.ui-datepicker-next > .ui-icon').click()
			cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').click()
			//Adding Origination Source
			cy.get('.input-form.fr > :nth-child(2) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(2) > :nth-child(2) > .ng-valid-required > .wid-100 > .ui-select-dropdown').contains('Broker').click()
			//Adding Source Name
			cy.get(':nth-child(3) > .input-group > .ng-untouched > .wid-100 > .select2-choice > [ng-hide="$select.isEmpty()"]')
			.should('have.text', 'Oxane Partners')
			cy.get(':nth-child(3) > .input-group > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(3) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type(compn)
			cy.get(':nth-child(3) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown').click()
			//Adding Primary Contact
			cy.get(':nth-child(4) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(4) > .input-group > .vCenter').click()
			cy.get('.popup-foot > .btn').click()
			cy.get(':nth-child(4) > .input-group > .vCenter').click()
			cy.get('.input-form > :nth-child(1) > :nth-child(2) > .ng-pristine').type(contfname)
			cy.get('.fr > :nth-child(2) > .ng-pristine').type(contlname)
			//cy.get('form.ng-pristine > .input-form > :nth-child(3) > :nth-child(2) > .wid-100')
			//.should('have.text' , compn)
			cy.get('.ng-invalid.ng-dirty > .input-form > :nth-child(4) > :nth-child(2) > .ng-pristine').type(contemail)
			cy.get('form.ng-valid-maxlength > .input-form > :nth-child(5) > :nth-child(2) > .ng-pristine').type(contph)
			cy.contains('.btn', 'Save').click()
			cy.get(':nth-child(4) > .input-group > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(4) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown > .search-container > .ui-select-search').type(contfname)
			cy.get(':nth-child(4) > .input-group > select-box.ng-pristine > .wid-100 > .ui-select-dropdown > .ui-select-choices').click()
			//Adding Strategy Head
			cy.get('.input-form.fr > :nth-child(5) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(5) > :nth-child(2) > .ng-untouched > .wid-100 > .ui-select-dropdown').contains('Manish Maheshwari').click()
			//Adding Office
			cy.get('.input-form.fr > :nth-child(6) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(6) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Lisbon').click()
			//Adding NDA signed information
			cy.get('.input-form.fr > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.input-form.fr > :nth-child(9) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Origination Fees
			cy.get(':nth-child(11) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(11) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('TBD').click()
			//Adding Advisory Fee
			cy.get(':nth-child(12) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(12) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('No').click()
			//Adding Management Fee
			cy.get(':nth-child(13) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(13) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('TBD').click()
			//Adding Success Fee
			cy.get(':nth-child(14) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get(':nth-child(14) > :nth-child(2) > select-box.wid-100 > .wid-100 > .ui-select-dropdown').contains('Yes').click()
			//Adding Current EST. Revenue
			cy.get('.input-form.fr > :nth-child(15) > :nth-child(2) > .ng-pristine').type(tcestrev)
			//Adding Total Est. Revenue
			cy.get(':nth-child(16) > :nth-child(2) > .ng-pristine').type(ttestrev)
			//Adding Deal Description
			cy.get('.mb10 > .ng-pristine').type('Portoflio of residential properties originally developed as social housing and acquired by Apollo Leases are now close to their end and the properties cna be sold or let at market levels Apollo interested in disposing this portoflio the strategy would be either letting to sell or selling individual units Pending reception of detailed information')
			//Saving the Transaction
			cy.contains('.btn', 'Save').click()
			cy.wait(10000)
			//Searching the Saved Transaction on the Blotter Screen
			cy.get('.fr.mr10 > .flex > .flex-1')
				  .should('be.visible').type(tname)
			  cy.get('.clickable').click()
			  cy.wait(2000)
			  //Setting up Transaction 
			  cy.get(':nth-child(3) > .wid-100 > .icon-downArrow').click()
			  cy.get(':nth-child(3) > .noStyle > .m0 > .wid-100').click() 
			  cy.get('.left > .noStyle > :nth-child(3)').click()
			  cy.contains('.nav_three_link', 'Manage Permissions').click()
			  cy.get('.mt5').click()
			  cy.get('.right > .btn').click()
			  cy.wait(5000)
			  cy.get('.icon-home').click()
			  //Navigation to Pipeline Module
			  cy.visit('fund#!/pipeline/report')
			  cy.wait(5000)
			  cy.get('.mr10 > .flex > .flex-1')
				  .should('be.visible').type(tname)
			  cy.wait(2000)
			  cy.get('.clickable').click()
			  cy.get('.btn').click()
			  cy.get('.flex > .icon-menu').click()
			 //Saving Transaction Again 
			  cy.contains('.btn', 'Save').click()
			  cy.wait(2000)
			})
		})
	})
})