'use strict'

module.exports = [
  // The below list of os / browser / device combos is deisgned to keep as upto date as bstack allows
  // Note that Chrome on ios and Samsung internet on android are not spec'd as these capabilities do
  // not appear avilabale with bstack currently.  Device tests are set to run on real devices.
  
  {
    // MacOS Mojave Chrome latest
    os: 'OS X',
    osVersion: 'Catalina',
    browserName: 'Chrome',
    browserVersion: 'latest'
  },
  // {
  //   // iPhone SE 2020 13 Safari latest
  //   osVersion: '13',
  //   device: 'iPhone 11',
  //   realMobile: 'true',
  //   browserName: 'iPhone',
  //   browserVersion: 'latest',
  //   appiumVersion: '1.18.0'
  // },
  // {
  // // Samsung Galaxy S20 Chrome latest
  //   osVersion: '10.0',
  //   device: 'Samsung Galaxy S20',
  //   realMobile: 'true',
  //   browserVersion: 'latest',
  //   appiumVersion: '1.18.0'
  // }
]
