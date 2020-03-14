const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.checkLogin = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#loginLink', 1000)
    .click('#loginLink')
    .expect.element('.popup').to.be.visible
}

this.checkLoginfails = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#loginLink', 1000)
    .click('#loginLink')
    .clearValue('input[name=username]')
    .setValue('input[name=username]', 'adfasdfasdf')
    .clearValue('input[name=password]')
    .setValue('input[name=password]', 'afdasdfasdf')
    .click('button[name=login]')
    .expect.element('.hamish-error-text').to.be.visible

}

this.checkLoginPass = function (browser) {
  const user = 'Test User'
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#loginLink', 1000)
    .click('#loginLink')
    .clearValue('input[name=username]')
    .setValue('input[name=username]', user)
    .clearValue('input[name=password]')
    .setValue('input[name=password]', 'q')
    .click('button[name=login]')
    .expect.element('#profile-name-nav')
    .text.to.contain(user)

}
