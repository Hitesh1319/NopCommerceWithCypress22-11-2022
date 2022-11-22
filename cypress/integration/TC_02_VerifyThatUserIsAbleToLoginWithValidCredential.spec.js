import Login from '../../Pages/Login'
import RegisterUser from '../../Pages/RegisterUser'

const login = new Login()
const registerUser = new RegisterUser()

describe("Login Test", function () {

    it('Verify user is able to login with valid credentials', function () {
        cy.login()
        cy.logout()
    })
})