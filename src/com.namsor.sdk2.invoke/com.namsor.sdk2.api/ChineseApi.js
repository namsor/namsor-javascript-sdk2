/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.10
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
    define(['com.namsor.sdk2.invoke/ApiClient', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameGenderedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameGenderedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameIn', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameParsedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameGenderedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameParsedOut', 'com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../com.namsor.sdk2.model/BatchFirstLastNameGenderedOut'), require('../com.namsor.sdk2.model/BatchFirstLastNameIn'), require('../com.namsor.sdk2.model/BatchNameMatchCandidatesOut'), require('../com.namsor.sdk2.model/BatchPersonalNameGenderedOut'), require('../com.namsor.sdk2.model/BatchPersonalNameIn'), require('../com.namsor.sdk2.model/BatchPersonalNameParsedOut'), require('../com.namsor.sdk2.model/FirstLastNameGenderedOut'), require('../com.namsor.sdk2.model/PersonalNameGenderedOut'), require('../com.namsor.sdk2.model/PersonalNameParsedOut'), require('../com.namsor.sdk2.model/RomanizedNameOut'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.ChineseApi = factory(root.NamSorApiV2.ApiClient, root.NamSorApiV2.BatchFirstLastNameGenderedOut, root.NamSorApiV2.BatchFirstLastNameIn, root.NamSorApiV2.BatchNameMatchCandidatesOut, root.NamSorApiV2.BatchPersonalNameGenderedOut, root.NamSorApiV2.BatchPersonalNameIn, root.NamSorApiV2.BatchPersonalNameParsedOut, root.NamSorApiV2.FirstLastNameGenderedOut, root.NamSorApiV2.PersonalNameGenderedOut, root.NamSorApiV2.PersonalNameParsedOut, root.NamSorApiV2.RomanizedNameOut);
  }
}(this, function(ApiClient, BatchFirstLastNameGenderedOut, BatchFirstLastNameIn, BatchNameMatchCandidatesOut, BatchPersonalNameGenderedOut, BatchPersonalNameIn, BatchPersonalNameParsedOut, FirstLastNameGenderedOut, PersonalNameGenderedOut, PersonalNameParsedOut, RomanizedNameOut) {
  'use strict';

  /**
   * Chinese service.
   * @module com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi
   * @version 2.0.10
   */

  /**
   * Constructs a new ChineseApi. 
   * @alias module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi
   * @class
   * @param {module:com.namsor.sdk2.invoke/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:com.namsor.sdk2.invoke/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the chineseNameCandidates operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
     * @param {String} chineseSurnameLatin 
     * @param {String} chineseGivenNameLatin 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut}
     */
    this.chineseNameCandidates = function(chineseSurnameLatin, chineseGivenNameLatin, callback) {
      var postBody = null;

      // verify the required parameter 'chineseSurnameLatin' is set
      if (chineseSurnameLatin === undefined || chineseSurnameLatin === null) {
        throw new Error("Missing the required parameter 'chineseSurnameLatin' when calling chineseNameCandidates");
      }

      // verify the required parameter 'chineseGivenNameLatin' is set
      if (chineseGivenNameLatin === undefined || chineseGivenNameLatin === null) {
        throw new Error("Missing the required parameter 'chineseGivenNameLatin' when calling chineseNameCandidates");
      }


      var pathParams = {
        'chineseSurnameLatin': chineseSurnameLatin,
        'chineseGivenNameLatin': chineseGivenNameLatin
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
      var returnType = RomanizedNameOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the chineseNameCandidatesBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname), ex. Wang Xiaoming
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} opts.batchFirstLastNameIn A list of personal Chinese names in LATIN, firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut}
     */
    this.chineseNameCandidatesBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNameIn'];


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
      var returnType = BatchNameMatchCandidatesOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameCandidatesBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the chineseNameCandidatesGenderBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesGenderBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname) ex. Wang Xiaoming.
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} opts.batchFirstLastNameIn A list of personal Chinese names in LATIN, firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameCandidatesGenderBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut}
     */
    this.chineseNameCandidatesGenderBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNameIn'];


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
      var returnType = BatchNameMatchCandidatesOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameCandidatesGenderBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the chineseNameGenderCandidates operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameGenderCandidatesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender (&#39;male&#39; or &#39;female&#39;)
     * @param {String} chineseSurnameLatin 
     * @param {String} chineseGivenNameLatin 
     * @param {String} knownGender 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameGenderCandidatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut}
     */
    this.chineseNameGenderCandidates = function(chineseSurnameLatin, chineseGivenNameLatin, knownGender, callback) {
      var postBody = null;

      // verify the required parameter 'chineseSurnameLatin' is set
      if (chineseSurnameLatin === undefined || chineseSurnameLatin === null) {
        throw new Error("Missing the required parameter 'chineseSurnameLatin' when calling chineseNameGenderCandidates");
      }

      // verify the required parameter 'chineseGivenNameLatin' is set
      if (chineseGivenNameLatin === undefined || chineseGivenNameLatin === null) {
        throw new Error("Missing the required parameter 'chineseGivenNameLatin' when calling chineseNameGenderCandidates");
      }

      // verify the required parameter 'knownGender' is set
      if (knownGender === undefined || knownGender === null) {
        throw new Error("Missing the required parameter 'knownGender' when calling chineseNameGenderCandidates");
      }


      var pathParams = {
        'chineseSurnameLatin': chineseSurnameLatin,
        'chineseGivenNameLatin': chineseGivenNameLatin,
        'knownGender': knownGender
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
      var returnType = RomanizedNameOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the chineseNameMatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameMatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
     * @param {String} chineseSurnameLatin 
     * @param {String} chineseGivenNameLatin 
     * @param {String} chineseName 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameMatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/RomanizedNameOut}
     */
    this.chineseNameMatch = function(chineseSurnameLatin, chineseGivenNameLatin, chineseName, callback) {
      var postBody = null;

      // verify the required parameter 'chineseSurnameLatin' is set
      if (chineseSurnameLatin === undefined || chineseSurnameLatin === null) {
        throw new Error("Missing the required parameter 'chineseSurnameLatin' when calling chineseNameMatch");
      }

      // verify the required parameter 'chineseGivenNameLatin' is set
      if (chineseGivenNameLatin === undefined || chineseGivenNameLatin === null) {
        throw new Error("Missing the required parameter 'chineseGivenNameLatin' when calling chineseNameMatch");
      }

      // verify the required parameter 'chineseName' is set
      if (chineseName === undefined || chineseName === null) {
        throw new Error("Missing the required parameter 'chineseName' when calling chineseNameMatch");
      }


      var pathParams = {
        'chineseSurnameLatin': chineseSurnameLatin,
        'chineseGivenNameLatin': chineseGivenNameLatin,
        'chineseName': chineseName
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
      var returnType = RomanizedNameOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the chineseNameMatchBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameMatchBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname), ex. Wang Xiaoming
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} opts.batchFirstLastNameIn A list of personal Chinese names in LATIN, firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~chineseNameMatchBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchNameMatchCandidatesOut}
     */
    this.chineseNameMatchBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNameIn'];


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
      var returnType = BatchNameMatchCandidatesOut;

      return this.apiClient.callApi(
        '/api2/json/chineseNameMatchBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the genderChineseName operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNameCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameGenderedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely gender of a Chinese full name ex. 王晓明
     * @param {String} chineseName 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameGenderedOut}
     */
    this.genderChineseName = function(chineseName, callback) {
      var postBody = null;

      // verify the required parameter 'chineseName' is set
      if (chineseName === undefined || chineseName === null) {
        throw new Error("Missing the required parameter 'chineseName' when calling genderChineseName");
      }


      var pathParams = {
        'chineseName': chineseName
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
      var returnType = PersonalNameGenderedOut;

      return this.apiClient.callApi(
        '/api2/json/genderChineseName/{chineseName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the genderChineseNameBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNameBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameGenderedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely gender of up to 100 full names ex. 王晓明
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameIn} opts.batchPersonalNameIn A list of personal names, with a country ISO2 code
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNameBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameGenderedOut}
     */
    this.genderChineseNameBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchPersonalNameIn'];


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
      var returnType = BatchPersonalNameGenderedOut;

      return this.apiClient.callApi(
        '/api2/json/genderChineseNameBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the genderChineseNamePinyin operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNamePinyinCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely gender of a Chinese name in LATIN (Pinyin).
     * @param {String} chineseSurnameLatin 
     * @param {String} chineseGivenNameLatin 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNamePinyinCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/FirstLastNameGenderedOut}
     */
    this.genderChineseNamePinyin = function(chineseSurnameLatin, chineseGivenNameLatin, callback) {
      var postBody = null;

      // verify the required parameter 'chineseSurnameLatin' is set
      if (chineseSurnameLatin === undefined || chineseSurnameLatin === null) {
        throw new Error("Missing the required parameter 'chineseSurnameLatin' when calling genderChineseNamePinyin");
      }

      // verify the required parameter 'chineseGivenNameLatin' is set
      if (chineseGivenNameLatin === undefined || chineseGivenNameLatin === null) {
        throw new Error("Missing the required parameter 'chineseGivenNameLatin' when calling genderChineseNamePinyin");
      }


      var pathParams = {
        'chineseSurnameLatin': chineseSurnameLatin,
        'chineseGivenNameLatin': chineseGivenNameLatin
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
      var returnType = FirstLastNameGenderedOut;

      return this.apiClient.callApi(
        '/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the genderChineseNamePinyinBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNamePinyinBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameGenderedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameIn} opts.batchFirstLastNameIn A list of names, with country code.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~genderChineseNamePinyinBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchFirstLastNameGenderedOut}
     */
    this.genderChineseNamePinyinBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchFirstLastNameIn'];


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
      var returnType = BatchFirstLastNameGenderedOut;

      return this.apiClient.callApi(
        '/api2/json/genderChineseNamePinyinBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parseChineseName operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~parseChineseNameCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameParsedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name)
     * @param {String} chineseName 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~parseChineseNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameParsedOut}
     */
    this.parseChineseName = function(chineseName, callback) {
      var postBody = null;

      // verify the required parameter 'chineseName' is set
      if (chineseName === undefined || chineseName === null) {
        throw new Error("Missing the required parameter 'chineseName' when calling parseChineseName");
      }


      var pathParams = {
        'chineseName': chineseName
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
      var returnType = PersonalNameParsedOut;

      return this.apiClient.callApi(
        '/api2/json/parseChineseName/{chineseName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parseChineseNameBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~parseChineseNameBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameParsedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name).
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameIn} opts.batchPersonalNameIn A list of personal names
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~parseChineseNameBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameParsedOut}
     */
    this.parseChineseNameBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchPersonalNameIn'];


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
      var returnType = BatchPersonalNameParsedOut;

      return this.apiClient.callApi(
        '/api2/json/parseChineseNameBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinyinChineseName operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~pinyinChineseNameCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameParsedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Romanize the Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name)
     * @param {String} chineseName 
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~pinyinChineseNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/PersonalNameParsedOut}
     */
    this.pinyinChineseName = function(chineseName, callback) {
      var postBody = null;

      // verify the required parameter 'chineseName' is set
      if (chineseName === undefined || chineseName === null) {
        throw new Error("Missing the required parameter 'chineseName' when calling pinyinChineseName");
      }


      var pathParams = {
        'chineseName': chineseName
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
      var returnType = PersonalNameParsedOut;

      return this.apiClient.callApi(
        '/api2/json/pinyinChineseName/{chineseName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pinyinChineseNameBatch operation.
     * @callback module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~pinyinChineseNameBatchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameParsedOut} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Romanize a list of Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name).
     * @param {Object} opts Optional parameters
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameIn} opts.batchPersonalNameIn A list of Chinese names
     * @param {module:com.namsor.sdk2.invoke/com.namsor.sdk2.api/ChineseApi~pinyinChineseNameBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.namsor.sdk2.invoke/com.namsor.sdk2.model/BatchPersonalNameParsedOut}
     */
    this.pinyinChineseNameBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batchPersonalNameIn'];


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
      var returnType = BatchPersonalNameParsedOut;

      return this.apiClient.callApi(
        '/api2/json/pinyinChineseNameBatch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));