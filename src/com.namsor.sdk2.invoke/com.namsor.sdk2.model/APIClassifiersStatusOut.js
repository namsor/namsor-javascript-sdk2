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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifierOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/SoftwareVersionOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIClassifierOut'), require('./SoftwareVersionOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.APIClassifiersStatusOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.APIClassifierOut, root.NamSorApiV2.SoftwareVersionOut);
  }
}(this, function(ApiClient, APIClassifierOut, SoftwareVersionOut) {
  'use strict';



  /**
   * The APIClassifiersStatusOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifiersStatusOut
   * @version 2.0.10
   */

  /**
   * Constructs a new <code>APIClassifiersStatusOut</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifiersStatusOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>APIClassifiersStatusOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifiersStatusOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifiersStatusOut} The populated <code>APIClassifiersStatusOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('softwareVersion')) {
        obj['softwareVersion'] = SoftwareVersionOut.constructFromObject(data['softwareVersion']);
      }
      if (data.hasOwnProperty('classifiers')) {
        obj['classifiers'] = ApiClient.convertToType(data['classifiers'], [APIClassifierOut]);
      }
    }
    return obj;
  }

  /**
   * @member {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/SoftwareVersionOut} softwareVersion
   */
  exports.prototype['softwareVersion'] = undefined;
  /**
   * @member {Array.<module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIClassifierOut>} classifiers
   */
  exports.prototype['classifiers'] = undefined;



  return exports;
}));


