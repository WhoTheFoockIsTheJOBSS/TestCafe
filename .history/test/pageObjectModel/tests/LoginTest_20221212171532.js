import { ClientFunction, t } from "testcafe";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const url = 'http://the-internet.herokuapp.com/login';
const getUrl = ClientFunction(() => window.location.href);

fixture ('Login PAge').page(url)

test('Loading loging page', async t => {

    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginBtn.exists).ok('validar que el boton existe en la pagina');
});

test('FROM - Succesfully USer Login', async t => {

    LoginPage.setUserName('tomsmith');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();

    await t.expect(HomePage.responseCard.innerText).contains('You logged into a secure area!');
});

test('From - Invalid PAssword login', async t => {

    LoginPage.setUserName('tomsmith');
    LoginPage.setPassword('SuperSecretPass');
    LoginPage.clickOnLoginButton();

    await t.expect(LoginPage.responseCard.innerText).contains('Your password is invalid');
});

test('From - Invalid User Name login', async t => {

    LoginPage.setUserName('tom');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();

    await t.expect(LoginPage.responseCard.innerText).contains('Your user is invalid');
});