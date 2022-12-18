import { Selector, t, ClientFunction } from "testcafe";

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(() => window.location.href);

fixture('JSON - Data Driven Demo').skip

dataSet.forEach(data => {
    test.page('http://the-internet.herokuapp.com/login')
        (`Login Page Validation - ${data.expectedMassage}`, async t => {

        await t
        .maximizeWindow()
        .typeText(Selector('input#username'), data.userName)
        .typeText(Selector('input#password'), data.password)
        .click(Selector('.fa.fa-2x.fa-sign-in'));

        await t.expect(Selector('div#flash').innerText). contains(data.expectedMassage);
    }); 
});