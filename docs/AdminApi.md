# NamSorApiV2.AdminApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredits**](AdminApi.md#addCredits) | **GET** /api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage} | Add usage credits to an API Key.
[**anonymize**](AdminApi.md#anonymize) | **GET** /api2/json/anonymize/{source}/{anonymized} | Activate/deactivate anonymization for a source.
[**apiStatus**](AdminApi.md#apiStatus) | **GET** /api2/json/apiStatus | Prints the current status of the classifiers.
[**apiUsage**](AdminApi.md#apiUsage) | **GET** /api2/json/apiUsage | Print current API usage.
[**apiUsageHistory**](AdminApi.md#apiUsageHistory) | **GET** /api2/json/apiUsageHistory | Print historical API usage.
[**apiUsageHistoryAggregate**](AdminApi.md#apiUsageHistoryAggregate) | **GET** /api2/json/apiUsageHistoryAggregate | Print historical API usage (in an aggregated view, by service, by day/hour/min).
[**availablePlans**](AdminApi.md#availablePlans) | **GET** /api2/json/availablePlans/{token} | List all available plans in the user&#39;s preferred currency.
[**availablePlans1**](AdminApi.md#availablePlans1) | **GET** /api2/json/availablePlans | List all available plans in the default currency (usd).
[**availableServices**](AdminApi.md#availableServices) | **GET** /api2/json/apiServices | List of API services and usage cost in Units (default is 1&#x3D;ONE Unit).
[**billingCurrencies**](AdminApi.md#billingCurrencies) | **GET** /api2/json/billingCurrencies | List possible currency options for billing (USD, EUR, GBP, ...)
[**billingHistory**](AdminApi.md#billingHistory) | **GET** /api2/json/billingHistory/{token} | Read the history billing information (invoices paid via Stripe or manually).
[**billingInfo**](AdminApi.md#billingInfo) | **GET** /api2/json/billingInfo/{token} | Read the billing information (company name, address, phone, vat ID)
[**charge**](AdminApi.md#charge) | **POST** /api2/json/charge | Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.
[**corporateKey**](AdminApi.md#corporateKey) | **GET** /api2/json/corporateKey/{apiKey}/{corporate} | Setting an API Key to a corporate status.
[**debugLevel**](AdminApi.md#debugLevel) | **GET** /api2/json/debugLevel/{logger}/{level} | Update debug level for a classifier
[**flush**](AdminApi.md#flush) | **GET** /api2/json/flush | Flush counters.
[**invalidateCache**](AdminApi.md#invalidateCache) | **GET** /api2/json/invalidateCache | Invalidate system caches.
[**learnable**](AdminApi.md#learnable) | **GET** /api2/json/learnable/{source}/{learnable} | Activate/deactivate learning from a source.
[**namsorCounter**](AdminApi.md#namsorCounter) | **GET** /api2/json/namsorCounter | Get the overall API counter
[**paymentInfo**](AdminApi.md#paymentInfo) | **GET** /api2/json/paymentInfo/{token} | Get the Stripe payment information associated with the current google auth session token.
[**procureKey**](AdminApi.md#procureKey) | **GET** /api2/json/procureKey/{token} | Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.
[**removeUserAccount**](AdminApi.md#removeUserAccount) | **GET** /api2/json/removeUserAccount/{token} | Remove the user account.
[**removeUserAccountOnBehalf**](AdminApi.md#removeUserAccountOnBehalf) | **GET** /api2/json/removeUserAccountOnBehalf/{apiKey} | Remove (on behalf) a user account.
[**shutdown**](AdminApi.md#shutdown) | **GET** /api2/json/shutdown | Stop learning and shutdown system.
[**softwareVersion**](AdminApi.md#softwareVersion) | **GET** /api2/json/softwareVersion | Get the current software version
[**sourceStats**](AdminApi.md#sourceStats) | **GET** /api2/json/sourceStats/{source} | Print basic source statistics.
[**stats**](AdminApi.md#stats) | **GET** /api2/json/stats | Print basic system statistics.
[**stripeConnect**](AdminApi.md#stripeConnect) | **GET** /api2/json/stripeConnect | Connects a Stripe Account.
[**subscribePlan**](AdminApi.md#subscribePlan) | **GET** /api2/json/subscribePlan/{planName}/{token} | Subscribe to a give API plan, using the user&#39;s preferred or default currency.
[**subscribePlanOnBehalf**](AdminApi.md#subscribePlanOnBehalf) | **GET** /api2/json/subscribePlanOnBehalf/{planName}/{apiKey} | Subscribe to a give API plan, using the user&#39;s preferred or default currency (admin only).
[**taxonomyClasses**](AdminApi.md#taxonomyClasses) | **GET** /api2/json/taxonomyClasses/{classifierName} | Print the taxonomy classes valid for the given classifier.
[**updateBillingInfo**](AdminApi.md#updateBillingInfo) | **POST** /api2/json/updateBillingInfo/{token} | Sets or update the billing information (company name, address, phone, vat ID)
[**updateLimit**](AdminApi.md#updateLimit) | **GET** /api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token} | Modifies the hard/soft limit on the API plan&#39;s overages (default is 0$ soft limit).
[**updatePaymentDefault**](AdminApi.md#updatePaymentDefault) | **GET** /api2/json/updatePaymentDefault/{defautSourceId}/{token} | Update the default Stripe card associated with the current google auth session token.
[**userInfo**](AdminApi.md#userInfo) | **GET** /api2/json/userInfo/{token} | Get the user profile associated with the current google auth session token.
[**verifyEmail**](AdminApi.md#verifyEmail) | **GET** /api2/json/verifyEmail/{emailToken} | Verifies an email, based on token sent to that email
[**verifyRemoveEmail**](AdminApi.md#verifyRemoveEmail) | **GET** /api2/json/verifyRemoveEmail/{emailToken} | Verifies an email, based on token sent to that email
[**vet**](AdminApi.md#vet) | **GET** /api2/json/vetting/{source}/{vetted} | Vetting of a source.


<a name="addCredits"></a>
# **addCredits**
> SystemMetricsOut addCredits(apiKey, usageCredits, userMessage)

Add usage credits to an API Key.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var apiKey = "apiKey_example"; // String | 
var usageCredits = 789; // Number | 
var userMessage = "userMessage_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCredits(apiKey, usageCredits, userMessage, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **usageCredits** | **Number**|  | 
 **userMessage** | **String**|  | 

### Return type

[**SystemMetricsOut**](SystemMetricsOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="anonymize"></a>
# **anonymize**
> anonymize(source, anonymized)

Activate/deactivate anonymization for a source.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var source = "source_example"; // String | 
var anonymized = true; // Boolean | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.anonymize(source, anonymized, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 
 **anonymized** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiStatus"></a>
# **apiStatus**
> APIPlansOut apiStatus()

Prints the current status of the classifiers.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiStatus(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPlansOut**](APIPlansOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsage"></a>
# **apiUsage**
> APIPeriodUsageOut apiUsage()

Print current API usage.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPeriodUsageOut**](APIPeriodUsageOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsageHistory"></a>
# **apiUsageHistory**
> APIPeriodUsageOut apiUsageHistory()

Print historical API usage.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsageHistory(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPeriodUsageOut**](APIPeriodUsageOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsageHistoryAggregate"></a>
# **apiUsageHistoryAggregate**
> APIPeriodUsageOut apiUsageHistoryAggregate()

Print historical API usage (in an aggregated view, by service, by day/hour/min).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiUsageHistoryAggregate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPeriodUsageOut**](APIPeriodUsageOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availablePlans"></a>
# **availablePlans**
> APIPlansOut availablePlans(token)

List all available plans in the user&#39;s preferred currency.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.availablePlans(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**APIPlansOut**](APIPlansOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availablePlans1"></a>
# **availablePlans1**
> APIPlansOut availablePlans1()

List all available plans in the default currency (usd).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.availablePlans1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPlansOut**](APIPlansOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableServices"></a>
# **availableServices**
> APIPlansOut availableServices()

List of API services and usage cost in Units (default is 1&#x3D;ONE Unit).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.availableServices(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**APIPlansOut**](APIPlansOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="billingCurrencies"></a>
# **billingCurrencies**
> CurrenciesOut billingCurrencies()

List possible currency options for billing (USD, EUR, GBP, ...)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingCurrencies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CurrenciesOut**](CurrenciesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="billingHistory"></a>
# **billingHistory**
> BillingHistoryOut billingHistory(token)

Read the history billing information (invoices paid via Stripe or manually).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingHistory(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**BillingHistoryOut**](BillingHistoryOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="billingInfo"></a>
# **billingInfo**
> BillingInfoInOut billingInfo(token)

Read the billing information (company name, address, phone, vat ID)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.billingInfo(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**BillingInfoInOut**](BillingInfoInOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="charge"></a>
# **charge**
> APIKeyOut charge(opts)

Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var opts = {
  'inlineObject': new NamSorApiV2.InlineObject() // InlineObject | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.charge(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="corporateKey"></a>
# **corporateKey**
> corporateKey(apiKey, corporate)

Setting an API Key to a corporate status.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var apiKey = "apiKey_example"; // String | 
var corporate = true; // Boolean | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.corporateKey(apiKey, corporate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 
 **corporate** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="debugLevel"></a>
# **debugLevel**
> debugLevel(logger, level)

Update debug level for a classifier

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var logger = "logger_example"; // String | 
var level = "level_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.debugLevel(logger, level, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logger** | **String**|  | 
 **level** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="flush"></a>
# **flush**
> flush()

Flush counters.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.flush(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="invalidateCache"></a>
# **invalidateCache**
> invalidateCache()

Invalidate system caches.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invalidateCache(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="learnable"></a>
# **learnable**
> learnable(source, learnable)

Activate/deactivate learning from a source.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var source = "source_example"; // String | 
var learnable = true; // Boolean | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.learnable(source, learnable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 
 **learnable** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="namsorCounter"></a>
# **namsorCounter**
> SoftwareVersionOut namsorCounter()

Get the overall API counter

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.namsorCounter(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SoftwareVersionOut**](SoftwareVersionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentInfo"></a>
# **paymentInfo**
> APIKeyOut paymentInfo(token)

Get the Stripe payment information associated with the current google auth session token.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentInfo(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="procureKey"></a>
# **procureKey**
> APIKeyOut procureKey(token)

Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.procureKey(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeUserAccount"></a>
# **removeUserAccount**
> APIPlanSubscriptionOut removeUserAccount(token)

Remove the user account.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUserAccount(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**APIPlanSubscriptionOut**](APIPlanSubscriptionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeUserAccountOnBehalf"></a>
# **removeUserAccountOnBehalf**
> APIPlanSubscriptionOut removeUserAccountOnBehalf(apiKey)

Remove (on behalf) a user account.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var apiKey = "apiKey_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUserAccountOnBehalf(apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**|  | 

### Return type

[**APIPlanSubscriptionOut**](APIPlanSubscriptionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shutdown"></a>
# **shutdown**
> shutdown()

Stop learning and shutdown system.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.shutdown(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="softwareVersion"></a>
# **softwareVersion**
> SoftwareVersionOut softwareVersion()

Get the current software version

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.softwareVersion(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SoftwareVersionOut**](SoftwareVersionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sourceStats"></a>
# **sourceStats**
> SystemMetricsOut sourceStats(source)

Print basic source statistics.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var source = "source_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sourceStats(source, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 

### Return type

[**SystemMetricsOut**](SystemMetricsOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stats"></a>
# **stats**
> SystemMetricsOut stats()

Print basic system statistics.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.stats(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemMetricsOut**](SystemMetricsOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stripeConnect"></a>
# **stripeConnect**
> stripeConnect(opts)

Connects a Stripe Account.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var opts = {
  'scope': "scope_example", // String | 
  'code': "code_example", // String | 
  'error': "error_example", // String | 
  'errorDescription': "errorDescription_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.stripeConnect(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **error** | **String**|  | [optional] 
 **errorDescription** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscribePlan"></a>
# **subscribePlan**
> APIPlanSubscriptionOut subscribePlan(planName, token)

Subscribe to a give API plan, using the user&#39;s preferred or default currency.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var planName = "planName_example"; // String | 
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribePlan(planName, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planName** | **String**|  | 
 **token** | **String**|  | 

### Return type

[**APIPlanSubscriptionOut**](APIPlanSubscriptionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscribePlanOnBehalf"></a>
# **subscribePlanOnBehalf**
> APIPlanSubscriptionOut subscribePlanOnBehalf(planName, apiKey)

Subscribe to a give API plan, using the user&#39;s preferred or default currency (admin only).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var planName = "planName_example"; // String | 
var apiKey = "apiKey_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscribePlanOnBehalf(planName, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planName** | **String**|  | 
 **apiKey** | **String**|  | 

### Return type

[**APIPlanSubscriptionOut**](APIPlanSubscriptionOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="taxonomyClasses"></a>
# **taxonomyClasses**
> APIPlansOut taxonomyClasses(classifierName)

Print the taxonomy classes valid for the given classifier.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var classifierName = "classifierName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taxonomyClasses(classifierName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **classifierName** | **String**|  | 

### Return type

[**APIPlansOut**](APIPlansOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateBillingInfo"></a>
# **updateBillingInfo**
> BillingInfoInOut updateBillingInfo(token, opts)

Sets or update the billing information (company name, address, phone, vat ID)

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var opts = {
  'billingInfoInOut': new NamSorApiV2.BillingInfoInOut() // BillingInfoInOut | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBillingInfo(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **billingInfoInOut** | [**BillingInfoInOut**](BillingInfoInOut.md)|  | [optional] 

### Return type

[**BillingInfoInOut**](BillingInfoInOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json

<a name="updateLimit"></a>
# **updateLimit**
> APIPeriodUsageOut updateLimit(usageLimit, hardOrSoft, token)

Modifies the hard/soft limit on the API plan&#39;s overages (default is 0$ soft limit).

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var usageLimit = 56; // Number | 
var hardOrSoft = true; // Boolean | 
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLimit(usageLimit, hardOrSoft, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usageLimit** | **Number**|  | 
 **hardOrSoft** | **Boolean**|  | 
 **token** | **String**|  | 

### Return type

[**APIPeriodUsageOut**](APIPeriodUsageOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePaymentDefault"></a>
# **updatePaymentDefault**
> APIKeyOut updatePaymentDefault(defautSourceId, token)

Update the default Stripe card associated with the current google auth session token.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var defautSourceId = "defautSourceId_example"; // String | 
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentDefault(defautSourceId, token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **defautSourceId** | **String**|  | 
 **token** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userInfo"></a>
# **userInfo**
> APIKeyOut userInfo(token)

Get the user profile associated with the current google auth session token.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var token = "token_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userInfo(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyEmail"></a>
# **verifyEmail**
> APIKeyOut verifyEmail(emailToken)

Verifies an email, based on token sent to that email

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var emailToken = "emailToken_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyEmail(emailToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailToken** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyRemoveEmail"></a>
# **verifyRemoveEmail**
> APIKeyOut verifyRemoveEmail(emailToken)

Verifies an email, based on token sent to that email

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var emailToken = "emailToken_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyRemoveEmail(emailToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailToken** | **String**|  | 

### Return type

[**APIKeyOut**](APIKeyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vet"></a>
# **vet**
> vet(source, vetted)

Vetting of a source.

### Example
```javascript
var NamSorApiV2 = require('nam_sor_api_v2');
var defaultClient = NamSorApiV2.ApiClient.instance;
// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new NamSorApiV2.AdminApi();
var source = "source_example"; // String | 
var vetted = true; // Boolean | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vet(source, vetted, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 
 **vetted** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

