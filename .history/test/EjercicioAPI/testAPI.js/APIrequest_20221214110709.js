const { t } = require("testcafe");

fixture`Resquest`;

test('Get request', async (t) => {

    const response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET',
        
    });

    console.log(response);
    await t.expect(response.status).eql(200);
    await t.expect(response.statusText).eql('OK')

});