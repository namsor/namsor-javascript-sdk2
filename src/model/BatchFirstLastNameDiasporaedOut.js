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
    define(['ApiClient', 'model/FirstLastNameDiasporaedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirstLastNameDiasporaedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.BatchFirstLastNameDiasporaedOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.FirstLastNameDiasporaedOut);
  }
}(this, function(ApiClient, FirstLastNameDiasporaedOut) {
  'use strict';



  /**
   * The BatchFirstLastNameDiasporaedOut model module.
   * @module model/BatchFirstLastNameDiasporaedOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>BatchFirstLastNameDiasporaedOut</code>.
   * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
   * @alias module:model/BatchFirstLastNameDiasporaedOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BatchFirstLastNameDiasporaedOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchFirstLastNameDiasporaedOut} obj Optional instance to populate.
   * @return {module:model/BatchFirstLastNameDiasporaedOut} The populated <code>BatchFirstLastNameDiasporaedOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('personalNames')) {
        obj['personalNames'] = ApiClient.convertToType(data['personalNames'], [FirstLastNameDiasporaedOut]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FirstLastNameDiasporaedOut>} personalNames
   */
  exports.prototype['personalNames'] = undefined;



  return exports;
}));


