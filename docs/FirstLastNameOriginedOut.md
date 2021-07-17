# NamSorApiV2.FirstLastNameOriginedOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**firstName** | **String** | The first name (also known as given name) | [optional] 
**lastName** | **String** | The last name (also known as family name, or surname) | [optional] 
**countryOrigin** | **String** | Most likely country of Origin | [optional] 
**countryOriginAlt** | **String** | Second best alternative : country of Origin | [optional] 
**countriesOriginTop** | **[String]** | List countries of Origin (top 10) | [optional] 
**score** | **Number** | Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**regionOrigin** | **String** | Most likely region of Origin (based on countryOrigin ISO2 code) | [optional] 
**topRegionOrigin** | **String** | Most likely top region of Origin (based on countryOrigin ISO2 code) | [optional] 
**subRegionOrigin** | **String** | Most likely sub region of Origin (based on countryOrigin ISO2 code) | [optional] 
**probabilityCalibrated** | **Number** | The calibrated probability for countryOrigin to have been guessed correctly. | [optional] 
**probabilityAltCalibrated** | **Number** | The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. | [optional] 


