const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require ('../pageobjects/login.page.js');
const HomePage = require ('../pageobjects/Home.page.js');
const loginPage = require('../pageobjects/login.page.js');

Given(/^Simon is on the login page$/, async() => {
    await LoginPage.open()
})

When(/^Simon login with "(.*)" credential$/, async(username) => {
    await LoginPage.login(username)
})

Then(/^Simon should see home page$/, async() => {
    await HomePage.validateHomePage()
})

Then(/^Simon should see error "(.*)"$/, async(message) => {
    await loginPage.validateLockedOutUserError(message)
})

// Then Simon should see error "Epic sadface: Sorry, this user has been locked out."