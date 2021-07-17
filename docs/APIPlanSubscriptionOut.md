# NamSorApiV2.APIPlanSubscriptionOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | User API Key. | [optional] 
**planStarted** | **Number** | Datetime when the user subscribed to the current plan. | [optional] 
**priorPlanStarted** | **Number** | Datetime when the user subscribed to the prior plan. | [optional] 
**planEnded** | **Number** | Datetime when the user ended the plan. | [optional] 
**taxRate** | **Number** | Applicable tax rate for the plan. | [optional] 
**planName** | **String** | Current plan name. | [optional] 
**planBaseFeesKey** | **String** | Current plan key (as in Stripe product). | [optional] 
**planStatus** | **String** | Plan status. | [optional] 
**planQuota** | **Number** | Current plan quota in quantity of units (NB: some API use several units per name). | [optional] 
**priceUSD** | **Number** | Current plan monthly price expressed in USD (includes a free quota). | [optional] 
**priceOverageUSD** | **Number** | Current plan price for overages expressed in USD (extra price per unit above the free quota). | [optional] 
**price** | **Number** | Current plan price for overages expressed in Currency (extra price per unit above the free quota). | [optional] 
**priceOverage** | **Number** | Current plan price for overages expressed in Currency (extra price per unit above the free quota). | [optional] 
**currency** | **String** | Current plan Currency for prices. | [optional] 
**currencyFactor** | **Number** | For USD, GBP, EUR - the factor is 1. | [optional] 
**stripeCustomerId** | **String** | Stripe customer identifier. | [optional] 
**stripeStatus** | **String** | Stripe status ex active. | [optional] 
**stripeSubscription** | **String** | Stripe subscription identifier. | [optional] 
**userId** | **String** | Internal user identifier. | [optional] 


