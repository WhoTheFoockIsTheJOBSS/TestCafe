const { t } = require("testcafe");

fixture`resquest`;

test('Get request', async (t) => {

    const response = await t.request({
        url: 'http://localhost:3001/devices',
        method: 'GET',
        
    });

    console.log(response);
    
});