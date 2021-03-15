/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.13
 * Contact: contact@namsor.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NamSorApiV2);
  }
}(this, function(expect, NamSorApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NamSorApiV2.UserInfoOut();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserInfoOut', function() {
    it('should create an instance of UserInfoOut', function() {
      // uncomment below and update the code to test UserInfoOut
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be.a(NamSorApiV2.UserInfoOut);
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property emailVerified (base name: "emailVerified")', function() {
      // uncomment below and update the code to test the property emailVerified
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property photoUrl (base name: "photoUrl")', function() {
      // uncomment below and update the code to test the property photoUrl
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property firstKnownIpAddress (base name: "firstKnownIpAddress")', function() {
      // uncomment below and update the code to test the property firstKnownIpAddress
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property timeStamp (base name: "timeStamp")', function() {
      // uncomment below and update the code to test the property timeStamp
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property verifyToken (base name: "verifyToken")', function() {
      // uncomment below and update the code to test the property verifyToken
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property stripePerishableKey (base name: "stripePerishableKey")', function() {
      // uncomment below and update the code to test the property stripePerishableKey
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property stripeCustomerId (base name: "stripeCustomerId")', function() {
      // uncomment below and update the code to test the property stripeCustomerId
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

    it('should have the property otherInfos (base name: "otherInfos")', function() {
      // uncomment below and update the code to test the property otherInfos
      //var instance = new NamSorApiV2.UserInfoOut();
      //expect(instance).to.be();
    });

  });

}));
