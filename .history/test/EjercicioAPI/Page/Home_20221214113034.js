import { Selector, t } from "testcafe";

 class homePage{

    constructor(){
        this.deviceTypeDD = Selector('select#device_type');
        this.sortByDD = Selector('select#sort_by');
        this.addDeviceBtn = Selector('a.submitButton');
        this.responseCard = Selector('div#flash');
    }

    async setUserName(userName){
        await t.typeText(this.userNameInput, userName);
    };

    async setPassword(password){
        await t.typeText(this.passwordInput, password);
    };

    async clickOnLoginButton(){
        await t.click(this.loginBtn);
    };

 }

 export default new LoginPage();