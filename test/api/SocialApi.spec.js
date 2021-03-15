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
    instance = new NamSorApiV2.SocialApi();
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

  describe('SocialApi', function() {
    describe('phoneCode', function() {
      it('should call phoneCode successfully', function(done) {
        //uncomment below and update the code to test phoneCode
        //instance.phoneCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phoneCodeBatch', function() {
      it('should call phoneCodeBatch successfully', function(done) {
        //uncomment below and update the code to test phoneCodeBatch
        //instance.phoneCodeBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phoneCodeGeo', function() {
      it('should call phoneCodeGeo successfully', function(done) {
        //uncomment below and update the code to test phoneCodeGeo
        //instance.phoneCodeGeo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phoneCodeGeoBatch', function() {
      it('should call phoneCodeGeoBatch successfully', function(done) {
        //uncomment below and update the code to test phoneCodeGeoBatch
        //instance.phoneCodeGeoBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phoneCodeGeoFeedbackLoop', function() {
      it('should call phoneCodeGeoFeedbackLoop successfully', function(done) {
        //uncomment below and update the code to test phoneCodeGeoFeedbackLoop
        //instance.phoneCodeGeoFeedbackLoop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
