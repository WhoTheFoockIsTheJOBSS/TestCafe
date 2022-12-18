import { Selector } from "testcafe";

//Parametros funcon syntax
const elementWithId = Selector(id => {
    return documetn.getelementById(id);
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
    const webTableLi = Selector('#item-3');

    await t
    .click(webTableLi)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);
 });