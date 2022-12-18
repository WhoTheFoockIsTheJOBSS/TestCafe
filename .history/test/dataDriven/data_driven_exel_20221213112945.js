import { Selector, t, ClientFunction } from "testcafe";
import xlsx from 'node-xlsx';

const exelFile = xlsx.parse('./data/tesData.xlsx');
const exelSheet = exelFile.find(sheets => sheets.name =='data');
const exelSheetData = exelSheet.data;

// [
//     ['username','password','expectedMessage'],
//     ['tomsmith','SuperSecretPassword!','You logged into a secure area!'],
//     ['tom','SuperSecretPassword!','Your username is invalid!'],
//     ['tomsmith','SecretPassword','Your password is invalid!']
// ]

const headers = exelSheetData.shift();
const dataSet = exelSheetData.map((row) =>{
    
    const user = {};
    row.forEach((data, idx) => user[headers[idx] = data]);
    return user;
});

// [
//     {
//         "userName": "tomsmith",
//         "password": "SuperSecretPassword!",
//         "expectedMassage": "You logged into a secure area!"
//     },

//     {
//         "userName": "tom",
//         "password": "SuperSecretPassword!",
//         "expectedMassage": "Your username is invalid!"
//     },

//     {
//         "userName": "tomsmith",
//         "password": "SecretPassword",
//         "expectedMassage": "Your password is invalid!"
//     }
// ]

fixture('Exel - Data Driver Demo')
dataSet.forEach(data => {
    test.page('http://the-internet.herokuapp.com/login')('Login Page validation', async t => {

        

    });

})