# NamSorApiV2.FirstLastNameDiasporaedOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**firstName** | **String** | The first name (also known as given name) | [optional] 
**lastName** | **String** | The last name (also known as family name, or surname) | [optional] 
**score** | **Number** | Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**ethnicityAlt** | **String** | The second best alternative ethnicity | [optional] 
**ethnicity** | **String** | The most likely ethnicity | [optional] 
**lifted** | **Boolean** | Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true. | [optional] 
**countryIso2** | **String** | From input data, the countryIso2 of geographic context (US,CA etc.) | [optional] 
**ethnicitiesTop** | **[String]** | List most likely ethnicities (top 10) | [optional] 


