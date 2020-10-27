/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.10
 * Contact: contact@namsor.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NamSorApiV2);
  }
}(this, function(expect, NamSorApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NamSorApiV2.AdminApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AdminApi', function() {
    describe('addCredits', function() {
      it('should call addCredits successfully', function(done) {
        //uncomment below and update the code to test addCredits
        //instance.addCredits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('anonymize', function() {
      it('should call anonymize successfully', function(done) {
        //uncomment below and update the code to test anonymize
        //instance.anonymize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiStatus', function() {
      it('should call apiStatus successfully', function(done) {
        //uncomment below and update the code to test apiStatus
        //instance.apiStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUsage', function() {
      it('should call apiUsage successfully', function(done) {
        //uncomment below and update the code to test apiUsage
        //instance.apiUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUsageHistory', function() {
      it('should call apiUsageHistory successfully', function(done) {
        //uncomment below and update the code to test apiUsageHistory
        //instance.apiUsageHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUsageHistoryAggregate', function() {
      it('should call apiUsageHistoryAggregate successfully', function(done) {
        //uncomment below and update the code to test apiUsageHistoryAggregate
        //instance.apiUsageHistoryAggregate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('availablePlans', function() {
      it('should call availablePlans successfully', function(done) {
        //uncomment below and update the code to test availablePlans
        //instance.availablePlans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('availablePlans1', function() {
      it('should call availablePlans1 successfully', function(done) {
        //uncomment below and update the code to test availablePlans1
        //instance.availablePlans1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('availableServices', function() {
      it('should call availableServices successfully', function(done) {
        //uncomment below and update the code to test availableServices
        //instance.availableServices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingCurrencies', function() {
      it('should call billingCurrencies successfully', function(done) {
        //uncomment below and update the code to test billingCurrencies
        //instance.billingCurrencies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingHistory', function() {
      it('should call billingHistory successfully', function(done) {
        //uncomment below and update the code to test billingHistory
        //instance.billingHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('billingInfo', function() {
      it('should call billingInfo successfully', function(done) {
        //uncomment below and update the code to test billingInfo
        //instance.billingInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('charge', function() {
      it('should call charge successfully', function(done) {
        //uncomment below and update the code to test charge
        //instance.charge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('corporateKey', function() {
      it('should call corporateKey successfully', function(done) {
        //uncomment below and update the code to test corporateKey
        //instance.corporateKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('debugLevel', function() {
      it('should call debugLevel successfully', function(done) {
        //uncomment below and update the code to test debugLevel
        //instance.debugLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('flush', function() {
      it('should call flush successfully', function(done) {
        //uncomment below and update the code to test flush
        //instance.flush(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invalidateCache', function() {
      it('should call invalidateCache successfully', function(done) {
        //uncomment below and update the code to test invalidateCache
        //instance.invalidateCache(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('learnable', function() {
      it('should call learnable successfully', function(done) {
        //uncomment below and update the code to test learnable
        //instance.learnable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('namsorCounter', function() {
      it('should call namsorCounter successfully', function(done) {
        //uncomment below and update the code to test namsorCounter
        //instance.namsorCounter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentInfo', function() {
      it('should call paymentInfo successfully', function(done) {
        //uncomment below and update the code to test paymentInfo
        //instance.paymentInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('procureKey', function() {
      it('should call procureKey successfully', function(done) {
        //uncomment below and update the code to test procureKey
        //instance.procureKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redeployUI', function() {
      it('should call redeployUI successfully', function(done) {
        //uncomment below and update the code to test redeployUI
        //instance.redeployUI(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redeployUI1', function() {
      it('should call redeployUI1 successfully', function(done) {
        //uncomment below and update the code to test redeployUI1
        //instance.redeployUI1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserAccount', function() {
      it('should call removeUserAccount successfully', function(done) {
        //uncomment below and update the code to test removeUserAccount
        //instance.removeUserAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserAccountOnBehalf', function() {
      it('should call removeUserAccountOnBehalf successfully', function(done) {
        //uncomment below and update the code to test removeUserAccountOnBehalf
        //instance.removeUserAccountOnBehalf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shutdown', function() {
      it('should call shutdown successfully', function(done) {
        //uncomment below and update the code to test shutdown
        //instance.shutdown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('softwareVersion', function() {
      it('should call softwareVersion successfully', function(done) {
        //uncomment below and update the code to test softwareVersion
        //instance.softwareVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sourceStats', function() {
      it('should call sourceStats successfully', function(done) {
        //uncomment below and update the code to test sourceStats
        //instance.sourceStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stats', function() {
      it('should call stats successfully', function(done) {
        //uncomment below and update the code to test stats
        //instance.stats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stripeConnect', function() {
      it('should call stripeConnect successfully', function(done) {
        //uncomment below and update the code to test stripeConnect
        //instance.stripeConnect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribePlan', function() {
      it('should call subscribePlan successfully', function(done) {
        //uncomment below and update the code to test subscribePlan
        //instance.subscribePlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribePlanOnBehalf', function() {
      it('should call subscribePlanOnBehalf successfully', function(done) {
        //uncomment below and update the code to test subscribePlanOnBehalf
        //instance.subscribePlanOnBehalf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('taxonomyClasses', function() {
      it('should call taxonomyClasses successfully', function(done) {
        //uncomment below and update the code to test taxonomyClasses
        //instance.taxonomyClasses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBillingInfo', function() {
      it('should call updateBillingInfo successfully', function(done) {
        //uncomment below and update the code to test updateBillingInfo
        //instance.updateBillingInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLimit', function() {
      it('should call updateLimit successfully', function(done) {
        //uncomment below and update the code to test updateLimit
        //instance.updateLimit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentDefault', function() {
      it('should call updatePaymentDefault successfully', function(done) {
        //uncomment below and update the code to test updatePaymentDefault
        //instance.updatePaymentDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userInfo', function() {
      it('should call userInfo successfully', function(done) {
        //uncomment below and update the code to test userInfo
        //instance.userInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyEmail', function() {
      it('should call verifyEmail successfully', function(done) {
        //uncomment below and update the code to test verifyEmail
        //instance.verifyEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyRemoveEmail', function() {
      it('should call verifyRemoveEmail successfully', function(done) {
        //uncomment below and update the code to test verifyRemoveEmail
        //instance.verifyRemoveEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('vet', function() {
      it('should call vet successfully', function(done) {
        //uncomment below and update the code to test vet
        //instance.vet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
