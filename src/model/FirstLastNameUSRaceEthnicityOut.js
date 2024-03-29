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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NamSorApiV2) {
      root.NamSorApiV2 = {};
    }
    root.NamSorApiV2.FirstLastNameUSRaceEthnicityOut = factory(root.NamSorApiV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FirstLastNameUSRaceEthnicityOut model module.
   * @module model/FirstLastNameUSRaceEthnicityOut
   * @version 2.0.15
   */

  /**
   * Constructs a new <code>FirstLastNameUSRaceEthnicityOut</code>.
   * Represents the output of inferring the LIKELY US &#39;race/ethnicity&#39; from a personal name, given US country of residence and (optionally) a ZIP5 code.
   * @alias module:model/FirstLastNameUSRaceEthnicityOut
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FirstLastNameUSRaceEthnicityOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirstLastNameUSRaceEthnicityOut} obj Optional instance to populate.
   * @return {module:model/FirstLastNameUSRaceEthnicityOut} The populated <code>FirstLastNameUSRaceEthnicityOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('script')) {
        obj['script'] = ApiClient.convertToType(data['script'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('raceEthnicityAlt')) {
        obj['raceEthnicityAlt'] = ApiClient.convertToType(data['raceEthnicityAlt'], 'String');
      }
      if (data.hasOwnProperty('raceEthnicity')) {
        obj['raceEthnicity'] = ApiClient.convertToType(data['raceEthnicity'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('raceEthnicitiesTop')) {
        obj['raceEthnicitiesTop'] = ApiClient.convertToType(data['raceEthnicitiesTop'], ['String']);
      }
      if (data.hasOwnProperty('probabilityCalibrated')) {
        obj['probabilityCalibrated'] = ApiClient.convertToType(data['probabilityCalibrated'], 'Number');
      }
      if (data.hasOwnProperty('probabilityAltCalibrated')) {
        obj['probabilityAltCalibrated'] = ApiClient.convertToType(data['probabilityAltCalibrated'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} script
   */
  exports.prototype['script'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The first name (also known as given name)
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The last name (also known as family name, or surname)
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Second most likely US 'race'/ethnicity
   * @member {module:model/FirstLastNameUSRaceEthnicityOut.RaceEthnicityAltEnum} raceEthnicityAlt
   */
  exports.prototype['raceEthnicityAlt'] = undefined;
  /**
   * Most likely US 'race'/ethnicity
   * @member {module:model/FirstLastNameUSRaceEthnicityOut.RaceEthnicityEnum} raceEthnicity
   */
  exports.prototype['raceEthnicity'] = undefined;
  /**
   * Higher score is better, but score is not normalized. Use calibratedProbability if available. 
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * List 'race'/ethnicities
   * @member {Array.<String>} raceEthnicitiesTop
   */
  exports.prototype['raceEthnicitiesTop'] = undefined;
  /**
   * The calibrated probability for raceEthnicity to have been guessed correctly.
   * @member {Number} probabilityCalibrated
   */
  exports.prototype['probabilityCalibrated'] = undefined;
  /**
   * The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly.
   * @member {Number} probabilityAltCalibrated
   */
  exports.prototype['probabilityAltCalibrated'] = undefined;


  /**
   * Allowed values for the <code>raceEthnicityAlt</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RaceEthnicityAltEnum = {
    /**
     * value: "W_NL"
     * @const
     */
    "W_NL": "W_NL",
    /**
     * value: "HL"
     * @const
     */
    "HL": "HL",
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "B_NL"
     * @const
     */
    "B_NL": "B_NL",
    /**
     * value: "AI_AN"
     * @const
     */
    "AI_AN": "AI_AN",
    /**
     * value: "PI"
     * @const
     */
    "PI": "PI"  };

  /**
   * Allowed values for the <code>raceEthnicity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RaceEthnicityEnum = {
    /**
     * value: "W_NL"
     * @const
     */
    "W_NL": "W_NL",
    /**
     * value: "HL"
     * @const
     */
    "HL": "HL",
    /**
     * value: "A"
     * @const
     */
    "A": "A",
    /**
     * value: "B_NL"
     * @const
     */
    "B_NL": "B_NL",
    /**
     * value: "AI_AN"
     * @const
     */
    "AI_AN": "AI_AN",
    /**
     * value: "PI"
     * @const
     */
    "PI": "PI"  };


  return exports;
}));


