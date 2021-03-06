/**
 * NamSor API v2
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 
 *
 * OpenAPI spec version: 2.0.13
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
    instance = new NamSorApiV2.InvoiceOut();
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

  describe('InvoiceOut', function() {
    it('should create an instance of InvoiceOut', function() {
      // uncomment below and update the code to test InvoiceOut
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be.a(NamSorApiV2.InvoiceOut);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoiceId")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property isStriped (base name: "isStriped")', function() {
      // uncomment below and update the code to test the property isStriped
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property stripeCustomerId (base name: "stripeCustomerId")', function() {
      // uncomment below and update the code to test the property stripeCustomerId
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property amountDue (base name: "amountDue")', function() {
      // uncomment below and update the code to test the property amountDue
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property amountPaid (base name: "amountPaid")', function() {
      // uncomment below and update the code to test the property amountPaid
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property amountRemaining (base name: "amountRemaining")', function() {
      // uncomment below and update the code to test the property amountRemaining
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property attempted (base name: "attempted")', function() {
      // uncomment below and update the code to test the property attempted
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property invoicePdf (base name: "invoicePdf")', function() {
      // uncomment below and update the code to test the property invoicePdf
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property periodStart (base name: "periodStart")', function() {
      // uncomment below and update the code to test the property periodStart
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property periodEnd (base name: "periodEnd")', function() {
      // uncomment below and update the code to test the property periodEnd
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property receiptNumber (base name: "receiptNumber")', function() {
      // uncomment below and update the code to test the property receiptNumber
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property invoiceStatus (base name: "invoiceStatus")', function() {
      // uncomment below and update the code to test the property invoiceStatus
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "subTotal")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property taxPercent (base name: "taxPercent")', function() {
      // uncomment below and update the code to test the property taxPercent
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new NamSorApiV2.InvoiceOut();
      //expect(instance).to.be();
    });

  });

}));
