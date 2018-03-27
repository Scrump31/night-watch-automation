const { googleE, googleP } = require('../../../keys');
function googleLogin(client) {
  client
    .url('http://murmuring-badlands-71937.herokuapp.com/') // Navigate to the url
    .waitForElementVisible('body', 2000) // Wait 2 seconds/until you can see the body element.
    .click('.btn-google') // Click Google login button
    .pause(1000) // Wait 1 sec
    .setValue('#identifierId', googleE) // Type in Email or phone info
    .click('#identifierNext') // Click Next button
    .pause(1000) // Wait 1 sec
    .setValue('input[type=password]', googleP) // Type in password
    .click('#passwordNext'); // Click Next button
}

module.exports = googleLogin;
