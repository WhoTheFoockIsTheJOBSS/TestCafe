const { t } = require("testcafe");

fixture`resquest`;

test('Get request', async (t) => {

    const response = await t.request({
        url: '',
        method: 'GET'
    });

    console.log(response);
    await t.expect(response.body.title).eql('');
    await t.expect(response.status).eql(200);
});