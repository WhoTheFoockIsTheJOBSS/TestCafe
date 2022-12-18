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

    async setPassword(password){
        await t.typeText(this.passwordInput, password);
    };

    async clickOnLoginButton(){
        await t.click(this.loginBtn);
    };

 }

 export default new AddPage();