import WhishList from '../../Pages/Whislist'

const whishList = new WhishList()

describe("Verify that user is able to add product in whislist", function () {

    it('Adding product in whislist', function () {
        cy.login()
        whishList.clickingOnComputerPageLink()
        whishList.clickingOnNoteBookLink()
        whishList.addingProductToWhislit()
    })
})