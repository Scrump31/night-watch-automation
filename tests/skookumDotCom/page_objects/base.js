const baseCommands = {
  waitUntilVisibleAndMaximize() {
    this.api.waitForElementVisible('body', 1000),
    this.api.maximizeWindow();
  },
  endTest() {
    return this.api.end();
  },
  waitXsecondsUntilPageLoads(seconds) {
    return this.api.waitForElementVisible('body', seconds);
  }
};

module.exports = {
  commands: [baseCommands],
  elements: {
    h2: '.page-header__content h2',
    skookumLogoLink: '[fill="#043349"]',
    servicesLink: '.main-nav .nav-link:nth-of-type(1)',
    workLink: '.main-nav .nav-link:nth-of-type(2)',
    blogLink: '.main-nav .nav-link:nth-of-type(3)',
    eventsLink: '.main-nav .nav-link:nth-of-type(4)',
    aboutLink: '.main-nav .nav-link:nth-of-type(5)',
    contactUsLink: '.nav-link--contact',
  }
};
