// Example using Nightwatch's Page Object Model
describe('Google demo test for Mocha', () => {
  it('is a test written in Mocha that loads Google.com', browser => {
    const google = browser.page.google();
    google
      .navigate()
      .expect.element('body')
      .to.be.present.before(1000);
  });

  it('searches for Nightwatch', browser => {
    const google = browser.page.google();

    google.search('nightwatch').expect.element('@nightwatchLink').to.be.present;
    google.endTest();
  });
});
