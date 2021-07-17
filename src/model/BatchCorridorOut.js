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
    define(['ApiClient', 'model/CorridorOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CorridorOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchCorridorOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.CorridorOut);
  }
}(this, function(ApiClient, CorridorOut) {
  'use strict';



  /**
   * The BatchCorridorOut model module.
   * @module model/BatchCorridorOut
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>BatchCorridorOut</code>.
   * @alias module:model/BatchCorridorOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchCorridorOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchCorridorOut} obj Optional instance to populate.
   * @return {module:model/BatchCorridorOut} The populated <code>BatchCorridorOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('corridorFromTo')) {
        obj['corridorFromTo'] = ApiClient.convertToType(data['corridorFromTo'], [CorridorOut]);
      }
    }
    return obj;
  }

  /**
   * Classified corridors
   * @member {Array.<module:model/CorridorOut>} corridorFromTo
   */
  exports.prototype['corridorFromTo'] = undefined;



  return exports;
}));


