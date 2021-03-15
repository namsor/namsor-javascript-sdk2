# NamSorApiV2.JapaneseApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**genderJapaneseNameFull**](JapaneseApi.md#genderJapaneseNameFull) | **GET** /api2/json/genderJapaneseNameFull/{japaneseName} | Infer the likely gender of a Japanese full name ex. 王晓明
[**genderJapaneseNameFullBatch**](JapaneseApi.md#genderJapaneseNameFullBatch) | **POST** /api2/json/genderJapaneseNameFullBatch | Infer the likely gender of up to 100 full names
[**genderJapaneseNamePinyin**](JapaneseApi.md#genderJapaneseNamePinyin) | **GET** /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName} | Infer the likely gender of a Japanese name in LATIN (Pinyin).
[**genderJapaneseNamePinyinBatch**](JapaneseApi.md#genderJapaneseNamePinyinBatch) | **POST** /api2/json/genderJapaneseNameBatch | Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
[**japaneseNameGenderKanjiCandidatesBatch**](JapaneseApi.md#japaneseNameGenderKanjiCandidatesBatch) | **POST** /api2/json/japaneseNameGenderKanjiCandidatesBatch | Identify japanese name candidates in KANJI, based on the romanized name (firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
[**japaneseNameKanjiCandidates**](JapaneseApi.md#japaneseNameKanjiCandidates) | **GET** /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender} | Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
[**japaneseNameKanjiCandidates1**](JapaneseApi.md#japaneseNameKanjiCandidates1) | **GET** /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin} | Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
[**japaneseNameKanjiCandidatesBatch**](JapaneseApi.md#japaneseNameKanjiCandidatesBatch) | **POST** /api2/json/japaneseNameKanjiCandidatesBatch | Identify japanese name candidates in KANJI, based on the romanized name (firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname), ex. Yamamoto Sanae
[**japaneseNameLatinCandidates**](JapaneseApi.md#japaneseNameLatinCandidates) | **GET** /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji} | Romanize japanese name, based on the name in Kanji.
[**japaneseNameLatinCandidatesBatch**](JapaneseApi.md#japaneseNameLatinCandidatesBatch) | **POST** /api2/json/japaneseNameLatinCandidatesBatch | Romanize japanese names, based on the name in KANJI
[**japaneseNameMatch**](JapaneseApi.md#japaneseNameMatch) | **GET** /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} | Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
[**japaneseNameMatchBatch**](JapaneseApi.md#japaneseNameMatchBatch) | **POST** /api2/json/japaneseNameMatchBatch | Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
[**japaneseNameMatchFeedbackLoop**](JapaneseApi.md#japaneseNameMatchFeedbackLoop) | **GET** /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} | [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
[**parseJapaneseName**](JapaneseApi.md#parseJapaneseName) | **GET** /api2/json/parseJapaneseName/{japaneseName} | Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
[**parseJapaneseNameBatch**](JapaneseApi.md#parseJapaneseNameBatch) | **POST** /api2/json/parseJapaneseNameBatch | Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 


<a name="genderJapaneseNameFull"></a>
# **genderJapaneseNameFull**
> PersonalNameGenderedOut genderJapaneseNameFull(japaneseName)

Infer the likely gender of a Japanese full name ex. 王晓明

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseName = "japaneseName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderJapaneseNameFull(japaneseName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseName** | **String**|  | 

### Return type

[**PersonalNameGenderedOut**](PersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderJapaneseNameFullBatch"></a>
# **genderJapaneseNameFullBatch**
> BatchPersonalNameGenderedOut genderJapaneseNameFullBatch(opts)

Infer the likely gender of up to 100 full names

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchPersonalNameIn': new NamSorApiV2.BatchPersonalNameIn() // BatchPersonalNameIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderJapaneseNameFullBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchPersonalNameIn** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameGenderedOut**](BatchPersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="genderJapaneseNamePinyin"></a>
# **genderJapaneseNamePinyin**
> FirstLastNameGenderedOut genderJapaneseNamePinyin(japaneseSurname, japaneseGivenName)

Infer the likely gender of a Japanese name in LATIN (Pinyin).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurname = "japaneseSurname_example"; // String | 
var japaneseGivenName = "japaneseGivenName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderJapaneseNamePinyin(japaneseSurname, japaneseGivenName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurname** | **String**|  | 
 **japaneseGivenName** | **String**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderJapaneseNamePinyinBatch"></a>
# **genderJapaneseNamePinyinBatch**
> BatchFirstLastNameGenderedOut genderJapaneseNamePinyinBatch(opts)

Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of names, with country code.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderJapaneseNamePinyinBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of names, with country code. | [optional] 

### Return type

[**BatchFirstLastNameGenderedOut**](BatchFirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="japaneseNameGenderKanjiCandidatesBatch"></a>
# **japaneseNameGenderKanjiCandidatesBatch**
> BatchNameMatchCandidatesOut japaneseNameGenderKanjiCandidatesBatch(opts)

Identify japanese name candidates in KANJI, based on the romanized name (firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname and known gender
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameGenderKanjiCandidatesBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal japanese names in LATIN, firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname and known gender | [optional] 

### Return type

[**BatchNameMatchCandidatesOut**](BatchNameMatchCandidatesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="japaneseNameKanjiCandidates"></a>
# **japaneseNameKanjiCandidates**
> RomanizedNameOut japaneseNameKanjiCandidates(japaneseSurnameLatin, japaneseGivenNameLatin, knownGender)

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurnameLatin = "japaneseSurnameLatin_example"; // String | 
var japaneseGivenNameLatin = "japaneseGivenNameLatin_example"; // String | 
var knownGender = "knownGender_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameKanjiCandidates(japaneseSurnameLatin, japaneseGivenNameLatin, knownGender, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurnameLatin** | **String**|  | 
 **japaneseGivenNameLatin** | **String**|  | 
 **knownGender** | **String**|  | 

### Return type

[**RomanizedNameOut**](RomanizedNameOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="japaneseNameKanjiCandidates1"></a>
# **japaneseNameKanjiCandidates1**
> RomanizedNameOut japaneseNameKanjiCandidates1(japaneseSurnameLatin, japaneseGivenNameLatin)

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurnameLatin = "japaneseSurnameLatin_example"; // String | 
var japaneseGivenNameLatin = "japaneseGivenNameLatin_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameKanjiCandidates1(japaneseSurnameLatin, japaneseGivenNameLatin, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurnameLatin** | **String**|  | 
 **japaneseGivenNameLatin** | **String**|  | 

### Return type

[**RomanizedNameOut**](RomanizedNameOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="japaneseNameKanjiCandidatesBatch"></a>
# **japaneseNameKanjiCandidatesBatch**
> BatchNameMatchCandidatesOut japaneseNameKanjiCandidatesBatch(opts)

Identify japanese name candidates in KANJI, based on the romanized name (firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname), ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameKanjiCandidatesBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal japanese names in LATIN, firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname | [optional] 

### Return type

[**BatchNameMatchCandidatesOut**](BatchNameMatchCandidatesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="japaneseNameLatinCandidates"></a>
# **japaneseNameLatinCandidates**
> RomanizedNameOut japaneseNameLatinCandidates(japaneseSurnameKanji, japaneseGivenNameKanji)

Romanize japanese name, based on the name in Kanji.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurnameKanji = "japaneseSurnameKanji_example"; // String | 
var japaneseGivenNameKanji = "japaneseGivenNameKanji_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameLatinCandidates(japaneseSurnameKanji, japaneseGivenNameKanji, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurnameKanji** | **String**|  | 
 **japaneseGivenNameKanji** | **String**|  | 

### Return type

[**RomanizedNameOut**](RomanizedNameOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="japaneseNameLatinCandidatesBatch"></a>
# **japaneseNameLatinCandidatesBatch**
> BatchNameMatchCandidatesOut japaneseNameLatinCandidatesBatch(opts)

Romanize japanese names, based on the name in KANJI

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameLatinCandidatesBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal japanese names in KANJI, firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname | [optional] 

### Return type

[**BatchNameMatchCandidatesOut**](BatchNameMatchCandidatesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="japaneseNameMatch"></a>
# **japaneseNameMatch**
> RomanizedNameOut japaneseNameMatch(japaneseSurnameLatin, japaneseGivenNameLatin, japaneseName)

Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurnameLatin = "japaneseSurnameLatin_example"; // String | 
var japaneseGivenNameLatin = "japaneseGivenNameLatin_example"; // String | 
var japaneseName = "japaneseName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameMatch(japaneseSurnameLatin, japaneseGivenNameLatin, japaneseName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurnameLatin** | **String**|  | 
 **japaneseGivenNameLatin** | **String**|  | 
 **japaneseName** | **String**|  | 

### Return type

[**RomanizedNameOut**](RomanizedNameOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="japaneseNameMatchBatch"></a>
# **japaneseNameMatchBatch**
> BatchNameMatchCandidatesOut japaneseNameMatchBatch(opts)

Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameMatchBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal Japanese names in LATIN, firstName &#x3D; japaneseGivenName; lastName&#x3D;japaneseSurname | [optional] 

### Return type

[**BatchNameMatchCandidatesOut**](BatchNameMatchCandidatesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="japaneseNameMatchFeedbackLoop"></a>
# **japaneseNameMatchFeedbackLoop**
> RomanizedNameOut japaneseNameMatchFeedbackLoop(japaneseSurnameLatin, japaneseGivenNameLatin, japaneseName)

[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseSurnameLatin = "japaneseSurnameLatin_example"; // String | 
var japaneseGivenNameLatin = "japaneseGivenNameLatin_example"; // String | 
var japaneseName = "japaneseName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.japaneseNameMatchFeedbackLoop(japaneseSurnameLatin, japaneseGivenNameLatin, japaneseName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseSurnameLatin** | **String**|  | 
 **japaneseGivenNameLatin** | **String**|  | 
 **japaneseName** | **String**|  | 

### Return type

[**RomanizedNameOut**](RomanizedNameOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="parseJapaneseName"></a>
# **parseJapaneseName**
> PersonalNameParsedOut parseJapaneseName(japaneseName)

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var japaneseName = "japaneseName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseJapaneseName(japaneseName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **japaneseName** | **String**|  | 

### Return type

[**PersonalNameParsedOut**](PersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="parseJapaneseNameBatch"></a>
# **parseJapaneseNameBatch**
> BatchPersonalNameParsedOut parseJapaneseNameBatch(opts)

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.JapaneseApi();
var opts = {
  'batchPersonalNameIn': new NamSorApiV2.BatchPersonalNameIn() // BatchPersonalNameIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseJapaneseNameBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchPersonalNameIn** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameParsedOut**](BatchPersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

