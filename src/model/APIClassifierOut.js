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
    root.NamSorApiV2.APIClassifierOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The APIClassifierOut model module.
   * @module model/APIClassifierOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>APIClassifierOut</code>.
   * @alias module:model/APIClassifierOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>APIClassifierOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIClassifierOut} obj Optional instance to populate.
   * @return {module:model/APIClassifierOut} The populated <code>APIClassifierOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('classifierName')) {
        obj['classifierName'] = ApiClient.convertToType(data['classifierName'], 'String');
      }
      if (data.hasOwnProperty('serving')) {
        obj['serving'] = ApiClient.convertToType(data['serving'], 'Boolean');
      }
      if (data.hasOwnProperty('learning')) {
        obj['learning'] = ApiClient.convertToType(data['learning'], 'Boolean');
      }
      if (data.hasOwnProperty('shuttingDown')) {
        obj['shuttingDown'] = ApiClient.convertToType(data['shuttingDown'], 'Boolean');
      }
      if (data.hasOwnProperty('probabilityCalibrated')) {
        obj['probabilityCalibrated'] = ApiClient.convertToType(data['probabilityCalibrated'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} classifierName
   */
  exports.prototype['classifierName'] = undefined;
  /**
   * @member {Boolean} serving
   */
  exports.prototype['serving'] = undefined;
  /**
   * @member {Boolean} learning
   */
  exports.prototype['learning'] = undefined;
  /**
   * @member {Boolean} shuttingDown
   */
  exports.prototype['shuttingDown'] = undefined;
  /**
   * @member {Boolean} probabilityCalibrated
   */
  exports.prototype['probabilityCalibrated'] = undefined;



  return exports;
}));


