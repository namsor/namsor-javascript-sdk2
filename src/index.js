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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APIBillingPeriodUsageOut', 'model/APIClassifierOut', 'model/APIClassifierTaxonomyOut', 'model/APIClassifiersStatusOut', 'model/APICounterV2Out', 'model/APIKeyOut', 'model/APIPeriodUsageOut', 'model/APIPlanOut', 'model/APIPlanSubscriptionOut', 'model/APIPlansOut', 'model/APIServiceOut', 'model/APIServicesOut', 'model/APIUsageAggregatedOut', 'model/BatchCorridorIn', 'model/BatchCorridorOut', 'model/BatchFirstLastNameDiasporaedOut', 'model/BatchFirstLastNameGenderIn', 'model/BatchFirstLastNameGenderedOut', 'model/BatchFirstLastNameGeoIn', 'model/BatchFirstLastNameGeoZippedIn', 'model/BatchFirstLastNameIn', 'model/BatchFirstLastNameOriginedOut', 'model/BatchFirstLastNamePhoneCodedOut', 'model/BatchFirstLastNamePhoneNumberGeoIn', 'model/BatchFirstLastNamePhoneNumberIn', 'model/BatchFirstLastNameUSRaceEthnicityOut', 'model/BatchMatchPersonalFirstLastNameIn', 'model/BatchNameGeoIn', 'model/BatchNameIn', 'model/BatchNameMatchCandidatesOut', 'model/BatchNameMatchedOut', 'model/BatchParsedFullNameGeoIn', 'model/BatchParsedFullNameIn', 'model/BatchPersonalNameGenderedOut', 'model/BatchPersonalNameGeoIn', 'model/BatchPersonalNameGeoOut', 'model/BatchPersonalNameIn', 'model/BatchPersonalNameParsedOut', 'model/BatchProperNounCategorizedOut', 'model/BillingHistoryOut', 'model/BillingInfoInOut', 'model/CacheMetricsOut', 'model/ClassifierMetricsOut', 'model/CorridorIn', 'model/CorridorOut', 'model/CurrenciesOut', 'model/ExpectedClassMetricsOut', 'model/FeedbackLoopOut', 'model/FirstLastNameDiasporaedOut', 'model/FirstLastNameGenderIn', 'model/FirstLastNameGenderedOut', 'model/FirstLastNameGeoIn', 'model/FirstLastNameGeoZippedIn', 'model/FirstLastNameIn', 'model/FirstLastNameOriginedOut', 'model/FirstLastNameOut', 'model/FirstLastNamePhoneCodedOut', 'model/FirstLastNamePhoneNumberGeoIn', 'model/FirstLastNamePhoneNumberIn', 'model/FirstLastNameUSRaceEthnicityOut', 'model/InlineObject', 'model/InvoiceItemOut', 'model/InvoiceOut', 'model/MatchPersonalFirstLastNameIn', 'model/NamSorCounterOut', 'model/NameGeoIn', 'model/NameIn', 'model/NameMatchCandidateOut', 'model/NameMatchCandidatesOut', 'model/NameMatchedOut', 'model/ParsedFullNameGeoIn', 'model/ParsedFullNameIn', 'model/PersonalNameGenderedOut', 'model/PersonalNameGeoIn', 'model/PersonalNameGeoOut', 'model/PersonalNameIn', 'model/PersonalNameParsedOut', 'model/ProperNounCategorizedOut', 'model/RomanizedNameOut', 'model/SoftwareVersionOut', 'model/SourceDetailedMetricsOut', 'model/SourceMetricsOut', 'model/StripeCardOut', 'model/StripeCustomerOut', 'model/SystemMetricsOut', 'model/UserInfoOut', 'api/AdminApi', 'api/ChineseApi', 'api/GeneralApi', 'api/JapaneseApi', 'api/PersonalApi', 'api/SocialApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/APIBillingPeriodUsageOut'), require('./model/APIClassifierOut'), require('./model/APIClassifierTaxonomyOut'), require('./model/APIClassifiersStatusOut'), require('./model/APICounterV2Out'), require('./model/APIKeyOut'), require('./model/APIPeriodUsageOut'), require('./model/APIPlanOut'), require('./model/APIPlanSubscriptionOut'), require('./model/APIPlansOut'), require('./model/APIServiceOut'), require('./model/APIServicesOut'), require('./model/APIUsageAggregatedOut'), require('./model/BatchCorridorIn'), require('./model/BatchCorridorOut'), require('./model/BatchFirstLastNameDiasporaedOut'), require('./model/BatchFirstLastNameGenderIn'), require('./model/BatchFirstLastNameGenderedOut'), require('./model/BatchFirstLastNameGeoIn'), require('./model/BatchFirstLastNameGeoZippedIn'), require('./model/BatchFirstLastNameIn'), require('./model/BatchFirstLastNameOriginedOut'), require('./model/BatchFirstLastNamePhoneCodedOut'), require('./model/BatchFirstLastNamePhoneNumberGeoIn'), require('./model/BatchFirstLastNamePhoneNumberIn'), require('./model/BatchFirstLastNameUSRaceEthnicityOut'), require('./model/BatchMatchPersonalFirstLastNameIn'), require('./model/BatchNameGeoIn'), require('./model/BatchNameIn'), require('./model/BatchNameMatchCandidatesOut'), require('./model/BatchNameMatchedOut'), require('./model/BatchParsedFullNameGeoIn'), require('./model/BatchParsedFullNameIn'), require('./model/BatchPersonalNameGenderedOut'), require('./model/BatchPersonalNameGeoIn'), require('./model/BatchPersonalNameGeoOut'), require('./model/BatchPersonalNameIn'), require('./model/BatchPersonalNameParsedOut'), require('./model/BatchProperNounCategorizedOut'), require('./model/BillingHistoryOut'), require('./model/BillingInfoInOut'), require('./model/CacheMetricsOut'), require('./model/ClassifierMetricsOut'), require('./model/CorridorIn'), require('./model/CorridorOut'), require('./model/CurrenciesOut'), require('./model/ExpectedClassMetricsOut'), require('./model/FeedbackLoopOut'), require('./model/FirstLastNameDiasporaedOut'), require('./model/FirstLastNameGenderIn'), require('./model/FirstLastNameGenderedOut'), require('./model/FirstLastNameGeoIn'), require('./model/FirstLastNameGeoZippedIn'), require('./model/FirstLastNameIn'), require('./model/FirstLastNameOriginedOut'), require('./model/FirstLastNameOut'), require('./model/FirstLastNamePhoneCodedOut'), require('./model/FirstLastNamePhoneNumberGeoIn'), require('./model/FirstLastNamePhoneNumberIn'), require('./model/FirstLastNameUSRaceEthnicityOut'), require('./model/InlineObject'), require('./model/InvoiceItemOut'), require('./model/InvoiceOut'), require('./model/MatchPersonalFirstLastNameIn'), require('./model/NamSorCounterOut'), require('./model/NameGeoIn'), require('./model/NameIn'), require('./model/NameMatchCandidateOut'), require('./model/NameMatchCandidatesOut'), require('./model/NameMatchedOut'), require('./model/ParsedFullNameGeoIn'), require('./model/ParsedFullNameIn'), require('./model/PersonalNameGenderedOut'), require('./model/PersonalNameGeoIn'), require('./model/PersonalNameGeoOut'), require('./model/PersonalNameIn'), require('./model/PersonalNameParsedOut'), require('./model/ProperNounCategorizedOut'), require('./model/RomanizedNameOut'), require('./model/SoftwareVersionOut'), require('./model/SourceDetailedMetricsOut'), require('./model/SourceMetricsOut'), require('./model/StripeCardOut'), require('./model/StripeCustomerOut'), require('./model/SystemMetricsOut'), require('./model/UserInfoOut'), require('./api/AdminApi'), require('./api/ChineseApi'), require('./api/GeneralApi'), require('./api/JapaneseApi'), require('./api/PersonalApi'), require('./api/SocialApi'));
  }
}(function(ApiClient, APIBillingPeriodUsageOut, APIClassifierOut, APIClassifierTaxonomyOut, APIClassifiersStatusOut, APICounterV2Out, APIKeyOut, APIPeriodUsageOut, APIPlanOut, APIPlanSubscriptionOut, APIPlansOut, APIServiceOut, APIServicesOut, APIUsageAggregatedOut, BatchCorridorIn, BatchCorridorOut, BatchFirstLastNameDiasporaedOut, BatchFirstLastNameGenderIn, BatchFirstLastNameGenderedOut, BatchFirstLastNameGeoIn, BatchFirstLastNameGeoZippedIn, BatchFirstLastNameIn, BatchFirstLastNameOriginedOut, BatchFirstLastNamePhoneCodedOut, BatchFirstLastNamePhoneNumberGeoIn, BatchFirstLastNamePhoneNumberIn, BatchFirstLastNameUSRaceEthnicityOut, BatchMatchPersonalFirstLastNameIn, BatchNameGeoIn, BatchNameIn, BatchNameMatchCandidatesOut, BatchNameMatchedOut, BatchParsedFullNameGeoIn, BatchParsedFullNameIn, BatchPersonalNameGenderedOut, BatchPersonalNameGeoIn, BatchPersonalNameGeoOut, BatchPersonalNameIn, BatchPersonalNameParsedOut, BatchProperNounCategorizedOut, BillingHistoryOut, BillingInfoInOut, CacheMetricsOut, ClassifierMetricsOut, CorridorIn, CorridorOut, CurrenciesOut, ExpectedClassMetricsOut, FeedbackLoopOut, FirstLastNameDiasporaedOut, FirstLastNameGenderIn, FirstLastNameGenderedOut, FirstLastNameGeoIn, FirstLastNameGeoZippedIn, FirstLastNameIn, FirstLastNameOriginedOut, FirstLastNameOut, FirstLastNamePhoneCodedOut, FirstLastNamePhoneNumberGeoIn, FirstLastNamePhoneNumberIn, FirstLastNameUSRaceEthnicityOut, InlineObject, InvoiceItemOut, InvoiceOut, MatchPersonalFirstLastNameIn, NamSorCounterOut, NameGeoIn, NameIn, NameMatchCandidateOut, NameMatchCandidatesOut, NameMatchedOut, ParsedFullNameGeoIn, ParsedFullNameIn, PersonalNameGenderedOut, PersonalNameGeoIn, PersonalNameGeoOut, PersonalNameIn, PersonalNameParsedOut, ProperNounCategorizedOut, RomanizedNameOut, SoftwareVersionOut, SourceDetailedMetricsOut, SourceMetricsOut, StripeCardOut, StripeCustomerOut, SystemMetricsOut, UserInfoOut, AdminApi, ChineseApi, GeneralApi, JapaneseApi, PersonalApi, SocialApi) {
  'use strict';

  /**
   * NamSor_API_v2__enpoints_to_process_personal_names__gender_cultural_origin_or_ethnicity_in_all_alphabets_or_languages__Use_GET_methods_for_small_tests_but_prefer_POST_methods_for_higher_throughput__batch_processing_of_up_to_100_names_at_a_time__Need_something_you_cant_find_here_We_have_many_more_features_coming_soon__Let_us_know_well_do_our_best_to_add_it_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var NamSorApiV2 = require('index'); // See note below*.
   * var xxxSvc = new NamSorApiV2.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new NamSorApiV2.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new NamSorApiV2.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new NamSorApiV2.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.13
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APIBillingPeriodUsageOut model constructor.
     * @property {module:model/APIBillingPeriodUsageOut}
     */
    APIBillingPeriodUsageOut: APIBillingPeriodUsageOut,
    /**
     * The APIClassifierOut model constructor.
     * @property {module:model/APIClassifierOut}
     */
    APIClassifierOut: APIClassifierOut,
    /**
     * The APIClassifierTaxonomyOut model constructor.
     * @property {module:model/APIClassifierTaxonomyOut}
     */
    APIClassifierTaxonomyOut: APIClassifierTaxonomyOut,
    /**
     * The APIClassifiersStatusOut model constructor.
     * @property {module:model/APIClassifiersStatusOut}
     */
    APIClassifiersStatusOut: APIClassifiersStatusOut,
    /**
     * The APICounterV2Out model constructor.
     * @property {module:model/APICounterV2Out}
     */
    APICounterV2Out: APICounterV2Out,
    /**
     * The APIKeyOut model constructor.
     * @property {module:model/APIKeyOut}
     */
    APIKeyOut: APIKeyOut,
    /**
     * The APIPeriodUsageOut model constructor.
     * @property {module:model/APIPeriodUsageOut}
     */
    APIPeriodUsageOut: APIPeriodUsageOut,
    /**
     * The APIPlanOut model constructor.
     * @property {module:model/APIPlanOut}
     */
    APIPlanOut: APIPlanOut,
    /**
     * The APIPlanSubscriptionOut model constructor.
     * @property {module:model/APIPlanSubscriptionOut}
     */
    APIPlanSubscriptionOut: APIPlanSubscriptionOut,
    /**
     * The APIPlansOut model constructor.
     * @property {module:model/APIPlansOut}
     */
    APIPlansOut: APIPlansOut,
    /**
     * The APIServiceOut model constructor.
     * @property {module:model/APIServiceOut}
     */
    APIServiceOut: APIServiceOut,
    /**
     * The APIServicesOut model constructor.
     * @property {module:model/APIServicesOut}
     */
    APIServicesOut: APIServicesOut,
    /**
     * The APIUsageAggregatedOut model constructor.
     * @property {module:model/APIUsageAggregatedOut}
     */
    APIUsageAggregatedOut: APIUsageAggregatedOut,
    /**
     * The BatchCorridorIn model constructor.
     * @property {module:model/BatchCorridorIn}
     */
    BatchCorridorIn: BatchCorridorIn,
    /**
     * The BatchCorridorOut model constructor.
     * @property {module:model/BatchCorridorOut}
     */
    BatchCorridorOut: BatchCorridorOut,
    /**
     * The BatchFirstLastNameDiasporaedOut model constructor.
     * @property {module:model/BatchFirstLastNameDiasporaedOut}
     */
    BatchFirstLastNameDiasporaedOut: BatchFirstLastNameDiasporaedOut,
    /**
     * The BatchFirstLastNameGenderIn model constructor.
     * @property {module:model/BatchFirstLastNameGenderIn}
     */
    BatchFirstLastNameGenderIn: BatchFirstLastNameGenderIn,
    /**
     * The BatchFirstLastNameGenderedOut model constructor.
     * @property {module:model/BatchFirstLastNameGenderedOut}
     */
    BatchFirstLastNameGenderedOut: BatchFirstLastNameGenderedOut,
    /**
     * The BatchFirstLastNameGeoIn model constructor.
     * @property {module:model/BatchFirstLastNameGeoIn}
     */
    BatchFirstLastNameGeoIn: BatchFirstLastNameGeoIn,
    /**
     * The BatchFirstLastNameGeoZippedIn model constructor.
     * @property {module:model/BatchFirstLastNameGeoZippedIn}
     */
    BatchFirstLastNameGeoZippedIn: BatchFirstLastNameGeoZippedIn,
    /**
     * The BatchFirstLastNameIn model constructor.
     * @property {module:model/BatchFirstLastNameIn}
     */
    BatchFirstLastNameIn: BatchFirstLastNameIn,
    /**
     * The BatchFirstLastNameOriginedOut model constructor.
     * @property {module:model/BatchFirstLastNameOriginedOut}
     */
    BatchFirstLastNameOriginedOut: BatchFirstLastNameOriginedOut,
    /**
     * The BatchFirstLastNamePhoneCodedOut model constructor.
     * @property {module:model/BatchFirstLastNamePhoneCodedOut}
     */
    BatchFirstLastNamePhoneCodedOut: BatchFirstLastNamePhoneCodedOut,
    /**
     * The BatchFirstLastNamePhoneNumberGeoIn model constructor.
     * @property {module:model/BatchFirstLastNamePhoneNumberGeoIn}
     */
    BatchFirstLastNamePhoneNumberGeoIn: BatchFirstLastNamePhoneNumberGeoIn,
    /**
     * The BatchFirstLastNamePhoneNumberIn model constructor.
     * @property {module:model/BatchFirstLastNamePhoneNumberIn}
     */
    BatchFirstLastNamePhoneNumberIn: BatchFirstLastNamePhoneNumberIn,
    /**
     * The BatchFirstLastNameUSRaceEthnicityOut model constructor.
     * @property {module:model/BatchFirstLastNameUSRaceEthnicityOut}
     */
    BatchFirstLastNameUSRaceEthnicityOut: BatchFirstLastNameUSRaceEthnicityOut,
    /**
     * The BatchMatchPersonalFirstLastNameIn model constructor.
     * @property {module:model/BatchMatchPersonalFirstLastNameIn}
     */
    BatchMatchPersonalFirstLastNameIn: BatchMatchPersonalFirstLastNameIn,
    /**
     * The BatchNameGeoIn model constructor.
     * @property {module:model/BatchNameGeoIn}
     */
    BatchNameGeoIn: BatchNameGeoIn,
    /**
     * The BatchNameIn model constructor.
     * @property {module:model/BatchNameIn}
     */
    BatchNameIn: BatchNameIn,
    /**
     * The BatchNameMatchCandidatesOut model constructor.
     * @property {module:model/BatchNameMatchCandidatesOut}
     */
    BatchNameMatchCandidatesOut: BatchNameMatchCandidatesOut,
    /**
     * The BatchNameMatchedOut model constructor.
     * @property {module:model/BatchNameMatchedOut}
     */
    BatchNameMatchedOut: BatchNameMatchedOut,
    /**
     * The BatchParsedFullNameGeoIn model constructor.
     * @property {module:model/BatchParsedFullNameGeoIn}
     */
    BatchParsedFullNameGeoIn: BatchParsedFullNameGeoIn,
    /**
     * The BatchParsedFullNameIn model constructor.
     * @property {module:model/BatchParsedFullNameIn}
     */
    BatchParsedFullNameIn: BatchParsedFullNameIn,
    /**
     * The BatchPersonalNameGenderedOut model constructor.
     * @property {module:model/BatchPersonalNameGenderedOut}
     */
    BatchPersonalNameGenderedOut: BatchPersonalNameGenderedOut,
    /**
     * The BatchPersonalNameGeoIn model constructor.
     * @property {module:model/BatchPersonalNameGeoIn}
     */
    BatchPersonalNameGeoIn: BatchPersonalNameGeoIn,
    /**
     * The BatchPersonalNameGeoOut model constructor.
     * @property {module:model/BatchPersonalNameGeoOut}
     */
    BatchPersonalNameGeoOut: BatchPersonalNameGeoOut,
    /**
     * The BatchPersonalNameIn model constructor.
     * @property {module:model/BatchPersonalNameIn}
     */
    BatchPersonalNameIn: BatchPersonalNameIn,
    /**
     * The BatchPersonalNameParsedOut model constructor.
     * @property {module:model/BatchPersonalNameParsedOut}
     */
    BatchPersonalNameParsedOut: BatchPersonalNameParsedOut,
    /**
     * The BatchProperNounCategorizedOut model constructor.
     * @property {module:model/BatchProperNounCategorizedOut}
     */
    BatchProperNounCategorizedOut: BatchProperNounCategorizedOut,
    /**
     * The BillingHistoryOut model constructor.
     * @property {module:model/BillingHistoryOut}
     */
    BillingHistoryOut: BillingHistoryOut,
    /**
     * The BillingInfoInOut model constructor.
     * @property {module:model/BillingInfoInOut}
     */
    BillingInfoInOut: BillingInfoInOut,
    /**
     * The CacheMetricsOut model constructor.
     * @property {module:model/CacheMetricsOut}
     */
    CacheMetricsOut: CacheMetricsOut,
    /**
     * The ClassifierMetricsOut model constructor.
     * @property {module:model/ClassifierMetricsOut}
     */
    ClassifierMetricsOut: ClassifierMetricsOut,
    /**
     * The CorridorIn model constructor.
     * @property {module:model/CorridorIn}
     */
    CorridorIn: CorridorIn,
    /**
     * The CorridorOut model constructor.
     * @property {module:model/CorridorOut}
     */
    CorridorOut: CorridorOut,
    /**
     * The CurrenciesOut model constructor.
     * @property {module:model/CurrenciesOut}
     */
    CurrenciesOut: CurrenciesOut,
    /**
     * The ExpectedClassMetricsOut model constructor.
     * @property {module:model/ExpectedClassMetricsOut}
     */
    ExpectedClassMetricsOut: ExpectedClassMetricsOut,
    /**
     * The FeedbackLoopOut model constructor.
     * @property {module:model/FeedbackLoopOut}
     */
    FeedbackLoopOut: FeedbackLoopOut,
    /**
     * The FirstLastNameDiasporaedOut model constructor.
     * @property {module:model/FirstLastNameDiasporaedOut}
     */
    FirstLastNameDiasporaedOut: FirstLastNameDiasporaedOut,
    /**
     * The FirstLastNameGenderIn model constructor.
     * @property {module:model/FirstLastNameGenderIn}
     */
    FirstLastNameGenderIn: FirstLastNameGenderIn,
    /**
     * The FirstLastNameGenderedOut model constructor.
     * @property {module:model/FirstLastNameGenderedOut}
     */
    FirstLastNameGenderedOut: FirstLastNameGenderedOut,
    /**
     * The FirstLastNameGeoIn model constructor.
     * @property {module:model/FirstLastNameGeoIn}
     */
    FirstLastNameGeoIn: FirstLastNameGeoIn,
    /**
     * The FirstLastNameGeoZippedIn model constructor.
     * @property {module:model/FirstLastNameGeoZippedIn}
     */
    FirstLastNameGeoZippedIn: FirstLastNameGeoZippedIn,
    /**
     * The FirstLastNameIn model constructor.
     * @property {module:model/FirstLastNameIn}
     */
    FirstLastNameIn: FirstLastNameIn,
    /**
     * The FirstLastNameOriginedOut model constructor.
     * @property {module:model/FirstLastNameOriginedOut}
     */
    FirstLastNameOriginedOut: FirstLastNameOriginedOut,
    /**
     * The FirstLastNameOut model constructor.
     * @property {module:model/FirstLastNameOut}
     */
    FirstLastNameOut: FirstLastNameOut,
    /**
     * The FirstLastNamePhoneCodedOut model constructor.
     * @property {module:model/FirstLastNamePhoneCodedOut}
     */
    FirstLastNamePhoneCodedOut: FirstLastNamePhoneCodedOut,
    /**
     * The FirstLastNamePhoneNumberGeoIn model constructor.
     * @property {module:model/FirstLastNamePhoneNumberGeoIn}
     */
    FirstLastNamePhoneNumberGeoIn: FirstLastNamePhoneNumberGeoIn,
    /**
     * The FirstLastNamePhoneNumberIn model constructor.
     * @property {module:model/FirstLastNamePhoneNumberIn}
     */
    FirstLastNamePhoneNumberIn: FirstLastNamePhoneNumberIn,
    /**
     * The FirstLastNameUSRaceEthnicityOut model constructor.
     * @property {module:model/FirstLastNameUSRaceEthnicityOut}
     */
    FirstLastNameUSRaceEthnicityOut: FirstLastNameUSRaceEthnicityOut,
    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject: InlineObject,
    /**
     * The InvoiceItemOut model constructor.
     * @property {module:model/InvoiceItemOut}
     */
    InvoiceItemOut: InvoiceItemOut,
    /**
     * The InvoiceOut model constructor.
     * @property {module:model/InvoiceOut}
     */
    InvoiceOut: InvoiceOut,
    /**
     * The MatchPersonalFirstLastNameIn model constructor.
     * @property {module:model/MatchPersonalFirstLastNameIn}
     */
    MatchPersonalFirstLastNameIn: MatchPersonalFirstLastNameIn,
    /**
     * The NamSorCounterOut model constructor.
     * @property {module:model/NamSorCounterOut}
     */
    NamSorCounterOut: NamSorCounterOut,
    /**
     * The NameGeoIn model constructor.
     * @property {module:model/NameGeoIn}
     */
    NameGeoIn: NameGeoIn,
    /**
     * The NameIn model constructor.
     * @property {module:model/NameIn}
     */
    NameIn: NameIn,
    /**
     * The NameMatchCandidateOut model constructor.
     * @property {module:model/NameMatchCandidateOut}
     */
    NameMatchCandidateOut: NameMatchCandidateOut,
    /**
     * The NameMatchCandidatesOut model constructor.
     * @property {module:model/NameMatchCandidatesOut}
     */
    NameMatchCandidatesOut: NameMatchCandidatesOut,
    /**
     * The NameMatchedOut model constructor.
     * @property {module:model/NameMatchedOut}
     */
    NameMatchedOut: NameMatchedOut,
    /**
     * The ParsedFullNameGeoIn model constructor.
     * @property {module:model/ParsedFullNameGeoIn}
     */
    ParsedFullNameGeoIn: ParsedFullNameGeoIn,
    /**
     * The ParsedFullNameIn model constructor.
     * @property {module:model/ParsedFullNameIn}
     */
    ParsedFullNameIn: ParsedFullNameIn,
    /**
     * The PersonalNameGenderedOut model constructor.
     * @property {module:model/PersonalNameGenderedOut}
     */
    PersonalNameGenderedOut: PersonalNameGenderedOut,
    /**
     * The PersonalNameGeoIn model constructor.
     * @property {module:model/PersonalNameGeoIn}
     */
    PersonalNameGeoIn: PersonalNameGeoIn,
    /**
     * The PersonalNameGeoOut model constructor.
     * @property {module:model/PersonalNameGeoOut}
     */
    PersonalNameGeoOut: PersonalNameGeoOut,
    /**
     * The PersonalNameIn model constructor.
     * @property {module:model/PersonalNameIn}
     */
    PersonalNameIn: PersonalNameIn,
    /**
     * The PersonalNameParsedOut model constructor.
     * @property {module:model/PersonalNameParsedOut}
     */
    PersonalNameParsedOut: PersonalNameParsedOut,
    /**
     * The ProperNounCategorizedOut model constructor.
     * @property {module:model/ProperNounCategorizedOut}
     */
    ProperNounCategorizedOut: ProperNounCategorizedOut,
    /**
     * The RomanizedNameOut model constructor.
     * @property {module:model/RomanizedNameOut}
     */
    RomanizedNameOut: RomanizedNameOut,
    /**
     * The SoftwareVersionOut model constructor.
     * @property {module:model/SoftwareVersionOut}
     */
    SoftwareVersionOut: SoftwareVersionOut,
    /**
     * The SourceDetailedMetricsOut model constructor.
     * @property {module:model/SourceDetailedMetricsOut}
     */
    SourceDetailedMetricsOut: SourceDetailedMetricsOut,
    /**
     * The SourceMetricsOut model constructor.
     * @property {module:model/SourceMetricsOut}
     */
    SourceMetricsOut: SourceMetricsOut,
    /**
     * The StripeCardOut model constructor.
     * @property {module:model/StripeCardOut}
     */
    StripeCardOut: StripeCardOut,
    /**
     * The StripeCustomerOut model constructor.
     * @property {module:model/StripeCustomerOut}
     */
    StripeCustomerOut: StripeCustomerOut,
    /**
     * The SystemMetricsOut model constructor.
     * @property {module:model/SystemMetricsOut}
     */
    SystemMetricsOut: SystemMetricsOut,
    /**
     * The UserInfoOut model constructor.
     * @property {module:model/UserInfoOut}
     */
    UserInfoOut: UserInfoOut,
    /**
     * The AdminApi service constructor.
     * @property {module:api/AdminApi}
     */
    AdminApi: AdminApi,
    /**
     * The ChineseApi service constructor.
     * @property {module:api/ChineseApi}
     */
    ChineseApi: ChineseApi,
    /**
     * The GeneralApi service constructor.
     * @property {module:api/GeneralApi}
     */
    GeneralApi: GeneralApi,
    /**
     * The JapaneseApi service constructor.
     * @property {module:api/JapaneseApi}
     */
    JapaneseApi: JapaneseApi,
    /**
     * The PersonalApi service constructor.
     * @property {module:api/PersonalApi}
     */
    PersonalApi: PersonalApi,
    /**
     * The SocialApi service constructor.
     * @property {module:api/SocialApi}
     */
    SocialApi: SocialApi
  };

  return exports;
}));
