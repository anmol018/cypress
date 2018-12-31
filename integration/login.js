/// <reference types="Cypress" />
import {  login } from '../support/utils'
describe('My First Test', function () {	
    
it('Post Login, Transaction Creation: Create New Transaction', function(){		
    cy.loginByCSRF() 
    .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.include("Dashboard")   
    cy.visit('/fund#!/homescreen')
          })
        })  
})