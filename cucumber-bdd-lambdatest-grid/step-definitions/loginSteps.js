const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const config = require('../config');

let driver;

Given('the user is on the login page', { timeout: 20000 }, async function () {
  driver = await new Builder()
    .usingServer(`https://${config.lt.user}:${config.lt.key}@${config.lt.gridUrl}`)
    .withCapabilities(config.lt.capabilities)
    .build();

  await driver.get(`${config.baseUrl}/index.php?route=account/login`);
});

When('the user enters valid credentials', async function () {
  await driver.findElement(By.id('input-email')).sendKeys(config.credentials.email);
  await driver.findElement(By.id('input-password')).sendKeys(config.credentials.password);
  await driver.findElement(By.css('input[type="submit"]')).click();
});

Then('the user should be redirected to the account page', async function () {
  await driver.wait(until.urlContains('account/account'), config.timeout);
  const url = await driver.getCurrentUrl();
  assert(url.includes('account/account'));
  await driver.quit();
});
