# NamSorApiV2.APIClassifierOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifierName** | **String** | The classifier name | [optional] 
**serving** | **Boolean** | True if the classifier is serving requests (has reached minimal learning, is not shutting down) | [optional] 
**learning** | **Boolean** | True if the classifier is learning | [optional] 
**shuttingDown** | **Boolean** | True if the classifier is shutting down | [optional] 
**probabilityCalibrated** | **Boolean** | True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1) | [optional] 


