import { Selector, t } from "testcafe";

 class homePage{

    constructor(){
        this.deviceTypeDD = Selector('select#device_type');
        this.deviceTypeValue = Selector('');
        this.sortByDD = Selector('select#sort_by');
        this.addDeviceBtn = Selector('a.submitButton');
        this.deviceName = Selector('span.device-name');
        this.deviceType = Selector('span.device-type');
        this.deviceCapacity = Selector('span.device-capacity');
        this.deviceEditBtn = Selector('a.device-edit');
        this.deviceRemoveBtn = Selector('button.device-remove')
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