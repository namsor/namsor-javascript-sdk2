# NamSorApiV2.APIUsageAggregatedOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeUnit** | **String** | Time unit is DAY, WEEK or MONTH depending on prior usage | [optional] 
**periodStart** | **Number** | Start datetime of the reporting period | [optional] 
**periodEnd** | **Number** | End datetime of the reporting period | [optional] 
**totalUsage** | **Number** | Total usage in the current period | [optional] 
**historyTruncated** | **Boolean** | If the history was truncaded due to data limit | [optional] 
**data** | **[[Number]]** | Data points : usage per DAY, WEEK or MONTH and per apiService | [optional] 
**colHeaders** | **[String]** | apiServices as column headers  | [optional] 
**rowHeaders** | **[String]** | dates as row headers  | [optional] 


