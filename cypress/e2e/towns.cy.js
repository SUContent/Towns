/// <reference types="cypress" />
const towns = ['Bourgas', 'Sofia', 'Plovdiv', 'Varna'];
describe('Town Project E2E', () => {
    beforeEach('Open page', () => {
        cy.visit('towns.html')
    })

    it('Verify url', () => {
        cy.url().should('include', 'towns')
    })

    it("Verify listed towns - ('Bourgas', 'Sofia', 'Plovdiv', 'Varna')", () => {
        for (const town of towns) {
            cy.get('#towns').should('be.visible').within(() => {
                cy.get('option').contains(town).should('be.visible');
            })
        }
    })

    it('Verify delete functionality', () => {
        cy.contains('button', 'Delete').should('be.visible').as('deleteBtn');
        for (const town of towns) {
            cy.get('#townName').should('be.visible').as('selectElement')
            .clear()
            .type(town)
            cy.get('@deleteBtn').click();
            
            cy.get('#towns').within(() => {
                cy.contains('option', town).should('not.exist');
            });
        }
    })
})