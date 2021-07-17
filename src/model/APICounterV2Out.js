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
    define(['ApiClient', 'model/APIKeyOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIKeyOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.APICounterV2Out = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.APIKeyOut);
  }
}(this, function(ApiClient, APIKeyOut) {
  'use strict';



  /**
   * The APICounterV2Out model module.
   * @module model/APICounterV2Out
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>APICounterV2Out</code>.
   * Detailed usage as reported by the deduplicating API counter.
   * @alias module:model/APICounterV2Out
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>APICounterV2Out</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APICounterV2Out} obj Optional instance to populate.
   * @return {module:model/APICounterV2Out} The populated <code>APICounterV2Out</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = APIKeyOut.constructFromObject(data['apiKey']);
      }
      if (data.hasOwnProperty('apiService')) {
        obj['apiService'] = ApiClient.convertToType(data['apiService'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'Number');
      }
      if (data.hasOwnProperty('totalUsage')) {
        obj['totalUsage'] = ApiClient.convertToType(data['totalUsage'], 'Number');
      }
      if (data.hasOwnProperty('lastFlushedDateTime')) {
        obj['lastFlushedDateTime'] = ApiClient.convertToType(data['lastFlushedDateTime'], 'Number');
      }
      if (data.hasOwnProperty('lastUsedDateTime')) {
        obj['lastUsedDateTime'] = ApiClient.convertToType(data['lastUsedDateTime'], 'Number');
      }
      if (data.hasOwnProperty('serviceFeaturesUsage')) {
        obj['serviceFeaturesUsage'] = ApiClient.convertToType(data['serviceFeaturesUsage'], {'String': 'Number'});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/APIKeyOut} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * The apiService corresponds to the classifier name.
   * @member {String} apiService
   */
  exports.prototype['apiService'] = undefined;
  /**
   * The create datetime of the counter.
   * @member {Number} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * The usage of the counter.
   * @member {Number} totalUsage
   */
  exports.prototype['totalUsage'] = undefined;
  /**
   * The flush datetime of the counter.
   * @member {Number} lastFlushedDateTime
   */
  exports.prototype['lastFlushedDateTime'] = undefined;
  /**
   * The last usage datetime of the counter.
   * @member {Number} lastUsedDateTime
   */
  exports.prototype['lastUsedDateTime'] = undefined;
  /**
   * Usage of special features, such as Chinese, Japanese.
   * @member {Object.<String, Number>} serviceFeaturesUsage
   */
  exports.prototype['serviceFeaturesUsage'] = undefined;



  return exports;
}));


