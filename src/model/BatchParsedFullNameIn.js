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
    define(['ApiClient', 'model/ParsedFullNameIn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ParsedFullNameIn'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchParsedFullNameIn = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.ParsedFullNameIn);
  }
}(this, function(ApiClient, ParsedFullNameIn) {
  'use strict';



  /**
   * The BatchParsedFullNameIn model module.
   * @module model/BatchParsedFullNameIn
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>BatchParsedFullNameIn</code>.
   * @alias module:model/BatchParsedFullNameIn
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchParsedFullNameIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchParsedFullNameIn} obj Optional instance to populate.
   * @return {module:model/BatchParsedFullNameIn} The populated <code>BatchParsedFullNameIn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('personalNames')) {
        obj['personalNames'] = ApiClient.convertToType(data['personalNames'], [ParsedFullNameIn]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ParsedFullNameIn>} personalNames
   */
  exports.prototype['personalNames'] = undefined;



  return exports;
}));

