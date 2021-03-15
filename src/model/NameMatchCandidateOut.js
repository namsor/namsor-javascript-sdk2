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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.NameMatchCandidateOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NameMatchCandidateOut model module.
   * @module model/NameMatchCandidateOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>NameMatchCandidateOut</code>.
   * @alias module:model/NameMatchCandidateOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NameMatchCandidateOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NameMatchCandidateOut} obj Optional instance to populate.
   * @return {module:model/NameMatchCandidateOut} The populated <code>NameMatchCandidateOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('candidateName')) {
        obj['candidateName'] = ApiClient.convertToType(data['candidateName'], 'String');
      }
      if (data.hasOwnProperty('probability')) {
        obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');
      }
      if (data.hasOwnProperty('predScoreGivenName')) {
        obj['predScoreGivenName'] = ApiClient.convertToType(data['predScoreGivenName'], 'Number');
      }
      if (data.hasOwnProperty('predScoreFamilyName')) {
        obj['predScoreFamilyName'] = ApiClient.convertToType(data['predScoreFamilyName'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} candidateName
   */
  exports.prototype['candidateName'] = undefined;
  /**
   * @member {Number} probability
   */
  exports.prototype['probability'] = undefined;
  /**
   * @member {Number} predScoreGivenName
   */
  exports.prototype['predScoreGivenName'] = undefined;
  /**
   * @member {Number} predScoreFamilyName
   */
  exports.prototype['predScoreFamilyName'] = undefined;



  return exports;
}));


