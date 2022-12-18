import { takeSnapshot } from "testcafe-blink-diff";
import { Selector, t, ClientFunction } from "testcafe";

fixture('Snapshots')
    .after('http://www.google.com/');


let testName = "";

test('Google Testing', async t => {
    await takeSnapshot(t);
});

test('Google Testing after search - Var 1', async t => {

    //How to get the tezt name assigned in a variable
    testName = t.testRun.test.name;

    //Page interactions
    await t
        .typeText(1600,1000)
        .click('input.gNO89b')

    //Snapshot code

    //Scenario 1/Breakpoint 1: Search in breakpoint of 1600 * 1200 - width * Height
    //the snapshot will be taken in full page

    await t.resizeWindow(1600,1000);
    await t.wait(4000);

    await takeSnapshot(t, testName, )

});

test('Google Testing after search - Var 2', async t => {

});

