import { ClientFunction, t } from "testcafe"
import homePage from "testcafe/test/EjercicioAPI/Page/Home"

const homeUrl = 'http://localhost:3001'

const getUrl = ClientFunction(() => window.location.href)

fixture('Home Page')
.page(homeUrl)
.beforeEach(async t => {

    LoginPage.setUserName('tomsmith');
    LoginPage.setPassword('SuperSecretPassword!');
    LoginPage.clickOnLoginButton();
    await t.wait(5000);

});

test('Loading Home page', async t => {

    await t
    .expect(getUrl()).contains(homeUrl)
    .expect(HomePage.logoutBtn.exists).ok();

});

test('Succesfully LogOut', async t => {

    HomePage.clickOnLogOutButton();
    await t.wait(5000)

    await t
    .expect(LoginPage.responseCard.innerText).contains(' You logged out of the secure area!');
});