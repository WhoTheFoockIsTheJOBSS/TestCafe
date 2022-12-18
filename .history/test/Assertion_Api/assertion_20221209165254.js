import { Selector, ClientFunction } from 'testcafe'

fixture ('Assertion API').page('http://demoqa.com/element');

const getWindowLocation = ClientFunction(() => window.location);

test ('Deep Equel', async t => {
    await t.expect(Selector('header-wrapper').count).eql(6, 'Accordion Items Count', {timeout: 5000});
});

test ('Deep Equel', async t => {
    await t.expect(Selector('header-wrapper').count).eql(6, 'Accordion Items Count', {timeout: 5000});
});

