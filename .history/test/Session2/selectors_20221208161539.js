import { Selector } from "testcafe";
import { Expath } from "testcafe"

//Parametros funcon syntax
const elementWithId = Expath(id => {
    return document.getElementById(id);
});


//Parametros funcon syntax
const persistentID = 'item-3';

const elemnt = Selector(() => {
    return decument.getelementById(persistentID);
}, {
    dependencies: {persistentID}
});


fixture ('SELECTOR_SESSION')
.page ('https://demoqa.com/text-box')

test
("Sinlge Selector Example", async t => {
    
    console.log('-------------------------');
    console.log('Single Selector Example');

    //Selector to get the first child element
    const webTableLi = Expath('');

    await t
    .click(webTableLi)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);
 });

 test
 .skip
 ("FUnction parameter selector example", async t => {
    
    console.log('-------------------------');
    console.log('Function parameter selector example');

    await t
    .click(elementWithId('item-3'))
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);
 });