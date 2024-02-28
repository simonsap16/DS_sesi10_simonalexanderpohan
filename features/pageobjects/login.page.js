const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError(message) {
        await this.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser(message)).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
