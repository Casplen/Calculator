// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total when number buttons are clicked', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('should update the running total when arithmetical operations are performed', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should be able to chain operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '24')
  })

  it('should display appropriately for extremely large numbers ', () => {
    cy.get('#number1').click();
    for(let n = 0; n < 21; n ++){
      cy.get('#number0').click()
    }
    cy.get('.display').should('contain', '1e+21')
  })

  it('should display appropriately for decimals', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should display appropriately for negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should display an error when dividing by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })
})
