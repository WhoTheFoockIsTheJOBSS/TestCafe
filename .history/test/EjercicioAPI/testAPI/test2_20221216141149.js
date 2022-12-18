const { t, Selector, ClientFunction } = require("testcafe");
import XPathSelector from '../../../lib/xpath-selector';
const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");
const { default: homePage } = require("../Page/home");


fixture('test 2').page('http://localhost:3001/')

test('Add devices', async t=> {

    await t.click(Selector('a.submitButton'));
    await t.typeText(Selector('input#system_name'), 'Asus-PC')

});