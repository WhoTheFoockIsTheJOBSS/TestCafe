const { t, Selector } = require("testcafe");
const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");

fixture('test 1');

test('Get request', async t => {

    const response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET',
    });

    const devicesList = response.body;
    console.log(devicesList);
    await t.expect(response.status).eql(200);
    await t.expect(response.statusText).eql('OK')
});

response.body.forEach(device => {

    console.log(device)
    
    // test.page('http://localhost:3001/')('Verifi Devices in DOM', async t => {
    
    // homePage.clickOnDeviceType();
    // await t.click(Selector("option[value='ALL']"));

    // await t.expect(Selector('span.device-name').innerText, device.system_name).contains(device.system_name);
    // await t.expect(Selector('span.device-type').innerText, device.type).contains(device.type);
    // await t.expect(Selector('span.device-capacity').innerText, device.dhh_caácity).contains(device.dhh_caácity);
    
    // await t.expect(Selector('div.device-info').innerText).contains(device);
    });
//});