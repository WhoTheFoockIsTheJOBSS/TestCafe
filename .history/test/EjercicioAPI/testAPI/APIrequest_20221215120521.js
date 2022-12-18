const { t, Selector } = require("testcafe");
const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");
const { default: homePage } = require("../Page/home");


fixture('test 1');

test('Get request', async t => {

    //homePage.APIcall(rq);

    const response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET'
    });

    response.body.forEach(device => {
        console.log(device.system_name);
    });
    //console.log( response.body.system_name);
    await t.expect(response.status).eql(200);
    await t.expect(response.statusText).eql('OK')
});

// test.page('http://localhost:3001')('Verifi device in UI', async t => {
   
//     response.body.forEach(device => {
//         homePage.clickOnDeviceType();
        
    
//     });
// })
// response.body.forEach(device => {
    
    
// });

// test.skip.page('http://localhost:3001')('Verificacion en UI', async t => {

//             homePage.clickOnDeviceType();
//             await t
//             .wait(2000)
//             .click("option[value='ALL']")

//             const deviceName = Selector('span.device-name');
//             await console.log(deviceName.innerText);

//         });