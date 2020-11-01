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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIBillingPeriodUsageOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlanSubscriptionOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIBillingPeriodUsageOut'), require('./APIPlanSubscriptionOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.APIPeriodUsageOut = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.APIBillingPeriodUsageOut, root.NamSorApiV2.APIPlanSubscriptionOut);
  }
}(this, function(ApiClient, APIBillingPeriodUsageOut, APIPlanSubscriptionOut) {
  'use strict';



  /**
   * The APIPeriodUsageOut model module.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPeriodUsageOut
   * @version 2.0.11
   */

  /**
   * Constructs a new <code>APIPeriodUsageOut</code>.
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPeriodUsageOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>APIPeriodUsageOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPeriodUsageOut} obj Optional instance to populate.
   * @return {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPeriodUsageOut} The populated <code>APIPeriodUsageOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = APIPlanSubscriptionOut.constructFromObject(data['subscription']);
      }
      if (data.hasOwnProperty('billingPeriod')) {
        obj['billingPeriod'] = APIBillingPeriodUsageOut.constructFromObject(data['billingPeriod']);
      }
      if (data.hasOwnProperty('overageExclTax')) {
        obj['overageExclTax'] = ApiClient.convertToType(data['overageExclTax'], 'Number');
      }
      if (data.hasOwnProperty('overageInclTax')) {
        obj['overageInclTax'] = ApiClient.convertToType(data['overageInclTax'], 'Number');
      }
      if (data.hasOwnProperty('overageCurrency')) {
        obj['overageCurrency'] = ApiClient.convertToType(data['overageCurrency'], 'String');
      }
      if (data.hasOwnProperty('overageQuantity')) {
        obj['overageQuantity'] = ApiClient.convertToType(data['overageQuantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIPlanSubscriptionOut} subscription
   */
  exports.prototype['subscription'] = undefined;
  /**
   * @member {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/APIBillingPeriodUsageOut} billingPeriod
   */
  exports.prototype['billingPeriod'] = undefined;
  /**
   * @member {Number} overageExclTax
   */
  exports.prototype['overageExclTax'] = undefined;
  /**
   * @member {Number} overageInclTax
   */
  exports.prototype['overageInclTax'] = undefined;
  /**
   * @member {String} overageCurrency
   */
  exports.prototype['overageCurrency'] = undefined;
  /**
   * @member {Number} overageQuantity
   */
  exports.prototype['overageQuantity'] = undefined;



  return exports;
}));


