fixture('Test.C').meta('Regression', 'Desktop').page('https://www.google.com')
test.meta('Env','Prod')('TestC.1', async t => {
    console.log('TestC.1');
});

test('TestC.2', async t => {
    console.log('TestC.2');
});