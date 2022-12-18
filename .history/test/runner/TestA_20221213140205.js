fixture('Test.A').meta('Regression', 'Mobile').page('https://www.google.com')
test('TestA.1', async t => {
    console.log('TestA.1');
});

test('TestA.2', async t => {
    console.log('TestA.2');
});