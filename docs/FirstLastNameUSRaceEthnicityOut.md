# NamSorApiV2.FirstLastNameUSRaceEthnicityOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**firstName** | **String** | The first name (also known as given name) | [optional] 
**lastName** | **String** | The last name (also known as family name, or surname) | [optional] 
**raceEthnicityAlt** | **String** | Second most likely US &#39;race&#39;/ethnicity | [optional] 
**raceEthnicity** | **String** | Most likely US &#39;race&#39;/ethnicity | [optional] 
**score** | **Number** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**raceEthnicitiesTop** | **[String]** | List &#39;race&#39;/ethnicities | [optional] 
**probabilityCalibrated** | **Number** | The calibrated probability for raceEthnicity to have been guessed correctly. | [optional] 
**probabilityAltCalibrated** | **Number** | The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. | [optional] 


<a name="RaceEthnicityAltEnum"></a>
## Enum: RaceEthnicityAltEnum


* `W_NL` (value: `"W_NL"`)

* `HL` (value: `"HL"`)

* `A` (value: `"A"`)

* `B_NL` (value: `"B_NL"`)

* `AI_AN` (value: `"AI_AN"`)

* `PI` (value: `"PI"`)




<a name="RaceEthnicityEnum"></a>
## Enum: RaceEthnicityEnum


* `W_NL` (value: `"W_NL"`)

* `HL` (value: `"HL"`)

* `A` (value: `"A"`)

* `B_NL` (value: `"B_NL"`)

* `AI_AN` (value: `"AI_AN"`)

* `PI` (value: `"PI"`)




