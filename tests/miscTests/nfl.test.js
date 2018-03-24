describe('nfl.com', () => {
  it('should navigate to the "teams" page when clicked', browser => {
    browser
      .maximizeWindow()
      .url('http://www.nfl.com') 
      .waitForElementVisible('body', 500) 
      .click('a[href="http://www.nfl.com/teams"]');
    browser.assert.title(
      'NFL Football Teams - Official Sites of all 32 NFL Teams | NFL.com'
    );
  });
  it('should have "Carolina Panthers" as a listed team', browser => {
    browser.expect.element('#Panthers span').text.to.equal('Carolina Panthers');
    browser.end();
  });
});
