class Logout {
    logout = '//a[contains(text(),"Log out")]'

    clickingOnLogout() {
        cy.xpath(this.logout).click()
    }
}

export default Logout