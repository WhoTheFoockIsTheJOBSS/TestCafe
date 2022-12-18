import { ClientFunction, t } from "testcafe"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

const loginurl = 'http://the-internet.herokuapp.com/login'
const homeUrl = 'http://the-internet.herokuapp.com/secure'

const getUrl = ClientFunction(() => window.location)

fixture('Home Page').page(loginurl).beforeEach(async t => {

    LoginPage.setUserName('tomsmith');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();
});

test('Loading Home page', async t => {

    await t.expect(getUrl()).contains(homeUrl);
    await t.expect(HomePage.logoutBtn.exists).ok('validar que el boton existe en la pagina');
});

test('Succesfully LogOut', async t => {

    HomePage.clickOnLoginButton();
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();

    await t.expect(HomePage.responseCard.innerText).contains('You logged into a secure area!');
});