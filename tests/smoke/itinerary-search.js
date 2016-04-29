'use strict'

var searchHelper = require("../../helpers/search-helper");

module.exports = {
    '@tags': ['smoke'],
    'From Hausmanns gate to Malerhaugveien 28' : function (browser) {
      var browser = browser.url(browser.launch_url);
      searchHelper.waitingItinerarySearch(browser, "Hausmanns gate", "Malerhaugveien 28, Oslo");
      browser.end();
    },
    'From Hausmanns gate to Ula nord' : function (browser) {
      var browser = browser.url(browser.launch_url);
      searchHelper.waitingItinerarySearch(browser, "Hausmanns gate", "Ula nord");
      browser.end();
    },
    'From Røros skole to Festplassen, Bergen' : function (browser) {
      var browser = browser.url(browser.launch_url);
      searchHelper.waitingItinerarySearch(browser, "Røros skole", "Festplassen");
      browser.end();
    },
    'From Festplassen, Bergen to Scandic Alta' : function (browser) {
      var browser = browser.url(browser.launch_url);
      searchHelper.waitingItinerarySearch(browser, "Festplassen", "Scandic Alta");
      browser.end();
    }
}
