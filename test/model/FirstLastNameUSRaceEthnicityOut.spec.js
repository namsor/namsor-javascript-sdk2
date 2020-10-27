/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.10
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
    instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
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

  describe('FirstLastNameUSRaceEthnicityOut', function() {
    it('should create an instance of FirstLastNameUSRaceEthnicityOut', function() {
      // uncomment below and update the code to test FirstLastNameUSRaceEthnicityOut
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be.a(NamSorApiV2.FirstLastNameUSRaceEthnicityOut);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property raceEthnicityAlt (base name: "raceEthnicityAlt")', function() {
      // uncomment below and update the code to test the property raceEthnicityAlt
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property raceEthnicity (base name: "raceEthnicity")', function() {
      // uncomment below and update the code to test the property raceEthnicity
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property raceEthnicitiesTop (base name: "raceEthnicitiesTop")', function() {
      // uncomment below and update the code to test the property raceEthnicitiesTop
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property probabilityCalibrated (base name: "probabilityCalibrated")', function() {
      // uncomment below and update the code to test the property probabilityCalibrated
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

    it('should have the property probabilityAltCalibrated (base name: "probabilityAltCalibrated")', function() {
      // uncomment below and update the code to test the property probabilityAltCalibrated
      //var instance = new NamSorApiV2.FirstLastNameUSRaceEthnicityOut();
      //expect(instance).to.be();
    });

  });

}));