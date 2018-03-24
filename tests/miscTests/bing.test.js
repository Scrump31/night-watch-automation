describe('Bing.com', () => {
  it('has the title "Bing"', browser => {
    const bing = browser.page.bing();
    bing.navigate().waitForElementVisible('body', 500);
    browser.assert.title('Bing').end();
  });
});
