const { t } = require("testcafe");

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


test.page(http://localhost:3001/)('verifi Devices in DOM', async t => {
    await 
})