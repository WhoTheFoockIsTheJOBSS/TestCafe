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

});