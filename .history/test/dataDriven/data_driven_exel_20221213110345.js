import { Selector, t, ClientFunction } from "testcafe";
import xlsx from 'node-xlsx';

const exelFile = xlsx.parse('./data')