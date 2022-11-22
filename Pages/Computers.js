class Computers {

    computersPageLink = '//ul[@class="top-menu notmobile"]//a[contains(text(),"Computers")]'
    notebooksPageLink = '//div[@class="sub-category-item"]//a[contains(text(),"Notebooks")]'
    appleMacbookProLink = '//div[@class="details"]//a[contains(text(),"Apple MacBook Pro 13-inch")]'
    addToCartButton = '//button[@class="button-1 add-to-cart-button"]'
    shoopingCart = '//div[@class="header-links"]//a[@class="ico-cart"]'
    inputClick = '//input[@name="termsofservice"]'
    checkoutButton = '//button[@name="checkout"]'
    billingCity = '//input[@name="BillingNewAddress.City"]'
    billingAddress = '//input[@name="BillingNewAddress.Address1"]'
    billingPostalCode = '//input[@name="BillingNewAddress.ZipPostalCode"]'
    billingPhoneNumber = '//input[@name="BillingNewAddress.PhoneNumber"]'
    checkoutContinueButton = '//button[@onclick="Billing.save()"]'
    shippingMethodContinueButton = 'onclick="ShippingMethod.save()"'
    paymentMethodContinueButton= '//button[@onclick="PaymentMethod.save()"]'
    paymentInfoContinueButton='//button[@onclick="PaymentInfo.save()"]'
    confirmOrderContinueButton='//button[@onclick="ConfirmOrder.save()"]'

    clickingOnComputerPageLink() {
        cy.xpath(this.computersPageLink).click()
    }

    clickingOnNoteBookLink() {
        cy.xpath(this.notebooksPageLink).click()
    }

    clickingOnMacbookPro() {
        cy.xpath(this.appleMacbookProLink).click()
    }

    clickingOnAddToCartButton() {
        cy.xpath(this.addToCartButton).click()
    }

    clickingOnShopingCart() {
        cy.xpath(this.shoopingCart).click()
    }

    clickingOnTermAndConditonAndCheckout() {
        cy.xpath(this.inputClick).click()
        cy.xpath(this.checkoutButton).click()
    }

    enteringBillDetail(country, city, address, postalCode, phoneNumber) {
        cy.get('#BillingNewAddress_CountryId').select(country)
        cy.xpath(this.billingCity).type(city)
        cy.xpath(this.billingAddress).type(address)
        cy.xpath(this.billingPostalCode).type(postalCode)
        cy.xpath(this.billingPhoneNumber).type(phoneNumber)
        cy.xpath(this.checkoutContinueButton).click()
        cy.xpath(this.shippingMethodContinueButton).click()
        cy.xpath(this.paymentMethodContinueButton).click()
        cy.xpath(this.paymentInfoContinueButton).click()
        cy.xpath(this.confirmOrderContinueButton).click()
    }

}

export default Computers