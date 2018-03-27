describe('Skookum.com/about', function() {
  it('loads the about page', function(browser) {
    const page = browser.page.base();
    const aboutPage = browser.page.about();

    aboutPage.navigate();
    page.waitUntilVisibleAndMaximize();

    aboutPage.assert.title('Skookum - About');
  });

  it('has an h2 with text "About Skookum"', function(browser) {
    const page = browser.page.base();

    page.expect.element('@h2').text.to.equal('About Skookum');
    page.endTest();
  });
});
