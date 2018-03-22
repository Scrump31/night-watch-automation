const { browserStackUser, browserStackKey } = require('./keys');

const nightwatch_config = {
  src_folders: ['tests'],
  output_folder: 'reports',
  test_workers: { enabled: false, workers: 'auto' },
  selenium: {
    start_process: true,
    server_path: './bin/selenium-server-standalone-3.10.0.jar',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.gecko.driver': './node_modules/.bin/geckodriver',
      'webdriver.edge.driver': ''
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      request_timeout_options: {
        timeout: 15000,
        retry_attempts: 5
      },
      test_runner: {
        type: 'mocha',
        options: {
          ui: 'bdd',
          reporter: 'spec'
        }
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge'
      }
    },
    browserStack: {
      selenium: {
        start_process: false
      },
      selenium_host: 'hub-cloud.browserstack.com',
      selenium_port: 80,
      desiredCapabilities: {
        'browserstack.user': browserStackUser,
        'browserstack.key': browserStackKey,
        acceptSslCerts: true,
        project: 'Skookum.com',
        build: 'Services Page',
        os: 'OS X',
        os_version: 'High Sierra',
        browser: 'Firefox',
        browser_version: '60.0 beta',
        resolution: '1024x768'
      }
    }
  }
};

module.exports = nightwatch_config;
