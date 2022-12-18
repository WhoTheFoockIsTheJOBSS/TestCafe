import { Selector, t, ClientFunction } from "testcafe";

fixture('New Window Feature')
.page('https://www.phptravels.net');

let ytSelector = '';
let url = '';

test.skip('New Window Opened Automatically After Click', async t => {

    ytSelector = Selector('div.footer-sociales a').nth(2);

    url = await t.eval(()=> document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://www.phptravels.net/');

    await t
    .wait(5000)
    .click(ytSelector)

    url = await t.getNativeDialogHistory(() => document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://www.phptravels.net/');

});

test('New window managed by the AE', async t => {

    url = await t.eval(() => document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://www.htptravels.net/');

    //This Method takes a window descriptor as an argument:
    const initialWindow = await t.getCurrentWindow();

    //-----*Open a new window #2*------
    //-- Note: Browser window share the client-side storage. Only one user role can be active at a time.--
    await t.openWindow('http://www.youtube.com/');

    url = await t.eval(() => document.documentURI);
    console.log('New window URL: ' + url);
    await t.expect(url).eql('https://www.youtube.com/');

    //this method takes a window descriptor as an argument
    const window2 = await t.getCurrentWindow();

    // -----* Open a new window #3 *-----
    const window3 = await t.getCurrentWindow('https://github.com/');

});