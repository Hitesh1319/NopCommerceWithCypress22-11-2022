// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'

const login = new Login()
const logout = new Logout()

Cypress.Commands.add("login", () => {

    const url = "https://demo.nopcommerce.com"
    const email = "Random@mail.com"
    const password ="HardPassword"
    login.navigate(url)
    login.clickingOnLoginLink()
    login.enteringEmail(email)
    login.enteringPassword(password)
    login.clickingOnLoginButton()
});

Cypress.Commands.add("logout", ()=>{
    logout.clickingOnLogout()
})