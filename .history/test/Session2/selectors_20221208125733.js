import { Selector } from "testcafe";

//Parametros funcon syntax
const persistentID = 'item-3';

const elemnt = Selector(() => {
    return decument.getelementById(persistentID);
}, {
    dependencies: {persistentID}
});

fixture ('SELECTOR_SESSION')
.page ('https://demoqa.com/text-box')