import { Selector, t, ClientFunction } from "testcafe";

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(() => window.location.href);

fixture('Data Driven Demo')

test.page('http://the-internet.herokuapp.com/login')
('Login Page Validation', async t => {

    await t
    .maximizeWindow()
    .typeText(Selector('input#username'), 'tom')
    .typeText(Selector('input#password'), 'SuperSecretPassword!')
    .click(Selector('.fa.fa-2x.fa-sign-in'));

    await t.expect(Selector('div#flash').innerText). contains('Your username is invalid!');
});