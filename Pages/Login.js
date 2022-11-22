class Login {

    loginLink='//div[@class="header-links"]//a[contains(text(),"Log in")]'
    email='//input[@name="Email"]'
    password='//input[@name="Password"]'
    loginButton='//button[contains(text(),"Log in")]'

    navigate(url) {
        cy.visit(url)
        cy.url().should('include', url)
    }

    clickingOnLoginLink() {
        cy.xpath(this.loginLink).click()
    }

    enteringEmail(userEmail) {
        cy.xpath(this.email).type(userEmail)
    }

    enteringPassword(userPassword) {
        cy.xpath(this.password).type(userPassword)
    }

    clickingOnLoginButton() {
        cy.xpath(this.loginButton).click()
    }

}

export default Login