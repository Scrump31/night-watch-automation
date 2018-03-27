describe('Skookum.com/events', () => {
  it('should have an h2 with the text "Events"', (browser) => {
    browser
      .url('https://skookum.com/') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .maximizeWindow()
      .click('.main-nav > .nav-link:nth-of-type(4)') // click 'events' link
      .pause(1000)
      .assert.containsText('.page-header__content h2', 'Events');
  });
  it('should have the title "Skookum - Events"', (browser) => {
    browser
      .assert.title('Skookum - Events');
    browser.end();
  });
});