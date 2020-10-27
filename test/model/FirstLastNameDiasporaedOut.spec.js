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
    instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
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

  describe('FirstLastNameDiasporaedOut', function() {
    it('should create an instance of FirstLastNameDiasporaedOut', function() {
      // uncomment below and update the code to test FirstLastNameDiasporaedOut
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be.a(NamSorApiV2.FirstLastNameDiasporaedOut);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property ethnicityAlt (base name: "ethnicityAlt")', function() {
      // uncomment below and update the code to test the property ethnicityAlt
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property ethnicity (base name: "ethnicity")', function() {
      // uncomment below and update the code to test the property ethnicity
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property lifted (base name: "lifted")', function() {
      // uncomment below and update the code to test the property lifted
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property countryIso2 (base name: "countryIso2")', function() {
      // uncomment below and update the code to test the property countryIso2
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

    it('should have the property ethnicitiesTop (base name: "ethnicitiesTop")', function() {
      // uncomment below and update the code to test the property ethnicitiesTop
      //var instance = new NamSorApiV2.FirstLastNameDiasporaedOut();
      //expect(instance).to.be();
    });

  });

}));
