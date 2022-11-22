import Login from '../../Pages/Login'
import RegisterUser from '../../Pages/RegisterUser'

const login = new Login()
const registerUser = new RegisterUser()

before(function () {
    cy.fixture('Data').then(function (data) {
        this.data = data
    })
})

describe("Register Test", function () {

    it('Verify user is able to register with valid credentials', function () {
        login.navigate(this.data.url)
        registerUser.clickingOnRegisterLink()
        registerUser.clickingOnMale()
        registerUser.enteringFirstname(this.data.firstName)
        registerUser.entringLastName(this.data.lastName)
        registerUser.selectingDate(this.data.day,this.data.month,this.data.year)
        registerUser.enteringEmail(this.data.email)
        registerUser.enteringCompanyName(this.data.companyName)
        registerUser.enteringPassword(this.data.password)
        registerUser.enteringConfirmPassword(this.data.password)
        registerUser.clickingOnRegisterButton()
    })
})