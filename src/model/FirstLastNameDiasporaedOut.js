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
    root.NamSorApiV2.FirstLastNameDiasporaedOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FirstLastNameDiasporaedOut model module.
   * @module model/FirstLastNameDiasporaedOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>FirstLastNameDiasporaedOut</code>.
   * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
   * @alias module:model/FirstLastNameDiasporaedOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirstLastNameDiasporaedOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirstLastNameDiasporaedOut} obj Optional instance to populate.
   * @return {module:model/FirstLastNameDiasporaedOut} The populated <code>FirstLastNameDiasporaedOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('script')) {
        obj['script'] = ApiClient.convertToType(data['script'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('ethnicityAlt')) {
        obj['ethnicityAlt'] = ApiClient.convertToType(data['ethnicityAlt'], 'String');
      }
      if (data.hasOwnProperty('ethnicity')) {
        obj['ethnicity'] = ApiClient.convertToType(data['ethnicity'], 'String');
      }
      if (data.hasOwnProperty('lifted')) {
        obj['lifted'] = ApiClient.convertToType(data['lifted'], 'Boolean');
      }
      if (data.hasOwnProperty('countryIso2')) {
        obj['countryIso2'] = ApiClient.convertToType(data['countryIso2'], 'String');
      }
      if (data.hasOwnProperty('ethnicitiesTop')) {
        obj['ethnicitiesTop'] = ApiClient.convertToType(data['ethnicitiesTop'], ['String']);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} script
   */
  exports.prototype['script'] = undefined;
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
   * Compatibility to NamSor_v1 Origin score value
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {String} ethnicityAlt
   */
  exports.prototype['ethnicityAlt'] = undefined;
  /**
   * @member {String} ethnicity
   */
  exports.prototype['ethnicity'] = undefined;
  /**
   * @member {Boolean} lifted
   */
  exports.prototype['lifted'] = undefined;
  /**
   * @member {String} countryIso2
   */
  exports.prototype['countryIso2'] = undefined;
  /**
   * List ethnicities (top 10)
   * @member {Array.<String>} ethnicitiesTop
   */
  exports.prototype['ethnicitiesTop'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));


