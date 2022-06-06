describe('Food and Enjoy App - login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('Test login app', () => {
        cy.get('[placeholder="Username"]').type('test')
        cy.get('[placeholder="Password"]').type('test')
        cy.contains('Login').click()
        cy.get('[data-cy="logged"]')
    })
})