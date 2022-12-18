import { Selector, t } from "testcafe";

class HomePage{

   constructor(){
       this.logoutBtn = Selector('button');
       this.responseCard = Selector('div#flash');
   }

   async clickOnLogOutButton(){
       await t.click(this.logoutBtn);
   };

}

export default new HomePage();