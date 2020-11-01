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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameIn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirstLastNameIn'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchFirstLastNameIn = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.FirstLastNameIn);
  }
}(this, function(ApiClient, FirstLastNameIn) {
  'use strict';



  /**
   * The BatchFirstLastNameIn model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>BatchFirstLastNameIn</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchFirstLastNameIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} The populated <code>BatchFirstLastNameIn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('personalNames')) {
        obj['personalNames'] = ApiClient.convertToType(data['personalNames'], [FirstLastNameIn]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameIn>} personalNames
   */
  exports.prototype['personalNames'] = undefined;



  return exports;
}));


