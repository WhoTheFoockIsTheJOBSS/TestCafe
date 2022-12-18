import { ClientFunction, t } from "testcafe"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

const loginurl = 'http://the-internet.herokuapp.com/login'
const homeUrl = 'http://the-internet.herokuapp.com/secure'

const getUrl = ClientFunction(() => window.location.href)

fixture('Home Page')
.page(loginurl)
.beforeEach(async t => {

    LoginPage.setUserName('tomsmith');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();
    await t.wait(5000);

});

test.skip('Loading Home page', async t => {

    await t
    .expect(getUrl()).contains(homeUrl)
    .expect(HomePage.logoutBtn.exists).ok();

});

test('Succesfully LogOut', async t => {

    HomePage.clickOnLogOutButton();
    await t.wait(5000)

    await t
    .expect(LoginPage.responseCard.innerText).contains('You logged out of secure area!');
});