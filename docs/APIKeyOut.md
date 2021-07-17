# NamSorApiV2.APIKeyOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | The user API Key. | [optional] 
**userId** | **String** | The user identifier. | [optional] 
**admin** | **Boolean** | The API Key has admin role. | [optional] 
**vetted** | **Boolean** | The API Key is vetted (assumed truthful) for machine learning. | [optional] 
**learnable** | **Boolean** | The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable&#x3D;false and anonymized&#x3D;true for highest privacy (ie. to forget data as it&#39;s processed). | [optional] 
**anonymized** | **Boolean** | The API Key is anonymized (using SHA-252 digest for logging). Set learnable&#x3D;false and anonymized&#x3D;true for highest privacy (ie. to forget data as it&#39;s processed). | [optional] 
**partner** | **Boolean** | The API Key has partner role. | [optional] 
**striped** | **Boolean** | The API Key is associated to a valid Stripe account. | [optional] 
**corporate** | **Boolean** | The API Key has role corporate (ex SWIFT payments instead of Stripe payments). | [optional] 
**disabled** | **Boolean** | The API Key is temporarily or permanently disabled. | [optional] 


