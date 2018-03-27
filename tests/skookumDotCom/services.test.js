describe('Skookum.com/services', function() {
  it('should have the title "Skookum - Services"', function(browser) {
    const page = browser.page.base();
    const servicesPage = browser.page.services();

    servicesPage.navigate();
    page.waitUntilVisibleAndMaximize();

    servicesPage.assert.title('Skookum - Services');
  });

  it('should have an h2 with the text "Our Services"', function(browser) {
    const page = browser.page.base();

    page.expect.element('@h2').text.to.equal('Our Services');
    page.endTest();
  });
});
