# NamSorApiV2.AdminApi

All URIs are relative to *https://v2.namsor.com/NamSorAPIv2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anonymize**](AdminApi.md#anonymize) | **GET** /api2/json/anonymize/{source}/{anonymized} | Activate/deactivate anonymization for a source.
[**apiStatus**](AdminApi.md#apiStatus) | **GET** /api2/json/apiStatus | Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
[**apiUsage**](AdminApi.md#apiUsage) | **GET** /api2/json/apiUsage | Print current API usage.
[**apiUsageHistory**](AdminApi.md#apiUsageHistory) | **GET** /api2/json/apiUsageHistory | Print historical API usage.
[**apiUsageHistoryAggregate**](AdminApi.md#apiUsageHistoryAggregate) | **GET** /api2/json/apiUsageHistoryAggregate | Print historical API usage (in an aggregated view, by service, by day/hour/min).
[**availableServices**](AdminApi.md#availableServices) | **GET** /api2/json/apiServices | List of classification services and usage cost in Units per classification (default is 1&#x3D;ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
[**disable**](AdminApi.md#disable) | **GET** /api2/json/disable/{source}/{disabled} | Activate/deactivate an API Key.
[**learnable**](AdminApi.md#learnable) | **GET** /api2/json/learnable/{source}/{learnable} | Activate/deactivate learning from a source.
[**softwareVersion**](AdminApi.md#softwareVersion) | **GET** /api2/json/softwareVersion | Get the current software version
[**taxonomyClasses**](AdminApi.md#taxonomyClasses) | **GET** /api2/json/taxonomyClasses/{classifierName} | Print the taxonomy classes valid for the given classifier.


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
> APIClassifiersStatusOut apiStatus()

Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

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

[**APIClassifiersStatusOut**](APIClassifiersStatusOut.md)

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
> APIUsageHistoryOut apiUsageHistory()

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

[**APIUsageHistoryOut**](APIUsageHistoryOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiUsageHistoryAggregate"></a>
# **apiUsageHistoryAggregate**
> APIUsageAggregatedOut apiUsageHistoryAggregate()

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

[**APIUsageAggregatedOut**](APIUsageAggregatedOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="availableServices"></a>
# **availableServices**
> APIServicesOut availableServices()

List of classification services and usage cost in Units per classification (default is 1&#x3D;ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

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

[**APIServicesOut**](APIServicesOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="disable"></a>
# **disable**
> disable(source, disabled)

Activate/deactivate an API Key.

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
var source = "source_example"; // String | The API Key to set as enabled/disabled.
var disabled = true; // Boolean | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.disable(source, disabled, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| The API Key to set as enabled/disabled. | 
 **disabled** | **Boolean**|  | 

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
var source = "source_example"; // String | The API Key to set as learnable/non learnable.
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
 **source** | **String**| The API Key to set as learnable/non learnable. | 
 **learnable** | **Boolean**|  | 

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

<a name="taxonomyClasses"></a>
# **taxonomyClasses**
> APIClassifierTaxonomyOut taxonomyClasses(classifierName)

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

[**APIClassifierTaxonomyOut**](APIClassifierTaxonomyOut.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

