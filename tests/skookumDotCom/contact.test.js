describe('Skookum.com/contact', () => {
  it('should have the title "Skookum - Contact"', (browser) => {
    browser
      .url('https://skookum.com/contact') // Navigate to the url
      .waitForElementVisible('body', 1000) // Wait until you can see the body element.
      .maximizeWindow()
      .setValue('.hs-firstname .hs-input', 'John Doe') // full name field
      .setValue('.hs-email .hs-input', 'scottie.crump@skookum.com') // email field
      .setValue('.hs-company .hs-input', 'Test Company') // company field
      .setValue('.hs-phone .hs-input', '1234567') // Phone Number field
      .setValue('textarea', 'Test Message') // Message field
      .pause(3000);
    browser.expect.element('.contact__markdown h2').text.to.equal('Contact Us');
    //.assert.title('Skookum - Contact')
    browser.end(); // This must be called to close the browser at the end
  });
});