const { t, Selector } = require("testcafe");
//const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");
const { default: homePage } = require("../Page/Home");


fixture('test 1');

test.skip('Get request', async t => {

    const response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET',
    });

    //console.log( response.body);
    await t.expect(response.status).eql(200);
    await t.expect(response.statusText).eql('OK')

    response.body.forEach(device => {
        
    });
});

test.page('http://localhost:3001')('blabla', async t => {

    homePage.clickOnDeviceType();
    await t
    .wait(5000)
    .click("option[value='ALL']")

    const elementos = Selector('div.device-info')(1);

    //elementos.forEach(device => {
       await console.log(elementos.innerText)
    //});
});