describe('Skookum.com/blog', function() {
  it('loads the blog page', function(browser) {
    const page = browser.page.base();
    const blogPage = browser.page.blog();

    blogPage.navigate();
    page.waitUntilVisibleAndMaximize();

    blogPage.assert.title('Our Blog');
  });

  it('has an h2 with text "Our Blog"', function(browser) {
    const page = browser.page.base();
    const blogPage = browser.page.blog();

    blogPage.expect.element('@h2').text.to.equal('Our Blog');
    
    page.endTest();
  });
});