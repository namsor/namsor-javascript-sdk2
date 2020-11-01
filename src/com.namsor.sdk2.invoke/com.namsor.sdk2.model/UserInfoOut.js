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
    define(['com.namsor.sdk2.invoke/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.UserInfoOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UserInfoOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/UserInfoOut
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>UserInfoOut</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/UserInfoOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>UserInfoOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/UserInfoOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/UserInfoOut} The populated <code>UserInfoOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('emailVerified')) {
        obj['emailVerified'] = ApiClient.convertToType(data['emailVerified'], 'Boolean');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('photoUrl')) {
        obj['photoUrl'] = ApiClient.convertToType(data['photoUrl'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('firstKnownIpAddress')) {
        obj['firstKnownIpAddress'] = ApiClient.convertToType(data['firstKnownIpAddress'], 'String');
      }
      if (data.hasOwnProperty('providerId')) {
        obj['providerId'] = ApiClient.convertToType(data['providerId'], 'String');
      }
      if (data.hasOwnProperty('timeStamp')) {
        obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'Number');
      }
      if (data.hasOwnProperty('verifyToken')) {
        obj['verifyToken'] = ApiClient.convertToType(data['verifyToken'], 'String');
      }
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('stripePerishableKey')) {
        obj['stripePerishableKey'] = ApiClient.convertToType(data['stripePerishableKey'], 'String');
      }
      if (data.hasOwnProperty('stripeCustomerId')) {
        obj['stripeCustomerId'] = ApiClient.convertToType(data['stripeCustomerId'], 'String');
      }
      if (data.hasOwnProperty('otherInfos')) {
        obj['otherInfos'] = ApiClient.convertToType(data['otherInfos'], [UserInfoOut]);
      }
    }
    return obj;
  }

  /**
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {Boolean} emailVerified
   */
  exports.prototype['emailVerified'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} photoUrl
   */
  exports.prototype['photoUrl'] = undefined;
  /**
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * @member {String} firstKnownIpAddress
   */
  exports.prototype['firstKnownIpAddress'] = undefined;
  /**
   * @member {String} providerId
   */
  exports.prototype['providerId'] = undefined;
  /**
   * @member {Number} timeStamp
   */
  exports.prototype['timeStamp'] = undefined;
  /**
   * @member {String} verifyToken
   */
  exports.prototype['verifyToken'] = undefined;
  /**
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * @member {String} stripePerishableKey
   */
  exports.prototype['stripePerishableKey'] = undefined;
  /**
   * @member {String} stripeCustomerId
   */
  exports.prototype['stripeCustomerId'] = undefined;
  /**
   * @member {Array.<module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/UserInfoOut>} otherInfos
   */
  exports.prototype['otherInfos'] = undefined;



  return exports;
}));


