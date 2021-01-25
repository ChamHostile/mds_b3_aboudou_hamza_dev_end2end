nightwatch_config = {

    src_folders : ["tests"],

    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
  
    test_settings: {
      default: {
        desiredCapabilities: {
          'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'hamzaaboudou1',
          'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'ic9b7pNtND6rVxWs2ppg',
          'browser': 'chrome',
          'name': 'Bstack-[Nightwatch] Project'
        }
      }
    }
  };
  
  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
  }
  
  module.exports = nightwatch_config;