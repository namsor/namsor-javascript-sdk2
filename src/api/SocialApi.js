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
    define(['ApiClient', 'model/BatchFirstLastNamePhoneCodedOut', 'model/BatchFirstLastNamePhoneNumberGeoIn', 'model/BatchFirstLastNamePhoneNumberIn', 'model/FirstLastNamePhoneCodedOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BatchFirstLastNamePhoneCodedOut'), require('../model/BatchFirstLastNamePhoneNumberGeoIn'), require('../model/BatchFirstLastNamePhoneNumberIn'), require('../model/FirstLastNamePhoneCodedOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.SocialApi = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.BatchFirstLastNamePhoneCodedOut, root.NamSorApiV2.BatchFirstLastNamePhoneNumberGeoIn, root.NamSorApiV2.BatchFirstLastNamePhoneNumberIn, root.NamSorApiV2.FirstLastNamePhoneCodedOut);
  }
}(this, function(ApiClient, BatchFirstLastNamePhoneCodedOut, BatchFirstLastNamePhoneNumberGeoIn, BatchFirstLastNamePhoneNumberIn, FirstLastNamePhoneCodedOut) {
  'use strict';

  /**
   * Social service.
   * @module api/SocialApi
   * @version 2.0.15
   */

  /**
   * Constructs a new SocialApi. 
   * @alias module:api/SocialApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the phoneCode operation.
     * @callback module:api/SocialApi~phoneCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirstLastNamePhoneCodedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} phoneNumber 
     * @param {module:api/SocialApi~phoneCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirstLastNamePhoneCodedOut}
     */
    this.phoneCode = function(firstName, lastName, phoneNumber, callback) {
      var postBody = null;

      // verify the required parameter 'firstName' is set
      if (firstName === undefined || firstName === null) {
        throw new Error("Missing the required parameter 'firstName' when calling phoneCode");
      }

      // verify the required parameter 'lastName' is set
      if (lastName === undefined || lastName === null) {
        throw new Error("Missing the required parameter 'lastName' when calling phoneCode");
      }

      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling phoneCode");
      }


      var pathParams = {
        'firstName': firstName,
        'lastName': lastName,
        'phoneNumber': phoneNumber
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
      var returnType = FirstLastNamePhoneCodedOut;

      return this.apiClient.callApi(
        '/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the phoneCodeBatch operation.
     * @callback module:api/SocialApi~phoneCodeBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchFirstLastNamePhoneCodedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
     * @param {Object} opts Optional parameters
     * @param {module:model/BatchFirstLastNamePhoneNumberIn} opts.batchFirstLastNamePhoneNumberIn A list of personal names
     * @param {module:api/SocialApi~phoneCodeBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchFirstLastNamePhoneCodedOut}
     */
    this.phoneCodeBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNamePhoneNumberIn'];


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BatchFirstLastNamePhoneCodedOut;

      return this.apiClient.callApi(
        '/api2/json/phoneCodeBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the phoneCodeGeo operation.
     * @callback module:api/SocialApi~phoneCodeGeoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirstLastNamePhoneCodedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} phoneNumber 
     * @param {String} countryIso2 
     * @param {module:api/SocialApi~phoneCodeGeoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirstLastNamePhoneCodedOut}
     */
    this.phoneCodeGeo = function(firstName, lastName, phoneNumber, countryIso2, callback) {
      var postBody = null;

      // verify the required parameter 'firstName' is set
      if (firstName === undefined || firstName === null) {
        throw new Error("Missing the required parameter 'firstName' when calling phoneCodeGeo");
      }

      // verify the required parameter 'lastName' is set
      if (lastName === undefined || lastName === null) {
        throw new Error("Missing the required parameter 'lastName' when calling phoneCodeGeo");
      }

      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling phoneCodeGeo");
      }

      // verify the required parameter 'countryIso2' is set
      if (countryIso2 === undefined || countryIso2 === null) {
        throw new Error("Missing the required parameter 'countryIso2' when calling phoneCodeGeo");
      }


      var pathParams = {
        'firstName': firstName,
        'lastName': lastName,
        'phoneNumber': phoneNumber,
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
      var returnType = FirstLastNamePhoneCodedOut;

      return this.apiClient.callApi(
        '/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the phoneCodeGeoBatch operation.
     * @callback module:api/SocialApi~phoneCodeGeoBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchFirstLastNamePhoneCodedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
     * @param {Object} opts Optional parameters
     * @param {module:model/BatchFirstLastNamePhoneNumberGeoIn} opts.batchFirstLastNamePhoneNumberGeoIn A list of personal names
     * @param {module:api/SocialApi~phoneCodeGeoBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchFirstLastNamePhoneCodedOut}
     */
    this.phoneCodeGeoBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNamePhoneNumberGeoIn'];


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BatchFirstLastNamePhoneCodedOut;

      return this.apiClient.callApi(
        '/api2/json/phoneCodeGeoBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the phoneCodeGeoFeedbackLoop operation.
     * @callback module:api/SocialApi~phoneCodeGeoFeedbackLoopCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirstLastNamePhoneCodedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} phoneNumber 
     * @param {String} phoneNumberE164 
     * @param {String} countryIso2 
     * @param {module:api/SocialApi~phoneCodeGeoFeedbackLoopCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirstLastNamePhoneCodedOut}
     */
    this.phoneCodeGeoFeedbackLoop = function(firstName, lastName, phoneNumber, phoneNumberE164, countryIso2, callback) {
      var postBody = null;

      // verify the required parameter 'firstName' is set
      if (firstName === undefined || firstName === null) {
        throw new Error("Missing the required parameter 'firstName' when calling phoneCodeGeoFeedbackLoop");
      }

      // verify the required parameter 'lastName' is set
      if (lastName === undefined || lastName === null) {
        throw new Error("Missing the required parameter 'lastName' when calling phoneCodeGeoFeedbackLoop");
      }

      // verify the required parameter 'phoneNumber' is set
      if (phoneNumber === undefined || phoneNumber === null) {
        throw new Error("Missing the required parameter 'phoneNumber' when calling phoneCodeGeoFeedbackLoop");
      }

      // verify the required parameter 'phoneNumberE164' is set
      if (phoneNumberE164 === undefined || phoneNumberE164 === null) {
        throw new Error("Missing the required parameter 'phoneNumberE164' when calling phoneCodeGeoFeedbackLoop");
      }

      // verify the required parameter 'countryIso2' is set
      if (countryIso2 === undefined || countryIso2 === null) {
        throw new Error("Missing the required parameter 'countryIso2' when calling phoneCodeGeoFeedbackLoop");
      }


      var pathParams = {
        'firstName': firstName,
        'lastName': lastName,
        'phoneNumber': phoneNumber,
        'phoneNumberE164': phoneNumberE164,
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
      var returnType = FirstLastNamePhoneCodedOut;

      return this.apiClient.callApi(
        '/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
