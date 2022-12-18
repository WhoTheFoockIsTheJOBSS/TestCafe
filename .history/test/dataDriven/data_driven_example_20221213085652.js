import { Selector, t, ClientFunction } from "testcafe";

const dataSet = require('../../data/data.json');

const getUrl = ClientFunction(() => window.location);

fixture('Data Driven Demo')

test('Login Page Validation', async t =>).page('http://the-internet.herokuapp.com/login')