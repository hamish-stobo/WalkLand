const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.checkRegisterPopUp = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#registerLink', 1000)
    .click('#registerLink')
    .expect.element('.popup').to.be.visible
}

this.checkRegisterPopUp = function (browser) {
  const user = 'Test User'
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#registerLink', 1000)
    .click('#registerLink')
    .clearValue('input[name=username]')
    .setValue('input[name=username]', user)
    .clearValue('input[name=password]')
    .setValue('input[name=password]', 'q')
    .click('button[name=submit]')
    .waitForElementVisible('#profile-name-nav', 2000)
    .expect.element('#profile-name-nav')
    .text.to.contain(user)
  // eslint-disable-next-line no-unused-expressions
  browser
    .waitForElementVisible('button[name=logOut]', 2000)
    .expect.element('#logOut4').to.be.present
  // eslint-disable-next-line no-unused-expressions
  browser
    .click('button[name=logOut]')
    .expect.element('#logOut4').to.not.be.present
}

// this.checkRegisterPopUp = function (browser) {
//   const user = 'dank2'
//   browser
//     .url(urlLink)
//     .click('button[name=landingButton]')
//     .waitForElementVisible('#registerLink', 1000)
//     .click('#registerLink')
//     .clearValue('input[name=username]')
//     .setValue('input[name=username]', user)
//     .clearValue('input[name=password]')
//     .setValue('input[name=password]', 'q')
//     .click('button[name=submit]')
//     .waitForElementVisible('#registerLink', 1000)
//     .waitForElementVisible('button[name=logOut]', 2000)
// }
