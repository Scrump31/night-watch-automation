module.exports = {
  'Title is Cnn for Cnn.com': function(browser) {
    // Browser is the browser that is being controlled
    browser
      .url('https://www.cnn.com') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .verify.title('CNN - Breaking News, Latest News and Videos')
      .end(); // This must be called to close the browser at the end
  }
};
// commands to run ./node_modules/.bin/nightwatch sample.test.js  --env chrome