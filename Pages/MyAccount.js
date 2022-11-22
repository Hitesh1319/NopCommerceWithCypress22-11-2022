class MyAccount {

    myAccountLink = '//div[@class="header-links"]//a[contains(text(),"My account")]'
    firstName = '//input[@name="FirstName"]'
    lastName = '//input[@name="LastName"]'
    saveButton = '//button[@class="button-1 save-customer-info-button"]'

    changingNameAndLastname(firstname, lastname) {
        cy.xpath(this.myAccountLink).click();
        cy.xpath(this.firstName).type(firstname)
        cy.xpath(this.lastName).type(lastname)
        cy.xpath(this.saveButton).click()
    }
}

export default MyAccount