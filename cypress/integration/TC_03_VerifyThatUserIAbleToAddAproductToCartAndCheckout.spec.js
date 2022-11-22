import Computers from '../../Pages/Computers'

const computers = new Computers()

before(function () {
    cy.fixture('Data').then(function (data) {
        this.data = data
    })
})

describe("Adding product into cart and checkout", function () {

    it('Verify user is able to add a product to cart and checkout', function () {
        cy.login()
        computers.clickingOnComputerPageLink()
        computers.clickingOnNoteBookLink()
        computers.clickingOnMacbookPro()
        computers.clickingOnAddToCartButton()
        computers.clickingOnShopingCart()
        computers.clickingOnTermAndConditonAndCheckout()
        computers.enteringBillDetail(this.data.country,this.data.city,this.data.address,this.data.postalcode,this.data.phoneNumber)
    })
})