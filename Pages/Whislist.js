class WhishList {

    computersPageLink = '//ul[@class="top-menu notmobile"]//a[contains(text(),"Computers")]'
    notebooksPageLink = '//div[@class="sub-category-item"]//a[contains(text(),"Notebooks")]'
    whislist = '//a[contains(text(),"Wishlist")]'

    clickingOnComputerPageLink() {
        cy.xpath(this.computersPageLink).click()
    }

    clickingOnNoteBookLink() {
        cy.xpath(this.notebooksPageLink).click()
    }

    addingProductToWhislit() {
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
        cy.get('#add-to-wishlist-button-4').click()
        cy.get('.my-account > .list > :nth-child(5)').click()
        cy.get('.my-account > .list > :nth-child(5) > a').click()
    }
}

export default WhishList