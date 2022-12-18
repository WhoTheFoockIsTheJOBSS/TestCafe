const { t } = require("testcafe");

fixture`resquest`;

test('Get request', async (t) => {

    const response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET',
        
    });

    console.log(response);
    await t.expect(response.body.status).eql(200);
    await t.expect(response.body)
});