
const googleCommands = {
  search(term) {
    return this.setValue('@searchBar', [term, this.api.Keys.ENTER]);
  },
  endTest() {
    return this.api.end();
  }
};

module.exports = {
  commands: [googleCommands],
  url: 'http://google.com',
  elements: {
    searchBar: '#lst-ib' ,
    nightwatchLink: 'a[href="http://nightwatchjs.org/"]', 
  }
};