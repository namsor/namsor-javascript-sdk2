# NamSorApiV2.PersonalNameParsedOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** | The input name | [optional] 
**nameParserType** | **String** | Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. | [optional] 
**nameParserTypeAlt** | **String** | Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. | [optional] 
**firstLastName** | [**FirstLastNameOut**](FirstLastNameOut.md) |  | [optional] 
**score** | **Number** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 


