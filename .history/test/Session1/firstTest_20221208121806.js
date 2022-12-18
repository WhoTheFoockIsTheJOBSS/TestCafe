fixture "MyFixture"

test
    .page "http://devexpress.github.io/testcafe/blog/"
    ("Test Cafe Blog", async t => {
        console.log('Se ingreso al sitio de test cafe blog correctamente');
    });

test
    .page "http://devexpress.github.io/testcafe/blog/"
    ("My test", async t => {
        console.log('Se ingreso al sitio de test cafe blog correctamente');
    });