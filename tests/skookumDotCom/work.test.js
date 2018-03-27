
describe('Skookum.com/work', () => {
  it('should have the page title "Our Work', (browser) => {
    browser
      .url('https://skookum.com/') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .maximizeWindow()
      .click('.main-nav > .nav-link:nth-of-type(2)') // click 'work' link
      .pause(1000);
    browser.assert.title('Our Work');
  });
  it('has an h2 with text "Our Work"', function(browser) {
    browser.expect
      .element('.page-header__content--imageless h2')
      .text.to.equal('Our Work');
    browser.end();
  });
});
