import { Selector, t, ClientFunction } from "testcafe";

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(() => window.location.href);

fixture('Data Driven Demo')

test.page('http://the-internet.herokuapp.com/login')
('Login Page Validation', async t => {

    await t
    .maximizeWindow()
    .typeText('input#username', 'tom')
    .typeText('input#password', 'SuperSecretPassword!')
});