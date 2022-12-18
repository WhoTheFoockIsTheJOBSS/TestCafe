import { Selector, ClientFunction } from 'testcafe'

fixture ('Assertion API').page('https://docs.devexpress.com/TestCafeStudio/400167/test-concepts/assertions');

const getWindowLocation = ClientFunction(() => window.location);

test('Deep Equel', async t => {
    await t.expect(Selector('.project-toc__item').count).eql(5, 'Accordion Items Count', {timeout: 5000});
});

test('NOT Deep Equel', async t => {
    await t.expect(Selector('.header-wrapper').count).eql(6, 'Accordion Items Count', {timeout: 5000});
});

test.skip('OK', async t => {
    await t.expect(Selector('.project-toc__item').count).notEql(5, 'Accordion Items Count', {timeout: 5000});
});

test.skip('NOT OK', async t => {
    await t.expect(Selector('.header-wrapper').count).eql(6, 'Accordion Items Count', {timeout: 5000});
});

test.skip('Contains', async t => {
    await t.expect(Selector('.header-wrapper').count).eql(6, 'Accordion Items Count', {timeout: 5000});
});


