class RegisterUser {

    RegisterLink = '//div[@class="header-links"]//a[contains(text(),"Register")]'
    maleGender = '//span[@class="male"]//input[@name="Gender"]'
    firstName = '//input[@name="FirstName"]'
    lastName = '//input[@name="LastName"]'
    email = '//input[@name="Email"]'
    companyName = '//input[@name="Company"]'
    password = '//input[@name="Password"]'
    confirm = '//input[@name="ConfirmPassword"]'
    register ='//button[@name="register-button"]'

    clickingOnRegisterLink() {
        cy.xpath(this.RegisterLink).click()
    }

    clickingOnMale() {
        cy.xpath(this.maleGender).click()
    }

    enteringFirstname(userFirstName) {
        cy.xpath(this.firstName).type(userFirstName)
    }

    entringLastName(userLastName) {
        cy.xpath(this.lastName).type(userLastName);
    }

    selectingDate(day, month, year) {
        cy.get('[name="DateOfBirthDay"]').select(day)
        cy.get('[name="DateOfBirthMonth"]').select(month)
        cy.get('[name="DateOfBirthYear"]').select(year)
    }

    enteringEmail(userEmail) {
        cy.xpath(this.email).type(userEmail)
    }

    enteringCompanyName(userCompanyName) {
        cy.xpath(this.companyName).type(userCompanyName)
    }

    enteringPassword(userPassword) {
        cy.xpath(this.password).type(userPassword)
    }

    enteringConfirmPassword(userConfirmPassword) { 
        cy.xpath(this.confirm).type(userConfirmPassword)
    }

    clickingOnRegisterButton(){
        cy.xpath(this.register).click()
    }

}

export default RegisterUser