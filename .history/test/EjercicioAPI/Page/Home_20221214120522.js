import { Selector, t } from "testcafe";

 class homePage{

    constructor(){
        this.deviceTypeDD = Selector('select#device_type');
        this.sortByDD = Selector('select#sort_by');
        this.addDeviceBtn = Selector('a.submitButton');
        this.deviceName = Selector('span.device-name');
        this.deviceType = Selector('span.device-type');
        this.deviceCapacity = Selector('span.device-capacity');
        this.deviceEditBtn = Selector('a.device-edit');
        this.deviceRemoveBtn = Selector('button.device-remove')
    }

    async clickOnDeviceType(){
        await t.click(this.deviceTypeDD);
    };

    async clickOnSortBy(){
        await t.click(this.sortByDD);
    };

    async clickOnAddDevice(){
        await t.click(this.addDeviceBtn);
    };

 }

 export default new homePage();