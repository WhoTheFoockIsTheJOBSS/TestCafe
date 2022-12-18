import { Selector, t, ClientFunction } from "testcafe";
import xlsx from 'node-xlsx';

const exelFile = xlsx.parse('./data/tesData.xlsx');
const exelSheet = exelFile.find(sheets => sheets.name =='data');
const exelSheetData = exelSheet.data;

// [
//     ['username','password','expectedMessage'],
//     ['tomsmith','SuperSecretPassword!','You logged into a secure area!'],
//     ['tom','SuperSecretPassword!','Your username is invalid!'],
//     ['tomsmith','SuperSecret','Your password is invalid!']
// ]

const headers = exelSheetData.shift();
const dataSet = exelSheetData.map((row) =>{
    
    const user = {};
    row.forEach((data, idx) => user[headers[idx] = data]);
    return user;
});


