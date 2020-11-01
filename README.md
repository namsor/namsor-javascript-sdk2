# nam_sor_api_v2

NamSorApiV2 - JavaScript client for nam_sor_api_v2
NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.11
- Package version: 2.0.11
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://www.namsor.com/](http://www.namsor.com/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install nam_sor_api_v2 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your nam_sor_api_v2 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('nam_sor_api_v2')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/namsor/namsor-javascript-sdk2
then install it via:

```shell
    npm install namsor/namsor-javascript-sdk2 --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Infer the likely gender of a name, given a local context (ISO2 country code).

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var firstName = "firstName_example"; // String | 
var lastName = "lastName_example"; // String | 
var countryIso2 = "countryIso2_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderGeo(firstName, lastName, countryIso2, callback);

```

## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

## Documentation for API Endpoints

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NamSorApiV2.PersonalApi* | [**gender**](docs/PersonalApi.md#gender) | **GET** /api2/json/gender/{firstName}/{lastName} | Infer the likely gender of a name.
*NamSorApiV2.PersonalApi* | [**genderBatch**](docs/PersonalApi.md#genderBatch) | **POST** /api2/json/genderBatch | Infer the likely gender of up to 100 names, detecting automatically the cultural context.
*NamSorApiV2.PersonalApi* | [**genderFull**](docs/PersonalApi.md#genderFull) | **GET** /api2/json/genderFull/{fullName} | Infer the likely gender of a full name, ex. John H. Smith
*NamSorApiV2.PersonalApi* | [**genderFullBatch**](docs/PersonalApi.md#genderFullBatch) | **POST** /api2/json/genderFullBatch | Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
*NamSorApiV2.PersonalApi* | [**genderFullGeo**](docs/PersonalApi.md#genderFullGeo) | **GET** /api2/json/genderFullGeo/{fullName}/{countryIso2} | Infer the likely gender of a full name, given a local context (ISO2 country code).
*NamSorApiV2.PersonalApi* | [**genderFullGeoBatch**](docs/PersonalApi.md#genderFullGeoBatch) | **POST** /api2/json/genderFullGeoBatch | Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
*NamSorApiV2.PersonalApi* | [**genderGeo**](docs/PersonalApi.md#genderGeo) | **GET** /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2} | Infer the likely gender of a name, given a local context (ISO2 country code).
*NamSorApiV2.PersonalApi* | [**genderGeoBatch**](docs/PersonalApi.md#genderGeoBatch) | **POST** /api2/json/genderGeoBatch | Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
*NamSorApiV2.PersonalApi* | [**country**](docs/PersonalApi.md#country) | **GET** /api2/json/country/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
*NamSorApiV2.PersonalApi* | [**countryBatch**](docs/PersonalApi.md#countryBatch) | **POST** /api2/json/countryBatch | [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
*NamSorApiV2.PersonalApi* | [**origin**](docs/PersonalApi.md#origin) | **GET** /api2/json/origin/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use &#39;diaspora&#39; instead.
*NamSorApiV2.PersonalApi* | [**originBatch**](docs/PersonalApi.md#originBatch) | **POST** /api2/json/originBatch | [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
*NamSorApiV2.PersonalApi* | [**diaspora**](docs/PersonalApi.md#diaspora) | **GET** /api2/json/diaspora/{countryIso2}/{firstName}/{lastName} | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
*NamSorApiV2.PersonalApi* | [**diasporaBatch**](docs/PersonalApi.md#diasporaBatch) | **POST** /api2/json/diasporaBatch | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
*NamSorApiV2.PersonalApi* | [**usRaceEthnicity**](docs/PersonalApi.md#usRaceEthnicity) | **GET** /api2/json/usRaceEthnicity/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
*NamSorApiV2.PersonalApi* | [**usRaceEthnicityBatch**](docs/PersonalApi.md#usRaceEthnicityBatch) | **POST** /api2/json/usRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy.
*NamSorApiV2.PersonalApi* | [**usRaceEthnicityZIP5**](docs/PersonalApi.md#usRaceEthnicityZIP5) | **GET** /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).
*NamSorApiV2.PersonalApi* | [**usZipRaceEthnicityBatch**](docs/PersonalApi.md#usZipRaceEthnicityBatch) | **POST** /api2/json/usZipRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.
*NamSorApiV2.PersonalApi* | [**parseName**](docs/PersonalApi.md#parseName) | **GET** /api2/json/parseName/{nameFull} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
*NamSorApiV2.PersonalApi* | [**parseNameBatch**](docs/PersonalApi.md#parseNameBatch) | **POST** /api2/json/parseNameBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
*NamSorApiV2.PersonalApi* | [**parseNameGeo**](docs/PersonalApi.md#parseNameGeo) | **GET** /api2/json/parseName/{nameFull}/{countryIso2} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
*NamSorApiV2.PersonalApi* | [**parseNameGeoBatch**](docs/PersonalApi.md#parseNameGeoBatch) | **POST** /api2/json/parseNameGeoBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
*NamSorApiV2.PersonalApi* | [**parsedGenderBatch**](docs/PersonalApi.md#parsedGenderBatch) | **POST** /api2/json/parsedGenderBatch | Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.
*NamSorApiV2.PersonalApi* | [**parsedGenderGeoBatch**](docs/PersonalApi.md#parsedGenderGeoBatch) | **POST** /api2/json/parsedGenderGeoBatch | Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.
*NamSorApiV2.GeneralApi* | [**nameType**](docs/GeneralApi.md#nameType) | **GET** /api2/json/nameType/{properNoun} | Infer the likely type of a proper noun (personal name, brand name, place name etc.)
*NamSorApiV2.GeneralApi* | [**nameType1**](docs/GeneralApi.md#nameType1) | **GET** /api2/json/nameType/{properNoun}/{countryIso2} | Infer the likely type of a proper noun (personal name, brand name, place name etc.)
*NamSorApiV2.AdminApi* | [**apiUsage**](docs/AdminApi.md#apiUsage) | **GET** /api2/json/apiUsage | Print current API usage.
*NamSorApiV2.AdminApi* | [**apiUsageHistory**](docs/AdminApi.md#apiUsageHistory) | **GET** /api2/json/apiUsageHistory | Print historical API usage.
*NamSorApiV2.AdminApi* | [**apiUsageHistoryAggregate**](docs/AdminApi.md#apiUsageHistoryAggregate) | **GET** /api2/json/apiUsageHistoryAggregate | Print historical API usage (in an aggregated view, by service, by day/hour/min).
*NamSorApiV2.AdminApi* | [**softwareVersion**](docs/AdminApi.md#softwareVersion) | **GET** /api2/json/softwareVersion | Get the current software version
*NamSorApiV2.AdminApi* | [**addCredits**](docs/AdminApi.md#addCredits) | **GET** /api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage} | Add usage credits to an API Key.
*NamSorApiV2.AdminApi* | [**apiStatus**](docs/AdminApi.md#apiStatus) | **GET** /api2/json/apiStatus | Prints the current status of the classifiers.
*NamSorApiV2.AdminApi* | [**anonymize**](docs/AdminApi.md#anonymize) | **GET** /api2/json/anonymize/{source}/{anonymized} | Activate/deactivate anonymization for a source.
*NamSorApiV2.AdminApi* | [**availablePlans**](docs/AdminApi.md#availablePlans) | **GET** /api2/json/availablePlans/{token} | List all available plans in the user&#39;s preferred currency.
*NamSorApiV2.AdminApi* | [**availablePlans1**](docs/AdminApi.md#availablePlans1) | **GET** /api2/json/availablePlans | List all available plans in the default currency (usd).
*NamSorApiV2.AdminApi* | [**availableServices**](docs/AdminApi.md#availableServices) | **GET** /api2/json/apiServices | List of API services and usage cost in Units (default is 1&#x3D;ONE Unit).
*NamSorApiV2.AdminApi* | [**billingCurrencies**](docs/AdminApi.md#billingCurrencies) | **GET** /api2/json/billingCurrencies | List possible currency options for billing (USD, EUR, GBP, ...)
*NamSorApiV2.AdminApi* | [**billingHistory**](docs/AdminApi.md#billingHistory) | **GET** /api2/json/billingHistory/{token} | Read the history billing information (invoices paid via Stripe or manually).
*NamSorApiV2.AdminApi* | [**billingInfo**](docs/AdminApi.md#billingInfo) | **GET** /api2/json/billingInfo/{token} | Read the billing information (company name, address, phone, vat ID)
*NamSorApiV2.AdminApi* | [**charge**](docs/AdminApi.md#charge) | **POST** /api2/json/charge | Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.
*NamSorApiV2.AdminApi* | [**corporateKey**](docs/AdminApi.md#corporateKey) | **GET** /api2/json/corporateKey/{apiKey}/{corporate} | Setting an API Key to a corporate status.
*NamSorApiV2.AdminApi* | [**debugLevel**](docs/AdminApi.md#debugLevel) | **GET** /api2/json/debugLevel/{logger}/{level} | Update debug level for a classifier
*NamSorApiV2.AdminApi* | [**flush**](docs/AdminApi.md#flush) | **GET** /api2/json/flush | Flush counters.
*NamSorApiV2.AdminApi* | [**invalidateCache**](docs/AdminApi.md#invalidateCache) | **GET** /api2/json/invalidateCache | Invalidate system caches.
*NamSorApiV2.AdminApi* | [**learnable**](docs/AdminApi.md#learnable) | **GET** /api2/json/learnable/{source}/{learnable} | Activate/deactivate learning from a source.
*NamSorApiV2.AdminApi* | [**namsorCounter**](docs/AdminApi.md#namsorCounter) | **GET** /api2/json/namsorCounter | Get the overall API counter
*NamSorApiV2.AdminApi* | [**paymentInfo**](docs/AdminApi.md#paymentInfo) | **GET** /api2/json/paymentInfo/{token} | Get the Stripe payment information associated with the current google auth session token.
*NamSorApiV2.AdminApi* | [**procureKey**](docs/AdminApi.md#procureKey) | **GET** /api2/json/procureKey/{token} | Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.
*NamSorApiV2.AdminApi* | [**redeployUI**](docs/AdminApi.md#redeployUI) | **GET** /api2/json/redeployUI/{live} | Redeploy UI from current dev branch.
*NamSorApiV2.AdminApi* | [**redeployUI1**](docs/AdminApi.md#redeployUI1) | **GET** /api2/json/redeployUI | Redeploy UI from current dev branch.
*NamSorApiV2.AdminApi* | [**removeUserAccount**](docs/AdminApi.md#removeUserAccount) | **GET** /api2/json/removeUserAccount/{token} | Remove the user account.
*NamSorApiV2.AdminApi* | [**removeUserAccountOnBehalf**](docs/AdminApi.md#removeUserAccountOnBehalf) | **GET** /api2/json/removeUserAccountOnBehalf/{apiKey} | Remove (on behalf) a user account.
*NamSorApiV2.AdminApi* | [**shutdown**](docs/AdminApi.md#shutdown) | **GET** /api2/json/shutdown | Stop learning and shutdown system.
*NamSorApiV2.AdminApi* | [**sourceStats**](docs/AdminApi.md#sourceStats) | **GET** /api2/json/sourceStats/{source} | Print basic source statistics.
*NamSorApiV2.AdminApi* | [**stats**](docs/AdminApi.md#stats) | **GET** /api2/json/stats | Print basic system statistics.
*NamSorApiV2.AdminApi* | [**stripeConnect**](docs/AdminApi.md#stripeConnect) | **GET** /api2/json/stripeConnect | Connects a Stripe Account.
*NamSorApiV2.AdminApi* | [**subscribePlan**](docs/AdminApi.md#subscribePlan) | **GET** /api2/json/subscribePlan/{planName}/{token} | Subscribe to a give API plan, using the user&#39;s preferred or default currency.
*NamSorApiV2.AdminApi* | [**subscribePlanOnBehalf**](docs/AdminApi.md#subscribePlanOnBehalf) | **GET** /api2/json/subscribePlanOnBehalf/{planName}/{apiKey} | Subscribe to a give API plan, using the user&#39;s preferred or default currency (admin only).
*NamSorApiV2.AdminApi* | [**taxonomyClasses**](docs/AdminApi.md#taxonomyClasses) | **GET** /api2/json/taxonomyClasses/{classifierName} | Print the taxonomy classes valid for the given classifier.
*NamSorApiV2.AdminApi* | [**updateBillingInfo**](docs/AdminApi.md#updateBillingInfo) | **POST** /api2/json/updateBillingInfo/{token} | Sets or update the billing information (company name, address, phone, vat ID)
*NamSorApiV2.AdminApi* | [**updateLimit**](docs/AdminApi.md#updateLimit) | **GET** /api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token} | Modifies the hard/soft limit on the API plan&#39;s overages (default is 0$ soft limit).
*NamSorApiV2.AdminApi* | [**updatePaymentDefault**](docs/AdminApi.md#updatePaymentDefault) | **GET** /api2/json/updatePaymentDefault/{defautSourceId}/{token} | Update the default Stripe card associated with the current google auth session token.
*NamSorApiV2.AdminApi* | [**userInfo**](docs/AdminApi.md#userInfo) | **GET** /api2/json/userInfo/{token} | Get the user profile associated with the current google auth session token.
*NamSorApiV2.AdminApi* | [**verifyEmail**](docs/AdminApi.md#verifyEmail) | **GET** /api2/json/verifyEmail/{emailToken} | Verifies an email, based on token sent to that email
*NamSorApiV2.AdminApi* | [**verifyRemoveEmail**](docs/AdminApi.md#verifyRemoveEmail) | **GET** /api2/json/verifyRemoveEmail/{emailToken} | Verifies an email, based on token sent to that email
*NamSorApiV2.AdminApi* | [**vet**](docs/AdminApi.md#vet) | **GET** /api2/json/vetting/{source}/{vetted} | Vetting of a source.
*NamSorApiV2.ChineseApi* | [**chineseNameCandidates**](docs/ChineseApi.md#chineseNameCandidates) | **GET** /api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin} | Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
*NamSorApiV2.ChineseApi* | [**chineseNameCandidatesBatch**](docs/ChineseApi.md#chineseNameCandidatesBatch) | **POST** /api2/json/chineseNameCandidatesBatch | Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname), ex. Wang Xiaoming
*NamSorApiV2.ChineseApi* | [**chineseNameCandidatesGenderBatch**](docs/ChineseApi.md#chineseNameCandidatesGenderBatch) | **POST** /api2/json/chineseNameCandidatesGenderBatch | Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname) ex. Wang Xiaoming.
*NamSorApiV2.ChineseApi* | [**chineseNameGenderCandidates**](docs/ChineseApi.md#chineseNameGenderCandidates) | **GET** /api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender} | Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender (&#39;male&#39; or &#39;female&#39;)
*NamSorApiV2.ChineseApi* | [**chineseNameMatch**](docs/ChineseApi.md#chineseNameMatch) | **GET** /api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName} | Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
*NamSorApiV2.ChineseApi* | [**chineseNameMatchBatch**](docs/ChineseApi.md#chineseNameMatchBatch) | **POST** /api2/json/chineseNameMatchBatch | Identify Chinese name candidates, based on the romanized name (firstName &#x3D; chineseGivenName; lastName&#x3D;chineseSurname), ex. Wang Xiaoming
*NamSorApiV2.ChineseApi* | [**genderChineseName**](docs/ChineseApi.md#genderChineseName) | **GET** /api2/json/genderChineseName/{chineseName} | Infer the likely gender of a Chinese full name ex. 王晓明
*NamSorApiV2.ChineseApi* | [**genderChineseNameBatch**](docs/ChineseApi.md#genderChineseNameBatch) | **POST** /api2/json/genderChineseNameBatch | Infer the likely gender of up to 100 full names ex. 王晓明
*NamSorApiV2.ChineseApi* | [**genderChineseNamePinyin**](docs/ChineseApi.md#genderChineseNamePinyin) | **GET** /api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin} | Infer the likely gender of a Chinese name in LATIN (Pinyin).
*NamSorApiV2.ChineseApi* | [**genderChineseNamePinyinBatch**](docs/ChineseApi.md#genderChineseNamePinyinBatch) | **POST** /api2/json/genderChineseNamePinyinBatch | Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
*NamSorApiV2.ChineseApi* | [**parseChineseName**](docs/ChineseApi.md#parseChineseName) | **GET** /api2/json/parseChineseName/{chineseName} | Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name)
*NamSorApiV2.ChineseApi* | [**parseChineseNameBatch**](docs/ChineseApi.md#parseChineseNameBatch) | **POST** /api2/json/parseChineseNameBatch | Infer the likely first/last name structure of a name, ex. 王晓明 -&gt; 王(surname) 晓明(given name).
*NamSorApiV2.ChineseApi* | [**pinyinChineseName**](docs/ChineseApi.md#pinyinChineseName) | **GET** /api2/json/pinyinChineseName/{chineseName} | Romanize the Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name)
*NamSorApiV2.ChineseApi* | [**pinyinChineseNameBatch**](docs/ChineseApi.md#pinyinChineseNameBatch) | **POST** /api2/json/pinyinChineseNameBatch | Romanize a list of Chinese name to Pinyin, ex. 王晓明 -&gt; Wang (surname) Xiaoming (given name).
*NamSorApiV2.JapaneseApi* | [**genderJapaneseNameFull**](docs/JapaneseApi.md#genderJapaneseNameFull) | **GET** /api2/json/genderJapaneseNameFull/{japaneseName} | Infer the likely gender of a Japanese full name ex. 王晓明
*NamSorApiV2.JapaneseApi* | [**genderJapaneseNameFullBatch**](docs/JapaneseApi.md#genderJapaneseNameFullBatch) | **POST** /api2/json/genderJapaneseNameFullBatch | Infer the likely gender of up to 100 full names
*NamSorApiV2.JapaneseApi* | [**genderJapaneseNamePinyin**](docs/JapaneseApi.md#genderJapaneseNamePinyin) | **GET** /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName} | Infer the likely gender of a Japanese name in LATIN (Pinyin).
*NamSorApiV2.JapaneseApi* | [**genderJapaneseNamePinyinBatch**](docs/JapaneseApi.md#genderJapaneseNamePinyinBatch) | **POST** /api2/json/genderJapaneseNameBatch | Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
*NamSorApiV2.JapaneseApi* | [**japaneseNameKanjiCandidates**](docs/JapaneseApi.md#japaneseNameKanjiCandidates) | **GET** /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin} | Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**japaneseNameKanjiCandidatesBatch**](docs/JapaneseApi.md#japaneseNameKanjiCandidatesBatch) | **POST** /api2/json/japaneseNameKanjiCandidatesBatch | Identify japanese name candidates in KANJI, based on the romanized name (firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname), ex. Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**japaneseNameLatinCandidates**](docs/JapaneseApi.md#japaneseNameLatinCandidates) | **GET** /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji} | Romanize japanese name, based on the name in Kanji.
*NamSorApiV2.JapaneseApi* | [**japaneseNameLatinCandidatesBatch**](docs/JapaneseApi.md#japaneseNameLatinCandidatesBatch) | **POST** /api2/json/japaneseNameLatinCandidatesBatch | Romanize japanese names, based on the name in KANJI
*NamSorApiV2.JapaneseApi* | [**japaneseNameMatch**](docs/JapaneseApi.md#japaneseNameMatch) | **GET** /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} | Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**japaneseNameMatchBatch**](docs/JapaneseApi.md#japaneseNameMatchBatch) | **POST** /api2/json/japaneseNameMatchBatch | Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**japaneseNameMatchFeedbackLoop**](docs/JapaneseApi.md#japaneseNameMatchFeedbackLoop) | **GET** /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} | [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**parseJapaneseName**](docs/JapaneseApi.md#parseJapaneseName) | **GET** /api2/json/parseJapaneseName/{japaneseName} | Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
*NamSorApiV2.JapaneseApi* | [**parseJapaneseNameBatch**](docs/JapaneseApi.md#parseJapaneseNameBatch) | **POST** /api2/json/parseJapaneseNameBatch | Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 
*NamSorApiV2.SocialApi* | [**phoneCode**](docs/SocialApi.md#phoneCode) | **GET** /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber} | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
*NamSorApiV2.SocialApi* | [**phoneCodeBatch**](docs/SocialApi.md#phoneCodeBatch) | **POST** /api2/json/phoneCodeBatch | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
*NamSorApiV2.SocialApi* | [**phoneCodeGeo**](docs/SocialApi.md#phoneCodeGeo) | **GET** /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2} | [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
*NamSorApiV2.SocialApi* | [**phoneCodeGeoBatch**](docs/SocialApi.md#phoneCodeGeoBatch) | **POST** /api2/json/phoneCodeGeoBatch | [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
*NamSorApiV2.SocialApi* | [**phoneCodeGeoFeedbackLoop**](docs/SocialApi.md#phoneCodeGeoFeedbackLoop) | **GET** /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2} | [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).


## Documentation for Models

 - [NamSorApiV2.APIBillingPeriodUsageOut](docs/APIBillingPeriodUsageOut.md)
 - [NamSorApiV2.APIClassifierOut](docs/APIClassifierOut.md)
 - [NamSorApiV2.APIClassifierTaxonomyOut](docs/APIClassifierTaxonomyOut.md)
 - [NamSorApiV2.APIClassifiersStatusOut](docs/APIClassifiersStatusOut.md)
 - [NamSorApiV2.APICounterV2Out](docs/APICounterV2Out.md)
 - [NamSorApiV2.APIKeyOut](docs/APIKeyOut.md)
 - [NamSorApiV2.APIPeriodUsageOut](docs/APIPeriodUsageOut.md)
 - [NamSorApiV2.APIPlanOut](docs/APIPlanOut.md)
 - [NamSorApiV2.APIPlanSubscriptionOut](docs/APIPlanSubscriptionOut.md)
 - [NamSorApiV2.APIPlansOut](docs/APIPlansOut.md)
 - [NamSorApiV2.APIServiceOut](docs/APIServiceOut.md)
 - [NamSorApiV2.APIServicesOut](docs/APIServicesOut.md)
 - [NamSorApiV2.APIUsageAggregatedOut](docs/APIUsageAggregatedOut.md)
 - [NamSorApiV2.BatchFirstLastNameDiasporaedOut](docs/BatchFirstLastNameDiasporaedOut.md)
 - [NamSorApiV2.BatchFirstLastNameGenderIn](docs/BatchFirstLastNameGenderIn.md)
 - [NamSorApiV2.BatchFirstLastNameGenderedOut](docs/BatchFirstLastNameGenderedOut.md)
 - [NamSorApiV2.BatchFirstLastNameGeoIn](docs/BatchFirstLastNameGeoIn.md)
 - [NamSorApiV2.BatchFirstLastNameGeoZippedIn](docs/BatchFirstLastNameGeoZippedIn.md)
 - [NamSorApiV2.BatchFirstLastNameIn](docs/BatchFirstLastNameIn.md)
 - [NamSorApiV2.BatchFirstLastNameOriginedOut](docs/BatchFirstLastNameOriginedOut.md)
 - [NamSorApiV2.BatchFirstLastNamePhoneCodedOut](docs/BatchFirstLastNamePhoneCodedOut.md)
 - [NamSorApiV2.BatchFirstLastNamePhoneNumberGeoIn](docs/BatchFirstLastNamePhoneNumberGeoIn.md)
 - [NamSorApiV2.BatchFirstLastNamePhoneNumberIn](docs/BatchFirstLastNamePhoneNumberIn.md)
 - [NamSorApiV2.BatchFirstLastNameUSRaceEthnicityOut](docs/BatchFirstLastNameUSRaceEthnicityOut.md)
 - [NamSorApiV2.BatchMatchPersonalFirstLastNameIn](docs/BatchMatchPersonalFirstLastNameIn.md)
 - [NamSorApiV2.BatchNameMatchCandidatesOut](docs/BatchNameMatchCandidatesOut.md)
 - [NamSorApiV2.BatchNameMatchedOut](docs/BatchNameMatchedOut.md)
 - [NamSorApiV2.BatchParsedFullNameGeoIn](docs/BatchParsedFullNameGeoIn.md)
 - [NamSorApiV2.BatchParsedFullNameIn](docs/BatchParsedFullNameIn.md)
 - [NamSorApiV2.BatchPersonalNameGenderedOut](docs/BatchPersonalNameGenderedOut.md)
 - [NamSorApiV2.BatchPersonalNameGeoIn](docs/BatchPersonalNameGeoIn.md)
 - [NamSorApiV2.BatchPersonalNameGeoOut](docs/BatchPersonalNameGeoOut.md)
 - [NamSorApiV2.BatchPersonalNameIn](docs/BatchPersonalNameIn.md)
 - [NamSorApiV2.BatchPersonalNameParsedOut](docs/BatchPersonalNameParsedOut.md)
 - [NamSorApiV2.BillingHistoryOut](docs/BillingHistoryOut.md)
 - [NamSorApiV2.BillingInfoInOut](docs/BillingInfoInOut.md)
 - [NamSorApiV2.CacheMetricsOut](docs/CacheMetricsOut.md)
 - [NamSorApiV2.ClassifierMetricsOut](docs/ClassifierMetricsOut.md)
 - [NamSorApiV2.CurrenciesOut](docs/CurrenciesOut.md)
 - [NamSorApiV2.DeployUIOut](docs/DeployUIOut.md)
 - [NamSorApiV2.ExpectedClassMetricsOut](docs/ExpectedClassMetricsOut.md)
 - [NamSorApiV2.FeedbackLoopOut](docs/FeedbackLoopOut.md)
 - [NamSorApiV2.FirstLastNameDiasporaedOut](docs/FirstLastNameDiasporaedOut.md)
 - [NamSorApiV2.FirstLastNameGenderIn](docs/FirstLastNameGenderIn.md)
 - [NamSorApiV2.FirstLastNameGenderedOut](docs/FirstLastNameGenderedOut.md)
 - [NamSorApiV2.FirstLastNameGeoIn](docs/FirstLastNameGeoIn.md)
 - [NamSorApiV2.FirstLastNameGeoZippedIn](docs/FirstLastNameGeoZippedIn.md)
 - [NamSorApiV2.FirstLastNameIn](docs/FirstLastNameIn.md)
 - [NamSorApiV2.FirstLastNameOriginedOut](docs/FirstLastNameOriginedOut.md)
 - [NamSorApiV2.FirstLastNameOut](docs/FirstLastNameOut.md)
 - [NamSorApiV2.FirstLastNamePhoneCodedOut](docs/FirstLastNamePhoneCodedOut.md)
 - [NamSorApiV2.FirstLastNamePhoneNumberGeoIn](docs/FirstLastNamePhoneNumberGeoIn.md)
 - [NamSorApiV2.FirstLastNamePhoneNumberIn](docs/FirstLastNamePhoneNumberIn.md)
 - [NamSorApiV2.FirstLastNameUSRaceEthnicityOut](docs/FirstLastNameUSRaceEthnicityOut.md)
 - [NamSorApiV2.InlineObject](docs/InlineObject.md)
 - [NamSorApiV2.InvoiceItemOut](docs/InvoiceItemOut.md)
 - [NamSorApiV2.InvoiceOut](docs/InvoiceOut.md)
 - [NamSorApiV2.MatchPersonalFirstLastNameIn](docs/MatchPersonalFirstLastNameIn.md)
 - [NamSorApiV2.NamSorCounterOut](docs/NamSorCounterOut.md)
 - [NamSorApiV2.NameMatchCandidateOut](docs/NameMatchCandidateOut.md)
 - [NamSorApiV2.NameMatchCandidatesOut](docs/NameMatchCandidatesOut.md)
 - [NamSorApiV2.NameMatchedOut](docs/NameMatchedOut.md)
 - [NamSorApiV2.ParsedFullNameGeoIn](docs/ParsedFullNameGeoIn.md)
 - [NamSorApiV2.ParsedFullNameIn](docs/ParsedFullNameIn.md)
 - [NamSorApiV2.PersonalNameGenderedOut](docs/PersonalNameGenderedOut.md)
 - [NamSorApiV2.PersonalNameGeoIn](docs/PersonalNameGeoIn.md)
 - [NamSorApiV2.PersonalNameGeoOut](docs/PersonalNameGeoOut.md)
 - [NamSorApiV2.PersonalNameIn](docs/PersonalNameIn.md)
 - [NamSorApiV2.PersonalNameParsedOut](docs/PersonalNameParsedOut.md)
 - [NamSorApiV2.ProperNounCategorizedOut](docs/ProperNounCategorizedOut.md)
 - [NamSorApiV2.RomanizedNameOut](docs/RomanizedNameOut.md)
 - [NamSorApiV2.SoftwareVersionOut](docs/SoftwareVersionOut.md)
 - [NamSorApiV2.SourceDetailedMetricsOut](docs/SourceDetailedMetricsOut.md)
 - [NamSorApiV2.SourceMetricsOut](docs/SourceMetricsOut.md)
 - [NamSorApiV2.StripeCardOut](docs/StripeCardOut.md)
 - [NamSorApiV2.StripeCustomerOut](docs/StripeCustomerOut.md)
 - [NamSorApiV2.SystemMetricsOut](docs/SystemMetricsOut.md)
 - [NamSorApiV2.UserInfoOut](docs/UserInfoOut.md)

