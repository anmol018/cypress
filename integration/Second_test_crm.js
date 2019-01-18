/// <reference types="Cypress" />

const str1 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const randomnumbers = () => Math.floor(Math.random() * 10000000);
const lrandomnumbers = () => Math.floor(Math.random() * 10000);	
const mrandomnumbers = () => Math.floor(Math.random() * 1000);
const srandomnumbers = () => Math.floor(Math.random() * 100);
const yrandomnumbers = () => Math.floor(Math.random() * (2018-1900+1) + 1900);


let tvalue;
let lvalue;
let fyear
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
let complinkedin;
let contfname;
let contlname;
let controle;
let contdeptt;
let contmob;
let contphone;
let contemail;
let contlinkedin;
let commsubj;
	describe('CRM Test with Full Details', function () {	
	Cypress.Commands.add('loginByCSRF', (csrfToken) => {
	cy.request({
    method: 'POST',
    url: '/login', // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      emailid: 'mritunjay.sinha@oxanepartners.com',
      password: 'Oxane@1234',
	  _csrf: csrfToken // insert this as part of form body
    }
	})
  })
  beforeEach(function(){
	cy.viewport(1366, 768)
	cy.clearLocalStorage()
  })
  tvalue = `${randomnumbers()}`
  lvalue = `${randomnumbers()}`
  fyear = `${yrandomnumbers()}`
  tarea = `${lrandomnumbers()}`
  mvalue = `${randomnumbers()}`
  compn = `Management${randomnumbers()}`
  compalias = `MF${mrandomnumbers()}`
  compph = `${randomnumbers()}`
  compwebsite = `www.${str1()}.com`
  randtext = `${str1()}`
  address1 = `${str1()}`
  address2 = `${str1()}`
  address3 = `${str1()}`
  complinkedin = `www.${str1()}linkedin.com`
  contfname = `Eric${srandomnumbers()}`
  contlname = `Tart${srandomnumbers()}`
  controle = `${str1()}`
  contdeptt = `${str1()}`
  contmob = `+001${randomnumbers()}`
  contphone = `+91-${randomnumbers()}`
  contemail = `${str1()}@fin.com`
  contlinkedin = `www.${str1()}linkedin.com`
  commsubj = `Meeting Regarding ${randomnumbers()}`
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
      //Add Company Details with All fields
      //Adding Company Name
      cy.get('.pr10 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-pristine').type(compn)
      //Adding Company Alias
			cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-pristine').type(compalias)
      //Adding Company Type
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Advisor').click()
      //Adding Company Sub Type
      cy.get("[name='companySubType']").click()
      cy.get('.absolute').contains('Investment Bank').click()
      //Adding #Employees
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .ng-pristine').type(lvalue)
      //Adding Year Founded
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .ng-pristine').type(fyear)
      //Adding AUM - From
      cy.get('.wid-40 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('EUR').click()
      cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .wid-100.fl > .pl5').type(tvalue)
      //Adding As of Date
      cy.get('.icon-calendar').click()
			//***This needs to be changed as it is a date function */
      cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click()
      //Adding Source of Fund
			cy.get("[name='sourceOfFunds']").click()
      cy.get('.absolute').contains('Endowment Funds').click()
      //Adding Account Type
      //Adding Description
			cy.get('[style="height: calc(100% - 20px);"] > .wid-100').type('A leading pan-european adviser, asset and investment manager, focused on real estate.')
      //Adding Products
      cy.get("[name='products']").click()
      cy.get('.absolute').contains('Debt Special Sits').click()
      //Adding Headquarters
			cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
			cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('London - Greater London - UK')
      cy.get('.ui-select-highlight').click()
      //Adding Address Line 1
      cy.get('.mr10.border > :nth-child(5) > ul > :nth-child(2) > .ng-pristine').type(address1)
      //Adding Address Line 2
      cy.get(':nth-child(6) > ul > :nth-child(2) > .ng-pristine').type(address2)
      //Adding Address Line 3
      cy.get(':nth-child(7) > ul > :nth-child(2) > .ng-pristine').type(address3)
      //Adding Post Code
      cy.get(':nth-child(8) > ul > :nth-child(2) > .ng-pristine').type(mvalue)
      //Adding Company Phone
      cy.get(':nth-child(9) > ul > :nth-child(2) > .ng-pristine').type(compph)
      //Adding Other Locations (Offices)
      cy.get("[name='otherLocationOffice']").click()
      cy.get('.absolute').contains('Aalbeek').click()
      cy.get('[style="flex-wrap: wrap;"] > :nth-child(2) > .mb5').click()
      //Adding Website
      cy.get(':nth-child(11) > ul > :nth-child(2) > .ng-pristine').type(compwebsite)
      //Adding LinkedIn
      cy.get(':nth-child(12) > ul > :nth-child(2) > .ng-pristine').type(complinkedin)
			cy.contains('.btn', 'Save').click()
      cy.wait(2000)
      cy.log(compn)
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
			//Searching Newly Created Company
			cy.get('.flex > .flex-1').type(compn) 
      cy.get(':nth-child(3) > .ellipsis').click()
      //Adding Contact in New Company
      cy.get("[ng-click='vm.showContactForm();']").click()
      //Adding First Name
      cy.get(':nth-child(1) > .mr10 > .flex > :nth-child(1) > :nth-child(2) > .ng-pristine').type(contfname)
      //Adding Last Name
      cy.get(':nth-child(1) > .mr10 > .flex > :nth-child(2) > :nth-child(2) > .ng-pristine').type(contlname)
      //Adding Designation
      cy.get('.fr.wid-100 > :nth-child(2) > :nth-child(1) > :nth-child(1) > ul.flex-1 > :nth-child(2) > .ng-pristine').type(controle)
      //Adding Department
      cy.get('.fr.wid-100 > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > .wid-100').type(contdeptt)
      //Adding Joining Date
      cy.get(':nth-child(1) > li.flex > .flex > .vCenter > .icon-calendar').click()
      cy.get('.ui-datepicker-prev > .ui-icon').click()
      cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click()
      //Adding Reporting To
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > select-box.ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown')
      .should('be.not.have.value')
      //Adding Products
      cy.get("[name='products']").click()
      cy.get('.absolute').contains('Debt Special Sits').click()
      //Adding Role Description
      cy.get('.fr.wid-100 > :nth-child(2) > .flex-1.ml10 > .input-form-column > ul > :nth-child(2) > .wid-100').type('Eric has over 27 years of experience within the investment arena, 25 of which have been as a principal and director. Fifteen of those years have been focused on commercial property in the UK and across Europe. Eric was the founding Director of Avignon Capital and has been operating in the role of CEO since inception. Eric was also a co-founding Director of Appleton Asset Management in 1992, which was successfully listed in March 1999. He has been involved in the Cubic Property Fund since its inception and is on the Board of Directors. Eric’s strong interests are in finance, property investments and asset management. Eric is also Founder of Montreux Advisers, the appointed investment advisor to the Cubic Property Fund. Eric graduated from the University of Neuchatel, Switzerland in 1987 with a Masters in Science and a diploma in Business Entrepreneurship.')
      //Adding Primary Owner
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown')
      .should('be.visible').contains('Tanmaya Sanghvi').click()
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Manish Maheshwari')
      cy.get('.ui-select-highlight').click()
      //Adding Source
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown')
      .should('be.visible').contains('Advertisement').click()
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Trade Show')
      cy.get('.ui-select-highlight').click()
      //Adding Referral
      cy.get('.wid-100.mt20 > .border > .ml10 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-pristine').type('Internal Lead generated by marketing team')
      //Adding Events
      cy.get('.ml10 > :nth-child(1) > :nth-child(2) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container')
      .should('be.not.have.value')
      //Adding Secondary Owner
      cy.get('.mr10 > :nth-child(2) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown')
      .should('be.visible').contains('Mohit Solanki').click()
      cy.get('.wid-100.mt20 > .border > .mr10 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Siddharth Verulkar')
      cy.get('.ui-select-highlight').click()
      //Adding Activity Status
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices')
      .should('be.visible').contains('Contacted').click()
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Copied')
      cy.get('.ui-select-highlight').click()
      //Adding Rating
      cy.get('.ml10 > :nth-child(2) > :nth-child(1) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices')
      .should('be.visible').contains('Dead').click()
      cy.get('.ml10 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Warm')
      cy.get('.ui-select-highlight').click()
      //Adding Last Contacted
      cy.get(':nth-child(2) > li.flex > .flex > .vCenter > .icon-calendar').click()
      cy.get('.ui-datepicker-prev').click()
      cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
      //Adding Weekly Commentary
      cy.get('.mr10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5').click()
      cy.get('.mr10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5').click()
      cy.get('.mr10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5').click()
      //Adding Newsletter
      cy.get('.mr10 > :nth-child(3) > :nth-child(2) > .vCenter > .mr5').click()
      cy.get('.mr10 > :nth-child(3) > :nth-child(2) > .vCenter > .mr5').click()
      //Adding Key Person
      cy.get('.ml10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5').click()
      cy.get('.ml10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5').click()
      cy.get('.ml10 > :nth-child(3) > :nth-child(1) > .vCenter > .mr5')
      .should('not.be.checked').click()
      //Adding Opt out
      cy.get('.ml10 > :nth-child(3) > :nth-child(2) > .vCenter > .mr5').click()
      cy.get('.ml10 > :nth-child(3) > :nth-child(2) > .vCenter > .mr5').click()
      //Adding Office Locations
      cy.get("[name='officeLocations']").click()
      cy.get('.absolute').contains('Aalbeek').click()
      cy.get('.pl5 > .wid-100').type('Basalghelle')
      cy.get('.absolute').contains('Basalghelle').click()
      cy.get(':nth-child(2) > span.wid-100').click()
      //Adding Mobile
      cy.get(':nth-child(4) > .border').type(contmob)
      //Adding Phone
      cy.get(':nth-child(5) > .border').type(contphone)
      //Adding Email
      cy.get(':nth-child(6) > .border').type(contemail)
      //Adding Linkedin
      cy.get(':nth-child(7) > .border').type(contlinkedin)
      cy.contains('.btn', 'Save').click()
			cy.wait(2000)
    })
		})
  })
  it('Post Contact Creation, Relationship Creation', function(){		
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
			//Searching Newly Created Company
			cy.get('.flex > .flex-1').type(compn) 
      cy.get(':nth-child(3) > .ellipsis').click()
      //Adding Relationship to newly created company
      cy.get('[ng-click="vm.showRelationshipPopUp(\'add\')"]').click()
      //Verifying Same Added Company Name
      cy.get(':nth-child(1) > ul > :nth-child(2) > .ng-pristine')
      .should('be.have.value', compn)
      //Adding Relationship Type
      cy.get('b').click()
      cy.get('.ui-select-choices').contains('Joint Venture').click()
      cy.get('b').click()
      cy.get('.ui-select-search').type('Equity Stake')
      cy.get('.ui-select-highlight').click()
      //Adding Related Company
      cy.get('[ng-click="vm.searchData = undefined; vm.clicked = !vm.clicked;vm.setOptionsDivWith();"]').click()
      cy.get('.bg-color-white > .plr10').contains('Accrue Capital').click()
      cy.get('.pl5 > .wid-100').type('Zain Group')
      cy.get('.bg-color-white > .plr10').contains('Zain Group').click()
      cy.get('.ng-valid-maxlength.ng-dirty > :nth-child(3) > ul > :nth-child(2) > .fl').type('the rise in biopharma sales for a broad range of clinical treatments, in combination with tightening regulatory requirements for transporting these products is driving strong growth in Envirotainer’s markets; ')
      //Saving Relationship
      cy.contains('.btn', 'Save').click()
			cy.wait(2000)
		  })
		})
  })
  it('Post Contact Creation, Communication Creation', function(){		
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
			//Searching Newly Created Company
			cy.get('.flex > .flex-1').type(compn) 
      cy.get(':nth-child(3) > .ellipsis').click()
      //Adding Communication to newly created company
      cy.get('[ng-click="vm.showCommunicationForm();"]').click()
      //Adding Subject
      cy.get(':nth-child(1) > .mr10 > :nth-child(1) > ul > :nth-child(2) > .wid-100').type(commsubj)
      //Adding Date
      cy.get('.icon-calendar').click()
      cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default').click()
      //Adding Office
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('Lisbon').click()
      cy.get('.ml10 > :nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('London')
      cy.get('.ui-select-highlight').click()
      //Adding Meeting Type
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Call').click()
      cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Group Meeting')
      cy.get('.ui-select-highlight').click()
      //Adding Meeting Purpose
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Mandate').click()
      cy.get('.mr10 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('General Catch-up')
      cy.get('.ui-select-highlight').click()
      //Adding Meeting Identity
      cy.get('.ml10 > :nth-child(2) > :nth-child(1) > :nth-child(2) > .wid-100').select('Internal')
      //Adding Deal Name
      cy.get('.ml10 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('Project West').click()
      cy.get('.ml10 > :nth-child(2) > :nth-child(2) > :nth-child(2) > .ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Saturn')
      cy.get('.ui-select-highlight').click()
      //Adding Product
      cy.get('.mr10 > :nth-child(3) > :nth-child(1) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('CRCA').click()
      cy.get('.mr10 > :nth-child(3) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('ECO Tranche')
      cy.get('.ui-select-highlight').click()
      //Adding Product (optional)
      cy.get('.mr10 > :nth-child(3) > :nth-child(2) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('ECR Fund').click()
      cy.get('.mr10 > :nth-child(3) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('CRCA')
      cy.get('.ui-select-highlight').click()
      //Adding Jurisdiction
      cy.get(':nth-child(1) > :nth-child(2) > .ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('Belgium').click()
      cy.get('.ml10 > :nth-child(3) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Austria')
      cy.get('.ui-select-highlight').click()
      //Adding Jurisdiction(optional)
      cy.get('.ml10 > :nth-child(3) > :nth-child(2) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Australia').click()
      cy.get('.ml10 > :nth-child(3) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Belgium')
      cy.get('.ui-select-highlight').click()
      //Adding Internal Participants
      cy.get('#addInternalParticipant > .flex-1').type('Manish Maheshwari')
      cy.get('.mt5 > .icon-uncheck').click()
      //Adding Meeting Outcome
      cy.get('.ng-invalid > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Negative').click()
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .ng-pristine > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('neutral')
      cy.get('.ui-select-highlight').click()
      //Adding Purpose
      cy.get('.border > .wid-100 > :nth-child(1) > :nth-child(2) > .ng-pristine').type('Envirotainer is a very attractive investment opportunity for Novo Holdings. The company is a leading player and is in an excellent position to further benefit from the increasingly important demand for temperature controlled biopharma logistics. We are excited about this investment and look forward to, together with the management team and Cinven, be part of further developing Envirotainer.')
      //Adding Key Takeaways
      cy.get('.border > .wid-100 > :nth-child(2) > :nth-child(2) > .ng-pristine').type('We are pleased to welcome Novo Holdings as a partner alongside Cinven in Envirotainer, where we see great value from Novo Holdings healthcare expertise and pharmaceutical market knowledge to further develop the customer service offering of Envirotainer.')
      //Adding External Participants
      //Adding Participants from same company
      cy.get(':nth-child(3) > .btn-small').click()
      cy.get('.wid-60 > .flex-1').type(compn)
      cy.get('.wid-60 > .btn').click()
      cy.get('.scroll > .flex').click()
      cy.get(':nth-child(1) > .icon-uncheck').click()
      cy.get('.popup-foot > .btn').click()
      //Adding Participants from different Companies
      cy.get(':nth-child(3) > .btn-small').click()
      cy.get('.wid-60 > .flex-1').type('Avignon')
      cy.get('.wid-60 > .btn').click()
      cy.get('.scroll > .flex').click()
      cy.get(':nth-child(1) > .icon-uncheck').click({multiple:true})
      cy.get('.wid-60 > .flex-1').type('Finance4840336')
      cy.get('.wid-60 > .btn').click()
      cy.get('.scroll > .flex').click()
      cy.get('.ui-dialog-buttonset > :nth-child(1)').click()
      cy.get(':nth-child(1) > .icon-uncheck').click({multiple:true})
      cy.get('.popup-foot > .btn').click()
      //Adding Action
      //Adding Participant 1
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-valid-required > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown').contains('Mohit Solanki').click()
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Tanmaya Sanghvi')
      cy.get('.ui-select-highlight').click()
      //Adding Participant 2
      cy.get('.mr10 > :nth-child(1) > :nth-child(2) > :nth-child(2) > select-box.wid-100 > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .ui-select-choices').contains('Adhiraj').click()
      cy.get('.mr10 > :nth-child(1) > :nth-child(2) > :nth-child(2) > .ng-untouched > .wid-100 > .select2-choice > .select2-arrow > b').click()
      cy.get('.select2-container-active > .ui-select-dropdown > .search-container > .ui-select-search').type('Manish Maheshwari')
      cy.get('.ui-select-highlight').click()
      //Adding Commentary
      cy.get('[style="height: calc(100% - 20px);"] > .wid-100').type('To sign NDA and receive project information')
      //Creating Task
      cy.get('[ng-init="item.createTaskAction=false;"] > .mr5').click()
      cy.get('[ng-if="item.createTaskAction"] > .flex > .vCenter > .icon-calendar').click()
      cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click()
      cy.contains('.btn', 'Save').click()
			cy.wait(2000)
		  })
		})
	})
})