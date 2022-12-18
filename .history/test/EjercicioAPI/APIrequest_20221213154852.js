const { t } = require("testcafe");

fixture`resquest`;

test('Get request', async (t) => {

    const response = await t.request({
        url: ''
    })
})