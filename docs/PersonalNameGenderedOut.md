# NamSorApiV2.PersonalNameGenderedOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** | The input name | [optional] 
**likelyGender** | **String** | Most likely gender | [optional] 
**genderScale** | **Number** | Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value | [optional] 
**score** | **Number** | Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**probabilityCalibrated** | **Number** | The calibrated probability for inferred gender to have been guessed correctly. | [optional] 


<a name="LikelyGenderEnum"></a>
## Enum: LikelyGenderEnum


* `male` (value: `"male"`)

* `female` (value: `"female"`)

* `unknown` (value: `"unknown"`)




