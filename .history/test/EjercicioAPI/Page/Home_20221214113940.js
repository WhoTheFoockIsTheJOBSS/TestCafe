import { Selector, t } from "testcafe";

 class homePage{

    constructor(){
        this.deviceTypeDD = Selector('select#device_type');
        this.sortByDD = Selector('select#sort_by');
        this.addDeviceBtn = Selector('a.submitButton');
        this.deviceName = Selector('span.device-name');
        this.deviceType = Selector('div:nth-child(1) div:nth-child(1) span:nth-child(2)')
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