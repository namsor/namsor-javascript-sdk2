# NamSorApiV2.PersonalApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**corridor**](PersonalApi.md#corridor) | **GET** /api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo} | [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
[**corridorBatch**](PersonalApi.md#corridorBatch) | **POST** /api2/json/corridorBatch | [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
[**country**](PersonalApi.md#country) | **GET** /api2/json/country/{personalNameFull} | [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
[**countryBatch**](PersonalApi.md#countryBatch) | **POST** /api2/json/countryBatch | [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
[**diaspora**](PersonalApi.md#diaspora) | **GET** /api2/json/diaspora/{countryIso2}/{firstName}/{lastName} | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
[**diasporaBatch**](PersonalApi.md#diasporaBatch) | **POST** /api2/json/diasporaBatch | [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
[**gender**](PersonalApi.md#gender) | **GET** /api2/json/gender/{firstName}/{lastName} | Infer the likely gender of a name.
[**genderBatch**](PersonalApi.md#genderBatch) | **POST** /api2/json/genderBatch | Infer the likely gender of up to 100 names, detecting automatically the cultural context.
[**genderFull**](PersonalApi.md#genderFull) | **GET** /api2/json/genderFull/{fullName} | Infer the likely gender of a full name, ex. John H. Smith
[**genderFullBatch**](PersonalApi.md#genderFullBatch) | **POST** /api2/json/genderFullBatch | Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
[**genderFullGeo**](PersonalApi.md#genderFullGeo) | **GET** /api2/json/genderFullGeo/{fullName}/{countryIso2} | Infer the likely gender of a full name, given a local context (ISO2 country code).
[**genderFullGeoBatch**](PersonalApi.md#genderFullGeoBatch) | **POST** /api2/json/genderFullGeoBatch | Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
[**genderGeo**](PersonalApi.md#genderGeo) | **GET** /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2} | Infer the likely gender of a name, given a local context (ISO2 country code).
[**genderGeoBatch**](PersonalApi.md#genderGeoBatch) | **POST** /api2/json/genderGeoBatch | Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
[**origin**](PersonalApi.md#origin) | **GET** /api2/json/origin/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use &#39;diaspora&#39; instead.
[**originBatch**](PersonalApi.md#originBatch) | **POST** /api2/json/originBatch | [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
[**parseName**](PersonalApi.md#parseName) | **GET** /api2/json/parseName/{nameFull} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
[**parseNameBatch**](PersonalApi.md#parseNameBatch) | **POST** /api2/json/parseNameBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
[**parseNameGeo**](PersonalApi.md#parseNameGeo) | **GET** /api2/json/parseName/{nameFull}/{countryIso2} | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
[**parseNameGeoBatch**](PersonalApi.md#parseNameGeoBatch) | **POST** /api2/json/parseNameGeoBatch | Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
[**usRaceEthnicity**](PersonalApi.md#usRaceEthnicity) | **GET** /api2/json/usRaceEthnicity/{firstName}/{lastName} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**usRaceEthnicityBatch**](PersonalApi.md#usRaceEthnicityBatch) | **POST** /api2/json/usRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**usRaceEthnicityZIP5**](PersonalApi.md#usRaceEthnicityZIP5) | **GET** /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code} | [USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
[**usZipRaceEthnicityBatch**](PersonalApi.md#usZipRaceEthnicityBatch) | **POST** /api2/json/usZipRaceEthnicityBatch | [USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).


<a name="corridor"></a>
# **corridor**
> CorridorOut corridor(countryIso2From, firstNameFrom, lastNameFrom, countryIso2To, firstNameTo, lastNameTo)

[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var countryIso2From = "countryIso2From_example"; // String | 
var firstNameFrom = "firstNameFrom_example"; // String | 
var lastNameFrom = "lastNameFrom_example"; // String | 
var countryIso2To = "countryIso2To_example"; // String | 
var firstNameTo = "firstNameTo_example"; // String | 
var lastNameTo = "lastNameTo_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.corridor(countryIso2From, firstNameFrom, lastNameFrom, countryIso2To, firstNameTo, lastNameTo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryIso2From** | **String**|  | 
 **firstNameFrom** | **String**|  | 
 **lastNameFrom** | **String**|  | 
 **countryIso2To** | **String**|  | 
 **firstNameTo** | **String**|  | 
 **lastNameTo** | **String**|  | 

### Return type

[**CorridorOut**](CorridorOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="corridorBatch"></a>
# **corridorBatch**
> BatchCorridorOut corridorBatch(opts)

[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchCorridorIn': new NamSorApiV2.BatchCorridorIn() // BatchCorridorIn | A list of name pairs, with country code (nameFrom -> nameTo).
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.corridorBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchCorridorIn** | [**BatchCorridorIn**](BatchCorridorIn.md)| A list of name pairs, with country code (nameFrom -&gt; nameTo). | [optional] 

### Return type

[**BatchCorridorOut**](BatchCorridorOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="country"></a>
# **country**
> PersonalNameGeoOut country(personalNameFull)

[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var personalNameFull = "personalNameFull_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.country(personalNameFull, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personalNameFull** | **String**|  | 

### Return type

[**PersonalNameGeoOut**](PersonalNameGeoOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="countryBatch"></a>
# **countryBatch**
> BatchPersonalNameGeoOut countryBatch(opts)

[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
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
apiInstance.countryBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchPersonalNameIn** | [**BatchPersonalNameIn**](BatchPersonalNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameGeoOut**](BatchPersonalNameGeoOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="diaspora"></a>
# **diaspora**
> FirstLastNameDiasporaedOut diaspora(countryIso2, firstName, lastName)

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var countryIso2 = "countryIso2_example"; // String | 
var firstName = "firstName_example"; // String | 
var lastName = "lastName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.diaspora(countryIso2, firstName, lastName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryIso2** | **String**|  | 
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 

### Return type

[**FirstLastNameDiasporaedOut**](FirstLastNameDiasporaedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diasporaBatch"></a>
# **diasporaBatch**
> BatchFirstLastNameDiasporaedOut diasporaBatch(opts)

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameGeoIn': new NamSorApiV2.BatchFirstLastNameGeoIn() // BatchFirstLastNameGeoIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.diasporaBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameGeoIn** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameDiasporaedOut**](BatchFirstLastNameDiasporaedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gender"></a>
# **gender**
> FirstLastNameGenderedOut gender(firstName, lastName)

Infer the likely gender of a name.

### Example
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
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gender(firstName, lastName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderBatch"></a>
# **genderBatch**
> BatchFirstLastNameGenderedOut genderBatch(opts)

Infer the likely gender of up to 100 names, detecting automatically the cultural context.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameGenderedOut**](BatchFirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="genderFull"></a>
# **genderFull**
> PersonalNameGenderedOut genderFull(fullName)

Infer the likely gender of a full name, ex. John H. Smith

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var fullName = "fullName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderFull(fullName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullName** | **String**|  | 

### Return type

[**PersonalNameGenderedOut**](PersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderFullBatch"></a>
# **genderFullBatch**
> BatchPersonalNameGenderedOut genderFullBatch(opts)

Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
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
apiInstance.genderFullBatch(opts, callback);
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

<a name="genderFullGeo"></a>
# **genderFullGeo**
> PersonalNameGenderedOut genderFullGeo(fullName, countryIso2)

Infer the likely gender of a full name, given a local context (ISO2 country code).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var fullName = "fullName_example"; // String | 
var countryIso2 = "countryIso2_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderFullGeo(fullName, countryIso2, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fullName** | **String**|  | 
 **countryIso2** | **String**|  | 

### Return type

[**PersonalNameGenderedOut**](PersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderFullGeoBatch"></a>
# **genderFullGeoBatch**
> BatchPersonalNameGenderedOut genderFullGeoBatch(opts)

Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchPersonalNameGeoIn': new NamSorApiV2.BatchPersonalNameGeoIn() // BatchPersonalNameGeoIn | A list of personal names, with a country ISO2 code
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderFullGeoBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchPersonalNameGeoIn** | [**BatchPersonalNameGeoIn**](BatchPersonalNameGeoIn.md)| A list of personal names, with a country ISO2 code | [optional] 

### Return type

[**BatchPersonalNameGenderedOut**](BatchPersonalNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="genderGeo"></a>
# **genderGeo**
> FirstLastNameGenderedOut genderGeo(firstName, lastName, countryIso2)

Infer the likely gender of a name, given a local context (ISO2 country code).

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 
 **countryIso2** | **String**|  | 

### Return type

[**FirstLastNameGenderedOut**](FirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="genderGeoBatch"></a>
# **genderGeoBatch**
> BatchFirstLastNameGenderedOut genderGeoBatch(opts)

Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameGeoIn': new NamSorApiV2.BatchFirstLastNameGeoIn() // BatchFirstLastNameGeoIn | A list of names, with country code.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.genderGeoBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameGeoIn** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of names, with country code. | [optional] 

### Return type

[**BatchFirstLastNameGenderedOut**](BatchFirstLastNameGenderedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="origin"></a>
# **origin**
> FirstLastNameOriginedOut origin(firstName, lastName)

[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use &#39;diaspora&#39; instead.

### Example
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
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.origin(firstName, lastName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 

### Return type

[**FirstLastNameOriginedOut**](FirstLastNameOriginedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="originBatch"></a>
# **originBatch**
> BatchFirstLastNameOriginedOut originBatch(opts)

[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameIn': new NamSorApiV2.BatchFirstLastNameIn() // BatchFirstLastNameIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.originBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameIn** | [**BatchFirstLastNameIn**](BatchFirstLastNameIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameOriginedOut**](BatchFirstLastNameOriginedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="parseName"></a>
# **parseName**
> PersonalNameParsedOut parseName(nameFull)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var nameFull = "nameFull_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseName(nameFull, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameFull** | **String**|  | 

### Return type

[**PersonalNameParsedOut**](PersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="parseNameBatch"></a>
# **parseNameBatch**
> BatchPersonalNameParsedOut parseNameBatch(opts)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
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
apiInstance.parseNameBatch(opts, callback);
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

<a name="parseNameGeo"></a>
# **parseNameGeo**
> PersonalNameParsedOut parseNameGeo(nameFull, countryIso2)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var nameFull = "nameFull_example"; // String | 
var countryIso2 = "countryIso2_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseNameGeo(nameFull, countryIso2, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameFull** | **String**|  | 
 **countryIso2** | **String**|  | 

### Return type

[**PersonalNameParsedOut**](PersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="parseNameGeoBatch"></a>
# **parseNameGeoBatch**
> BatchPersonalNameParsedOut parseNameGeoBatch(opts)

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchPersonalNameGeoIn': new NamSorApiV2.BatchPersonalNameGeoIn() // BatchPersonalNameGeoIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseNameGeoBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchPersonalNameGeoIn** | [**BatchPersonalNameGeoIn**](BatchPersonalNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchPersonalNameParsedOut**](BatchPersonalNameParsedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usRaceEthnicity"></a>
# **usRaceEthnicity**
> FirstLastNameUSRaceEthnicityOut usRaceEthnicity(firstName, lastName)

[USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example
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
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usRaceEthnicity(firstName, lastName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 

### Return type

[**FirstLastNameUSRaceEthnicityOut**](FirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usRaceEthnicityBatch"></a>
# **usRaceEthnicityBatch**
> BatchFirstLastNameUSRaceEthnicityOut usRaceEthnicityBatch(opts)

[USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameGeoIn': new NamSorApiV2.BatchFirstLastNameGeoIn() // BatchFirstLastNameGeoIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usRaceEthnicityBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameGeoIn** | [**BatchFirstLastNameGeoIn**](BatchFirstLastNameGeoIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameUSRaceEthnicityOut**](BatchFirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usRaceEthnicityZIP5"></a>
# **usRaceEthnicityZIP5**
> FirstLastNameUSRaceEthnicityOut usRaceEthnicityZIP5(firstName, lastName, zip5Code)

[USES 10 UNITS PER NAME] Infer a US resident&#39;s likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example
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
var zip5Code = "zip5Code_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usRaceEthnicityZIP5(firstName, lastName, zip5Code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**|  | 
 **lastName** | **String**|  | 
 **zip5Code** | **String**|  | 

### Return type

[**FirstLastNameUSRaceEthnicityOut**](FirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usZipRaceEthnicityBatch"></a>
# **usZipRaceEthnicityBatch**
> BatchFirstLastNameUSRaceEthnicityOut usZipRaceEthnicityBatch(opts)

[USES 10 UNITS PER NAME] Infer up-to 100 US resident&#39;s likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.PersonalApi();
var opts = {
  'batchFirstLastNameGeoZippedIn': new NamSorApiV2.BatchFirstLastNameGeoZippedIn() // BatchFirstLastNameGeoZippedIn | A list of personal names
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usZipRaceEthnicityBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchFirstLastNameGeoZippedIn** | [**BatchFirstLastNameGeoZippedIn**](BatchFirstLastNameGeoZippedIn.md)| A list of personal names | [optional] 

### Return type

[**BatchFirstLastNameUSRaceEthnicityOut**](BatchFirstLastNameUSRaceEthnicityOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

