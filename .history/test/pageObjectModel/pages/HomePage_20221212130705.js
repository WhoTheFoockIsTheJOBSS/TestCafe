import { Selector, t } from "testcafe";

class HomePage{

   constructor(){
       this.logoutBtn = Selector('button');
       this.responseCard = Selector('div#flash');
   }

   async clickOnLoginButton(){
       await t.click(this.loginBtn);
   };

}

export default new LoginPage();