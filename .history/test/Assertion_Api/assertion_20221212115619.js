import { Selector, ClientFunction } from 'testcafe'

fixture ('Assertion API').page('https://docs.devexpress.com/TestCafeStudio/400167/test-concepts/assertions');

const getWindowLocation = ClientFunction(() => window.location);
let url = '';

test.skip('Deep Equel', async t => {

    await t.expect(Selector('.project-toc__item').count).eql(16, 'Accordion Items Count', {timeout: 5000});
});

test.skip('NOT Deep Equel', async t => {

    await t.expect(Selector('.project-toc__item').count).notEql(6, 'Accordion Items Count', {timeout: 5000});
});

test.skip.page("https://docs.devexpress.com/search/?query=pop%20up&project=TestCafeStudio")('OK', async t => {

    await t.click('#Buy')
    url = await t.eval(() => document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://www.devexpress.com/Buy/net/');
    await t.expect(Selector('#FreeTrial').exists).ok('This test will validate if the "FREE TRAIL" button exist');
});

test.skip('NOT OK', async t => {

    await t.click('#Buy')
    await t.expect(Selector('#FreeTrial5').exists).notOk('This test will validate if the "FREE TRAIL" button exist');
});

test('Contains', async t => {
    //await t.click('#Buy')
    await t.expect(getLoation()).contains('https://docs.devexpress.com/');
});


