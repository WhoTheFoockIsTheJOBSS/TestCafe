fixture('Test.B').meta('Regression', 'Mobile').page('https://www.google.com')
test.meta('Env','Prod')('TestB.1', async t => {
    console.log('TestB.1');
});

test('TestB.2', async t => {
    console.log('TestB.2');
});