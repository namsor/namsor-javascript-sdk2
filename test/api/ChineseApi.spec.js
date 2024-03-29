/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.15
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
    instance = new NamSorApiV2.ChineseApi();
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

  describe('ChineseApi', function() {
    describe('chineseNameCandidates', function() {
      it('should call chineseNameCandidates successfully', function(done) {
        //uncomment below and update the code to test chineseNameCandidates
        //instance.chineseNameCandidates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('chineseNameCandidatesBatch', function() {
      it('should call chineseNameCandidatesBatch successfully', function(done) {
        //uncomment below and update the code to test chineseNameCandidatesBatch
        //instance.chineseNameCandidatesBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('chineseNameCandidatesGenderBatch', function() {
      it('should call chineseNameCandidatesGenderBatch successfully', function(done) {
        //uncomment below and update the code to test chineseNameCandidatesGenderBatch
        //instance.chineseNameCandidatesGenderBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('chineseNameGenderCandidates', function() {
      it('should call chineseNameGenderCandidates successfully', function(done) {
        //uncomment below and update the code to test chineseNameGenderCandidates
        //instance.chineseNameGenderCandidates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('chineseNameMatch', function() {
      it('should call chineseNameMatch successfully', function(done) {
        //uncomment below and update the code to test chineseNameMatch
        //instance.chineseNameMatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('chineseNameMatchBatch', function() {
      it('should call chineseNameMatchBatch successfully', function(done) {
        //uncomment below and update the code to test chineseNameMatchBatch
        //instance.chineseNameMatchBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genderChineseName', function() {
      it('should call genderChineseName successfully', function(done) {
        //uncomment below and update the code to test genderChineseName
        //instance.genderChineseName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genderChineseNameBatch', function() {
      it('should call genderChineseNameBatch successfully', function(done) {
        //uncomment below and update the code to test genderChineseNameBatch
        //instance.genderChineseNameBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genderChineseNamePinyin', function() {
      it('should call genderChineseNamePinyin successfully', function(done) {
        //uncomment below and update the code to test genderChineseNamePinyin
        //instance.genderChineseNamePinyin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genderChineseNamePinyinBatch', function() {
      it('should call genderChineseNamePinyinBatch successfully', function(done) {
        //uncomment below and update the code to test genderChineseNamePinyinBatch
        //instance.genderChineseNamePinyinBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('parseChineseName', function() {
      it('should call parseChineseName successfully', function(done) {
        //uncomment below and update the code to test parseChineseName
        //instance.parseChineseName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('parseChineseNameBatch', function() {
      it('should call parseChineseNameBatch successfully', function(done) {
        //uncomment below and update the code to test parseChineseNameBatch
        //instance.parseChineseNameBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pinyinChineseName', function() {
      it('should call pinyinChineseName successfully', function(done) {
        //uncomment below and update the code to test pinyinChineseName
        //instance.pinyinChineseName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pinyinChineseNameBatch', function() {
      it('should call pinyinChineseNameBatch successfully', function(done) {
        //uncomment below and update the code to test pinyinChineseNameBatch
        //instance.pinyinChineseNameBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
