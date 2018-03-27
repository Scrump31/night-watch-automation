describe('Skookum.com/404', () => {
  it('should render the 404 page when a url not found', (browser) => {
    browser
      .url('https://skookum.com/fakepage') // Navigate to the url
      .maximizeWindow()
      .pause(3000)
      .assert.title('Page Not found');
  });
});