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
    root.NamSorApiV2.StripeCardOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The StripeCardOut model module.
   * @module model/StripeCardOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>StripeCardOut</code>.
   * @alias module:model/StripeCardOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>StripeCardOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripeCardOut} obj Optional instance to populate.
   * @return {module:model/StripeCardOut} The populated <code>StripeCardOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('defaultCard')) {
        obj['defaultCard'] = ApiClient.convertToType(data['defaultCard'], 'Boolean');
      }
      if (data.hasOwnProperty('sourceId')) {
        obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
      }
      if (data.hasOwnProperty('expMonth')) {
        obj['expMonth'] = ApiClient.convertToType(data['expMonth'], 'Number');
      }
      if (data.hasOwnProperty('expYear')) {
        obj['expYear'] = ApiClient.convertToType(data['expYear'], 'Number');
      }
      if (data.hasOwnProperty('last4')) {
        obj['last4'] = ApiClient.convertToType(data['last4'], 'String');
      }
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} defaultCard
   */
  exports.prototype['defaultCard'] = undefined;
  /**
   * @member {String} sourceId
   */
  exports.prototype['sourceId'] = undefined;
  /**
   * @member {Number} expMonth
   */
  exports.prototype['expMonth'] = undefined;
  /**
   * @member {Number} expYear
   */
  exports.prototype['expYear'] = undefined;
  /**
   * @member {String} last4
   */
  exports.prototype['last4'] = undefined;
  /**
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;



  return exports;
}));


