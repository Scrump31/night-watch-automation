describe('Cnn.com', () => {
  it('should have the title "CNN - Breaking News, Latest News and Videos" on the home page', browser => {
    browser
      .url('https://www.cnn.com') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .verify.title('CNN - Breaking News, Latest News and Videos')
      .end(); // This must be called to close the browser at the end
  });
});

// commands to run nightwatch sample.test.js  --env chrome
