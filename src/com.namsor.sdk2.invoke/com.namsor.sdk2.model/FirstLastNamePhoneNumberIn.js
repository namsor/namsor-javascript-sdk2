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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameOriginedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirstLastNameOriginedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.FirstLastNamePhoneNumberIn = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.FirstLastNameOriginedOut);
  }
}(this, function(ApiClient, FirstLastNameOriginedOut) {
  'use strict';



  /**
   * The FirstLastNamePhoneNumberIn model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNamePhoneNumberIn
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>FirstLastNamePhoneNumberIn</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNamePhoneNumberIn
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirstLastNamePhoneNumberIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNamePhoneNumberIn} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNamePhoneNumberIn} The populated <code>FirstLastNamePhoneNumberIn</code> instance.
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
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('FirstLastNameOriginedOut')) {
        obj['FirstLastNameOriginedOut'] = FirstLastNameOriginedOut.constructFromObject(data['FirstLastNameOriginedOut']);
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
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameOriginedOut} FirstLastNameOriginedOut
   */
  exports.prototype['FirstLastNameOriginedOut'] = undefined;



  return exports;
}));


