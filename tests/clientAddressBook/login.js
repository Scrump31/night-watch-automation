const googleLogin = require('./helpers/googleLogin');

describe('login page', () => {
  it('logs in user and redirects to "clients" page', browser => {
    googleLogin(browser);
    browser
      .pause(2000)
      .verify.title('Clients')
      .end();
  });
});
