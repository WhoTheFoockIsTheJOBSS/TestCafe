const { t, Selector } = require("testcafe");
//const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");
const { default: homePage } = require("../Page/home");


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
        
        test.page('http://localhost:3001')('Verificacion en UI', async t => {

            homePage.clickOnDeviceType();
            await t
            .wait(2000)
            .click("option[value='ALL']")

            const deviceName = Selector('span.device-name');
            await console.log(deviceName.innerText);

        });
    });
});
