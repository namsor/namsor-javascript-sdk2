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
    instance = new NamSorApiV2.APICounterV2Out();
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

  describe('APICounterV2Out', function() {
    it('should create an instance of APICounterV2Out', function() {
      // uncomment below and update the code to test APICounterV2Out
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be.a(NamSorApiV2.APICounterV2Out);
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property apiService (base name: "apiService")', function() {
      // uncomment below and update the code to test the property apiService
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property createdDateTime (base name: "createdDateTime")', function() {
      // uncomment below and update the code to test the property createdDateTime
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property totalUsage (base name: "totalUsage")', function() {
      // uncomment below and update the code to test the property totalUsage
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property lastFlushedDateTime (base name: "lastFlushedDateTime")', function() {
      // uncomment below and update the code to test the property lastFlushedDateTime
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property lastUsedDateTime (base name: "lastUsedDateTime")', function() {
      // uncomment below and update the code to test the property lastUsedDateTime
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

    it('should have the property serviceFeaturesUsage (base name: "serviceFeaturesUsage")', function() {
      // uncomment below and update the code to test the property serviceFeaturesUsage
      //var instance = new NamSorApiV2.APICounterV2Out();
      //expect(instance).to.be();
    });

  });

}));
