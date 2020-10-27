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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/NameMatchedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameMatchedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchNameMatchedOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.NameMatchedOut);
  }
}(this, function(ApiClient, NameMatchedOut) {
  'use strict';



  /**
   * The BatchNameMatchedOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchedOut
   * @version 2.0.10
   */

  /**
   * Constructs a new <code>BatchNameMatchedOut</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchedOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchNameMatchedOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchedOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchedOut} The populated <code>BatchNameMatchedOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('matchedNames')) {
        obj['matchedNames'] = ApiClient.convertToType(data['matchedNames'], [NameMatchedOut]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/NameMatchedOut>} matchedNames
   */
  exports.prototype['matchedNames'] = undefined;



  return exports;
}));


