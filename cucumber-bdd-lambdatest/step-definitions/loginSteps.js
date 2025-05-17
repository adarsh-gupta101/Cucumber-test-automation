const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('the user is on the login page', { timeout: 20000 }, async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

When('the user enters valid credentials', async function () {
  await driver.findElement(By.id('input-email')).sendKeys('adarshguptaworks@gmail.com');
  await driver.findElement(By.id('input-password')).sendKeys('password');
  await driver.findElement(By.css('input[type="submit"]')).click();
});

Then('the user should be redirected to the account page', async function () {
  await driver.wait(until.urlContains('account/account'), 5000);
  const url = await driver.getCurrentUrl();
  assert(url.includes('account/account'));
  await driver.quit();
});
