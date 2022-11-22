import MyAccount from '../../Pages/MyAccount'
import Login from '../../Pages/Login'

const login = new Login()
const myAccountPage = new MyAccount()

before(function () {
    cy.fixture('Data').then(function (data) {
        this.data = data
    })
})

describe("Verify that user is able to change firstName and lastname", function () {

    it('Changing firstname and lastname', function () {
        cy.login()
        myAccountPage.changingNameAndLastname(this.data.firstnameChange, this.data.lastnameChange)  
    })
})