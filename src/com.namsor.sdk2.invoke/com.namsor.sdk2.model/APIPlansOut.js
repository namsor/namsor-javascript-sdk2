/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.11
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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlanOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIPlanOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.APIPlansOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.APIPlanOut);
  }
}(this, function(ApiClient, APIPlanOut) {
  'use strict';



  /**
   * The APIPlansOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlansOut
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>APIPlansOut</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlansOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>APIPlansOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlansOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlansOut} The populated <code>APIPlansOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('usageRatioForDupplicates')) {
        obj['usageRatioForDupplicates'] = ApiClient.convertToType(data['usageRatioForDupplicates'], 'Number');
      }
      if (data.hasOwnProperty('currencyIso3')) {
        obj['currencyIso3'] = ApiClient.convertToType(data['currencyIso3'], 'String');
      }
      if (data.hasOwnProperty('currencySymbol')) {
        obj['currencySymbol'] = ApiClient.convertToType(data['currencySymbol'], 'String');
      }
      if (data.hasOwnProperty('plans')) {
        obj['plans'] = ApiClient.convertToType(data['plans'], [APIPlanOut]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} usageRatioForDupplicates
   */
  exports.prototype['usageRatioForDupplicates'] = undefined;
  /**
   * @member {String} currencyIso3
   */
  exports.prototype['currencyIso3'] = undefined;
  /**
   * @member {String} currencySymbol
   */
  exports.prototype['currencySymbol'] = undefined;
  /**
   * @member {Array.<module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlanOut>} plans
   */
  exports.prototype['plans'] = undefined;



  return exports;
}));


