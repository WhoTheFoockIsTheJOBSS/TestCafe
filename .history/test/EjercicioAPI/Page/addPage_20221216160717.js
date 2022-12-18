import { Selector, t } from "testcafe";

 class AddPage{

    constructor(){
        this.systemNameInput = Selector('input#system_name');
        this.typeSelect = Selector('select#type');
        this.hddCapacityInput = Selector('input#hdd_capacity')
        this.saveBtn = Selector('button.submitButton');
    }

    async setName(systemName){
        await t.typeText(this.systemNameInput, systemName);
    };

    async setType(){
        await t.typeText(this.typeSelect);
        await t.click('')
    };

    async clickOnLoginButton(){
        await t.click(this.loginBtn);
    };

 }

 export default new AddPage();