import { Selector, t } from "testcafe";

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
("Single Selector Example", ascync t => {
    
    console.log('-------------------------');
    console.log('Single Selector Example');

    //Selector to get the first child element
    const webTable = Slector(#item-3);

    await t
    .click(webTable)
    .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString = await headerSelector.innerText;
    
    console.log('Header String: ' + headerString);


 });