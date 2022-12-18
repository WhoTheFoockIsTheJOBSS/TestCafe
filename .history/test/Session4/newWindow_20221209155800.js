import { Selector, t, ClientFunction } from "testcafe";

fixture('New Window Feature')
.page('https://www.phptravels.net');

let ytSelector = '';
let url = '';

test.skip('New Window Opened Automatically After Click', async t => {

    ytSelector = Selector(".waves-effect[href='https://www.youtube.com/c/PhptravelsOfficial']");

    url = await t.eval(()=> document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://phptravels.net/');

    await t
    .wait(5000)
    .click(ytSelector)

    url = await t.eval(() => document.documentURI);
    console.log('YT URL: ' + url);
    await t.expect(url).eql('https://www.youtube.com/c/PhptravelsOfficial');

});

test('New window managed by the AE', async t => {

    url = await t.eval(() => document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://htptravels.net/');

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
    const window3 = await t.openWindow('https://github.com/');

    url = await t.eval(() => document.documentURI);
    console.log('New window: ' + url);
    await t.expect(url).eql('https://github.com/');

    //-----* Switch between windows *-----
    await t.switchToWindow(initialWindow);

    url = await t.eval(() => document.documentURI);
    console.log('Main URL after switching' + url);
    await t.expect(url).eql('https://htptravels.net/');

    //-----* Close opened windows *-----
    await t.closeWindow(window3)
    console.log('Window #3 has been closed')

    await t.closeWindow(window2);
    console.log('Window #2 has been closed')

});