import { Selector } from "testcafe";

//Parametros funcon syntax
const elementWithId = Selector(id => {
    return document.getelementById(id);
});


//Parametros funcon syntax
const persistentID = 'item-3';

const elemnt = Selector(() => {
    return decument.getelementById(persistentID);
}, {
    dependencies: { persistentID }
});


fixture ('SELECTOR_SESSION')
.page ('https://demoqa.com/text-box')

test
("Sinlge Selector Example", async t => {
    
    console.log('-------------------------');
    console.log('Single Selector Example');

    //Selector to get the first child element
    const webTableLi = Selector('div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4)');

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

 test
 .skip
 ("Options.Dependecy selector example", async t => {
    
    console.log('-------------------------');
    console.log('options.Dependency selector example');

    await t
    .click(element)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);
 });