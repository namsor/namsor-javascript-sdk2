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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/ProperNounCategorizedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.namsor.sdk2.model/ProperNounCategorizedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.GeneralApi = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.ProperNounCategorizedOut);
  }
}(this, function(ApiClient, ProperNounCategorizedOut) {
  'use strict';

  /**
   * General service.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi
   * @version 2.0.11
   */

  /**
   * Constructs a new GeneralApi. 
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi
   * @class
   * @param {module:com.namsor.sdk2.invoke/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.namsor.sdk2.invoke/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the nameType operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi~nameTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/ProperNounCategorizedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
     * @param {String} properNoun 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi~nameTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/ProperNounCategorizedOut}
     */
    this.nameType = function(properNoun, callback) {
      var postBody = null;

      // verify the required parameter 'properNoun' is set
      if (properNoun === undefined || properNoun === null) {
        throw new Error("Missing the required parameter 'properNoun' when calling nameType");
      }


      var pathParams = {
        'properNoun': properNoun
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProperNounCategorizedOut;

      return this.apiClient.callApi(
        '/api2/json/nameType/{properNoun}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the nameType1 operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi~nameType1Callback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/ProperNounCategorizedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely type of a proper noun (personal name, brand name, place name etc.)
     * @param {String} properNoun 
     * @param {String} countryIso2 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/GeneralApi~nameType1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/ProperNounCategorizedOut}
     */
    this.nameType1 = function(properNoun, countryIso2, callback) {
      var postBody = null;

      // verify the required parameter 'properNoun' is set
      if (properNoun === undefined || properNoun === null) {
        throw new Error("Missing the required parameter 'properNoun' when calling nameType1");
      }

      // verify the required parameter 'countryIso2' is set
      if (countryIso2 === undefined || countryIso2 === null) {
        throw new Error("Missing the required parameter 'countryIso2' when calling nameType1");
      }


      var pathParams = {
        'properNoun': properNoun,
        'countryIso2': countryIso2
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProperNounCategorizedOut;

      return this.apiClient.callApi(
        '/api2/json/nameType/{properNoun}/{countryIso2}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));