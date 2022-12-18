const { t, Selector, ClientFunction } = require("testcafe");
import XPathSelector from '../../../lib/xpath-selector';
import HomePage from "../../pageObjectModel/pages/HomePage";
import addPage from '../Page/addPage';
const { default: homePage } = require("../Page/home");

const url = 'http://localhost:3001/';
const getUrl = ClientFunction(() => window.location.href)

fixture('test 2').page(url)

test('Loading main page', async t=> {

    await t 
    .expect(getUrl()).contains(url)
    .expect(addPage.saveBtn.exists).ok('el boton existe en la pagina');
});

test('Loading main page', async t=> {

    await t 
    .expect(getUrl()).contains(url)
    .expect(addPage.saveBtn.exists).ok('el boton existe en la pagina');
});