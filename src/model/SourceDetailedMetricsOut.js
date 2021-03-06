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
    define(['ApiClient', 'model/APIKeyOut', 'model/ExpectedClassMetricsOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIKeyOut'), require('./ExpectedClassMetricsOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.SourceDetailedMetricsOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.APIKeyOut, root.NamSorApiV2.ExpectedClassMetricsOut);
  }
}(this, function(ApiClient, APIKeyOut, ExpectedClassMetricsOut) {
  'use strict';



  /**
   * The SourceDetailedMetricsOut model module.
   * @module model/SourceDetailedMetricsOut
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>SourceDetailedMetricsOut</code>.
   * Simple metrics on source, with details by classifier.
   * @alias module:model/SourceDetailedMetricsOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SourceDetailedMetricsOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SourceDetailedMetricsOut} obj Optional instance to populate.
   * @return {module:model/SourceDetailedMetricsOut} The populated <code>SourceDetailedMetricsOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('classifierName')) {
        obj['classifierName'] = ApiClient.convertToType(data['classifierName'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = APIKeyOut.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('aiEstimateTotal')) {
        obj['aiEstimateTotal'] = ApiClient.convertToType(data['aiEstimateTotal'], 'Number');
      }
      if (data.hasOwnProperty('aiEstimatePrecision')) {
        obj['aiEstimatePrecision'] = ApiClient.convertToType(data['aiEstimatePrecision'], 'Number');
      }
      if (data.hasOwnProperty('aiEstimateRecall')) {
        obj['aiEstimateRecall'] = ApiClient.convertToType(data['aiEstimateRecall'], 'Number');
      }
      if (data.hasOwnProperty('metricTimeStamp')) {
        obj['metricTimeStamp'] = ApiClient.convertToType(data['metricTimeStamp'], 'Number');
      }
      if (data.hasOwnProperty('aiStartTime')) {
        obj['aiStartTime'] = ApiClient.convertToType(data['aiStartTime'], 'Number');
      }
      if (data.hasOwnProperty('aiLearnTotal')) {
        obj['aiLearnTotal'] = ApiClient.convertToType(data['aiLearnTotal'], 'Number');
      }
      if (data.hasOwnProperty('snapshotDate')) {
        obj['snapshotDate'] = ApiClient.convertToType(data['snapshotDate'], 'Number');
      }
      if (data.hasOwnProperty('expectedClassMetrics')) {
        obj['expectedClassMetrics'] = ApiClient.convertToType(data['expectedClassMetrics'], [ExpectedClassMetricsOut]);
      }
    }
    return obj;
  }

  /**
   * @member {String} classifierName
   */
  exports.prototype['classifierName'] = undefined;
  /**
   * @member {module:model/APIKeyOut} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Number} aiEstimateTotal
   */
  exports.prototype['aiEstimateTotal'] = undefined;
  /**
   * @member {Number} aiEstimatePrecision
   */
  exports.prototype['aiEstimatePrecision'] = undefined;
  /**
   * @member {Number} aiEstimateRecall
   */
  exports.prototype['aiEstimateRecall'] = undefined;
  /**
   * @member {Number} metricTimeStamp
   */
  exports.prototype['metricTimeStamp'] = undefined;
  /**
   * @member {Number} aiStartTime
   */
  exports.prototype['aiStartTime'] = undefined;
  /**
   * @member {Number} aiLearnTotal
   */
  exports.prototype['aiLearnTotal'] = undefined;
  /**
   * @member {Number} snapshotDate
   */
  exports.prototype['snapshotDate'] = undefined;
  /**
   * @member {Array.<module:model/ExpectedClassMetricsOut>} expectedClassMetrics
   */
  exports.prototype['expectedClassMetrics'] = undefined;



  return exports;
}));


