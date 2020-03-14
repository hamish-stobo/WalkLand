const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.checkProfile = function (browser) {
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
    .click('button[name=profile]')

}

this.deleteProfile = function (browser) {
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
    .click('button[name=profile]')
    .click('button[name=settings]')
    .click('button[name=delete]')

}