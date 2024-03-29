/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.15
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
    define(['ApiClient', 'model/ProperNounCategorizedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProperNounCategorizedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchProperNounCategorizedOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.ProperNounCategorizedOut);
  }
}(this, function(ApiClient, ProperNounCategorizedOut) {
  'use strict';



  /**
   * The BatchProperNounCategorizedOut model module.
   * @module model/BatchProperNounCategorizedOut
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>BatchProperNounCategorizedOut</code>.
   * Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
   * @alias module:model/BatchProperNounCategorizedOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchProperNounCategorizedOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchProperNounCategorizedOut} obj Optional instance to populate.
   * @return {module:model/BatchProperNounCategorizedOut} The populated <code>BatchProperNounCategorizedOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('properNouns')) {
        obj['properNouns'] = ApiClient.convertToType(data['properNouns'], [ProperNounCategorizedOut]);
      }
    }
    return obj;
  }

  /**
   * Classified typed proper names
   * @member {Array.<module:model/ProperNounCategorizedOut>} properNouns
   */
  exports.prototype['properNouns'] = undefined;



  return exports;
}));


