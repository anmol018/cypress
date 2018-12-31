/// <reference types="Cypress" />
import {  login } from "../support/utils";
describe('My Third Test', function () {
it('Displays Pipeline Report', () =>{
  cy.visit('/fund#!/pipeline/report')
  cy.get('.icon-interface').click()
  cy.get('.leftPage > .fr').click()
  //cy.get('.leftPage > .fr').should('be.disabled')
  cy.get(':nth-child(6) > .noStyle > :nth-child(2)').should('be.visible').check()
  cy.pause()
  })
})