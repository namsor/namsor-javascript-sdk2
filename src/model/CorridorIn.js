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
    define(['ApiClient', 'model/FirstLastNameGeoIn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FirstLastNameGeoIn'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.CorridorIn = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.FirstLastNameGeoIn);
  }
}(this, function(ApiClient, FirstLastNameGeoIn) {
  'use strict';



  /**
   * The CorridorIn model module.
   * @module model/CorridorIn
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>CorridorIn</code>.
   * Represent any transnational interaction between names (ex. remittance, communication, cross-border investment, airline travel
   * @alias module:model/CorridorIn
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CorridorIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorridorIn} obj Optional instance to populate.
   * @return {module:model/CorridorIn} The populated <code>CorridorIn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstLastNameGeoFrom')) {
        obj['firstLastNameGeoFrom'] = FirstLastNameGeoIn.constructFromObject(data['firstLastNameGeoFrom']);
      }
      if (data.hasOwnProperty('firstLastNameGeoTo')) {
        obj['firstLastNameGeoTo'] = FirstLastNameGeoIn.constructFromObject(data['firstLastNameGeoTo']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/FirstLastNameGeoIn} firstLastNameGeoFrom
   */
  exports.prototype['firstLastNameGeoFrom'] = undefined;
  /**
   * @member {module:model/FirstLastNameGeoIn} firstLastNameGeoTo
   */
  exports.prototype['firstLastNameGeoTo'] = undefined;



  return exports;
}));


