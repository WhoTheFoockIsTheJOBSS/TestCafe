import { ClientFunction, t } from "testcafe";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const url = 'http://the-internet.herokuapp.com/login';
const getUrl = ClientFunction(() => window.location);

ficture ('Login PAge').page(url)
test('Loading loging page', async t => )