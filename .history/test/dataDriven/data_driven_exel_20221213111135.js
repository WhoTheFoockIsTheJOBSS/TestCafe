import { Selector, t, ClientFunction } from "testcafe";
import xlsx from 'node-xlsx';

const exelFile = xlsx.parse('./data/tesData.xlsx');
const exelSheet = exelFile.find(sheets => sheets.name =='data');
const exelSheetData = exelSheet.data;

const headers = exelSheetData.shift();
const dataSet = exelSheetData.map((row) =>{
    
    const user = {};

    row.array.forEach((data, idx) => user[headers[idx] = data])
});
