
module.exports = {
  /*
  'Open Uber Website' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .assert.titleContains('Uber')
      .assert.elementPresent('head')
      .end();
  },*/
/*
  'Check block login in the header wrapper' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="main"]/nav/div/ul[3]/li[1]/button', 'Sign in button is visible')
      .assert.visible('//*[@id="main"]/nav/div/ul[3]/li[2]/button', 'Sign up button is visible')
      .useCss()
      .end();
  },*/

  /*root/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a*/

    /*'Check both section button' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a', 'driver block is visible')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'passenger block is visible')      
      .useCss()
      .end();
  },*/
/*
  'Check login chauffeur section' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a', 'driver block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')      
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/', 'Url is correct')
      .assert.urlContains('next_url=https%3A%2F%2Fdrivers.uber.com', 'Redirect is correct')
      .assert.visible('#useridInput', 'input mail exists')
      .end();
  },*/

  /*'Check login passager section' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath() 
      .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'driver block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')      
      .useCss()
      .waitForElementVisible('body')
      .assert.visible("#next-button")
      .assert.urlContains('https://auth.uber.com/login/', 'Url is correct')
      .assert.urlContains('next_url=https%3A%2F%2Fm.uber.com', 'Redirect is correct')
      .useXpath()
      .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
      .useCss()
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="app-content"]/div/div/div/div/div/a[1]', 'Facebook login link is visible')
      .assert.visible('//*[@id="app-content"]/div/div/div/div/div/a[2]', 'Google login link is visible')
      .end();
  },*/

    /*'Check both section button registration' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a', 'devenir professional block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
      .useCss()
      .waitForElementVisible('body')
      .useXpath()
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input', 'Input email exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input', 'Input firstname exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input', 'Input lastname exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input', 'Input phone exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[7]/div/input', 'Input password exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input', 'Input city exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input', 'Input invitation code exists')
      .assert.visible('//*[@id="maincontent"]/div[2]/div/form/div[11]/button', 'Submit button exists')
      .assert.urlContains('https://www.uber.com/a/join-new', 'URL is correct')
      .end();
    },*/
/*
    'Check register devenir professional section' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'devenir professional block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'Redirect URL is correct')
      .assert.visible('#firstName', 'Input firstname exists')
      .assert.visible('#lastName', 'Input lastname exists')
      .assert.visible('#mobile', 'Input phone exists')
      .assert.visible('#email', 'Input email exists')
      .assert.visible('#addPassword', 'Input password exists')
      .assert.visible('#answerForm > button', 'Submit button exists')
      .end();
    },

    'Check register commander une course section' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'devenir professional block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'Url is correct')
      .assert.visible('#firstName', 'Input firstname exists')
      .assert.visible('#lastName', 'Input lastname exists')
      .assert.visible('#mobile', 'Input phone exists')
      .assert.visible('#email', 'Input email exists')
      .assert.visible('#addPassword', 'Input password exists')
      .assert.visible('#answerForm > button', 'Submit button exists')
      .end();
    },*/

    /*'Check registration doesnt pass' : function(browser) {
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'devenir professional block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .useCss()
      .waitForElementVisible('body')
      .click('#answerForm > button')
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'url is not redirected, registration failed')
      .assert.containsText('#error-caption-mobile', "This phone number is invalid", 'Error appears on error field')
      .end();
    },
  */
    'Check registration validation  ' : function(browser) { //change values to work
    browser
      .url('https://www.uber.com/fr/fr')
      .waitForElementVisible('body')
      .useXpath()
      .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
      .assert.visible('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a', 'devenir professional block is visible')
      .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
      .useCss()
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/?uber_client_name=riderSignUp', 'Url is correct')
      .assert.visible('#firstName', 'Input firstname exists')
      .setValue('#firstName', 'Hamza')
      .assert.visible('#lastName', 'Input lastname exists')
      .setValue('#lastName', 'Aboudou')
      .assert.visible('#mobile', 'Input phone exists')
      .setValue('#mobile', '0614203599')
      .assert.visible('#email', 'Input email exists')
      .setValue('#email', 'hamza.aboudou@hotmail.com')
      .assert.visible('#addPassword', 'Input password exists')
      .setValue('#addPassword', '3rdGenHoushouMarineDesu')
      .assert.visible('#answerForm > button', 'Submit button exists')
      .click('#answerForm > button')
      .waitForElementVisible('body')
      .assert.urlContains('https://auth.uber.com/login/session/', 'Redirect URL is correct')
      .useXpath()
      .assert.visible('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div[1]/div[1]', 'Confirmation message exists')
      .end();
    },
};