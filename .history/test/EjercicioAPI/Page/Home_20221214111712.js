import { Selector, t } from "testcafe";

 class homePage{

    constructor(){
        this.deviceType = Selector('select#device_type');
        this.passwordInput = Selector('input#password');
        this.loginBtn = Selector('button');
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