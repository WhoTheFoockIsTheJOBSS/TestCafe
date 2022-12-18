 import { Selector, t } from "testcafe";

 class LoginPage{

    constructor(){
        this.userNameInput = Selector('input#username');
        this.passwordInput = Selector('input#password');
        this.loginBtn = Selector('button');
        this.responseCard = Selector('div#flash');
    }

    async setUserName(userNameInput){
        await t.typeText(this.userNameInput)
    }

 }

 export default new LoginPage();