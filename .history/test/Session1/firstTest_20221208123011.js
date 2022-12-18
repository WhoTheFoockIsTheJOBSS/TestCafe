fixture 'firtsTest';

test
    .page 'http://devexpress.github.io/testcafe/blog/'
    ("Test Cafe Blog", async t => {
        console.log('Se ingreso al sitio de test cafe blog correctamente');
    });

test
    .page "https://demoqa.com/text-box"
    ("Demo QA Site", async t => {
        console.log('Se ingreso al sitio de Demo Qa correctamente');
    });