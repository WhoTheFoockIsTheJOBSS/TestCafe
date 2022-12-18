import { Selector, t, ClientFunction } from "testcafe";

ficture('New Window Feature')
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

})