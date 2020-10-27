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
    // AMD. Register as an anonymous module.
    define(['com.namsor.sdk2.invoke/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.FirstLastNameGenderedOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FirstLastNameGenderedOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut
   * @version 2.0.10
   */

  /**
   * Constructs a new <code>FirstLastNameGenderedOut</code>.
   * Represents the output of inferring the LIKELY gender from a personal name.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirstLastNameGenderedOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut} The populated <code>FirstLastNameGenderedOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('likelyGender')) {
        obj['likelyGender'] = ApiClient.convertToType(data['likelyGender'], 'String');
      }
      if (data.hasOwnProperty('genderScale')) {
        obj['genderScale'] = ApiClient.convertToType(data['genderScale'], 'Number');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('probabilityCalibrated')) {
        obj['probabilityCalibrated'] = ApiClient.convertToType(data['probabilityCalibrated'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Most likely gender
   * @member {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut.LikelyGenderEnum} likelyGender
   */
  exports.prototype['likelyGender'] = undefined;
  /**
   * Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value
   * @member {Number} genderScale
   */
  exports.prototype['genderScale'] = undefined;
  /**
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {Number} probabilityCalibrated
   */
  exports.prototype['probabilityCalibrated'] = undefined;


  /**
   * Allowed values for the <code>likelyGender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LikelyGenderEnum = {
    /**
     * value: "male"
     * @const
     */
    "male": "male",
    /**
     * value: "female"
     * @const
     */
    "female": "female",
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"  };


  return exports;
}));

