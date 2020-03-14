const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.landingPageTitle = function (browser) {
  browser
    .url(urlLink)
    .expect.title()
    .to.contain('Walkland')
}

this.landingPageLogo = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .waitForElementVisible('.logo')
    .expect.element('.logo img').to.be.present
  browser
    .waitForElementVisible('button[name=landingButton]')
    .expect.element('button[name=landingButton]').to.have.attribute('name')
}

this.clickStartButton = function (browser) {
  browser
    .url(urlLink)
    .waitForElementVisible('button[name=landingButton]', 1000)
    .click('button[name=landingButton]')
    .waitForElementVisible('map', 5000)
    .waitForElementVisible('.logo-nav-container', 1000)
    .waitForElementVisible('.sidebar-container', 1000)
}