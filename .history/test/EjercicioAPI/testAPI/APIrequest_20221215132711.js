const { t, Selector } = require("testcafe");
const { default: HomePage } = require("../../pageObjectModel/pages/HomePage");
const { default: homePage } = require("../Page/home");


fixture('test 1');

test('Get Devices List', async t => {

    //homePage.APIcallGET();

    let response = await t.request({
        url: 'http://localhost:3000/devices',
        method: 'GET'
    });

    //console.log( response.body);
    //await t.expect(response.status).eql(200);
    //await t.expect(response.statusText).eql('OK');

    response.body.forEach( async device => {
        console.log(device.system_name);
        console.log(device.system_type);
        console.log(device.hdd_capacity);

        const device_name = Selector(`div[class='list-devices'] div:nth-child(${device}) div:nth-child(1) span:nth-child(1)`);
        await t.expect(device_name.innerText).eql(device.system_name);

        
        const device_type = Selector(`div[class='list-devices'] div:nth-child(${device}) div:nth-child(1) span:nth-child(2)`);
        await t.expect(device_type.innerText).eql(device.system_type);

        const device_capacity = Selector(`div[class='list-devices'] div:nth-child(${device}) div:nth-child(1) span:nth-child(3)`);
        await t.expect(device_capacity.innerText).eql(device.system_capacity);


    });
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