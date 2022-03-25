'use strict'
const makePaymentPage = require('../pageobjects/make-payment.js')
const searchData = require('../fixtures/copy-deck')


    describe('Make payment', function () {
      it("AC-1 make payment", async () => {
        await browser.url('/')
        await makePaymentPage.selecthowcertainRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.selectRmiItemFive()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.selectwhatTypeOfItemIsItRadioBtn()
        await makePaymentPage.enterCertNumber(searchData.content.certNo)
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickOnselectdoYouOwnTheItem()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enterFullnamesDetails('test')
        await makePaymentPage.enterEmailAddress('test@test.com')
        await makePaymentPage.confirmEmailAdress('test@test.com') 
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enteraddressNameorNumber('6')
        await makePaymentPage.enterAddressPostcode('BS16 2LL')
        await makePaymentPage.clickOnFindAddressButton() 
        await makePaymentPage.clickOnConfirmAndContinue()
        await makePaymentPage.selectintentionForItemRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.checkDeclarationCheckbox()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.selectsubmitAfterAgreementRadioBtn()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.enterCardNumberDetails('4444333322221111')
        await makePaymentPage.enterExpiryMonth('01')
        await makePaymentPage.enterExpiryYear('23')
        await makePaymentPage.entercardholderName('test')
        await makePaymentPage.entercvcNumber('123')
        await makePaymentPage.enteraddressLine1('10 satin drive')
        await makePaymentPage.enterACity('Manchester')
        await makePaymentPage.enterpostcode('m97bq')
        await makePaymentPage.clicksubmitPayment()
        await makePaymentPage.clickconfirmPayment()
        await expect(makePaymentPage.pageHeaderOne).toHaveText('Submission received') 
      })
      it("AC-2 make payment", async () => {
        await browser.url('/')
        await makePaymentPage.selecthowcertainRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.selectRmiItemFive()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.selectwhatTypeOfItemIsItRadioBtn()
        await makePaymentPage.enterCertNumber(searchData.content.certNo)
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickOnselectdoYouOwnTheItem()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enterFullnamesDetails('test')
        await makePaymentPage.enterEmailAddress('test@test.com')
        await makePaymentPage.confirmEmailAdress('test@test.com') 
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enteraddressNameorNumber('6')
        await makePaymentPage.enterAddressPostcode('BS16 2LL')
        await makePaymentPage.clickOnFindAddressButton() 
        await makePaymentPage.clickOnConfirmAndContinue()
        await makePaymentPage.selectintentionForItemRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.checkDeclarationCheckbox()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.selectsubmitAfterAgreement2RadioBtn()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.enterCardNumberDetails('4444333322221111')
        await makePaymentPage.enterExpiryMonth('01')
        await makePaymentPage.enterExpiryYear('23')
        await makePaymentPage.entercardholderName('test')
        await makePaymentPage.entercvcNumber('123')
        await makePaymentPage.enteraddressLine1('10 satin drive')
        await makePaymentPage.enterACity('Manchester')
        await makePaymentPage.enterpostcode('m97bq')
        await makePaymentPage.clicksubmitPayment()
        await makePaymentPage.clickCancelPayment()
        await expect(makePaymentPage.pageHeaderOne).toHaveText('Your payment has been cancelled')
      })
      it("AC-3 make payment", async () => {
        await browser.url('/')
        await makePaymentPage.selecthowcertainRadioBtn()
        await makePaymentPage.clickContinueBtn()
        // await ivoryS10Page.selectelephantspeciesRadioBtn()
        // await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.selectRmiItemFive()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.selectwhatTypeOfItemIsItRadioBtn()
        await makePaymentPage.enterCertNumber(searchData.content.certNo)
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickOnselectdoYouOwnTheItem()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enterFullnamesDetails('test')
        await makePaymentPage.enterEmailAddress('test@test.com')
        await makePaymentPage.confirmEmailAdress('test@test.com') 
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.enteraddressNameorNumber('6')
        await makePaymentPage.enterAddressPostcode('BS16 2LL')
        await makePaymentPage.clickOnFindAddressButton() 
        await makePaymentPage.clickOnConfirmAndContinue()
        await makePaymentPage.selectintentionForItemRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.checkDeclarationCheckbox()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.selectsubmitAfterAgreementRadioBtn()
        await makePaymentPage.clickOnSubmitAfterAgreement()
        await makePaymentPage.enterCardNumberDetails('4444333322221111')
        await makePaymentPage.enterExpiryMonth('01')
        await makePaymentPage.enterExpiryYear('23')
        await makePaymentPage.entercardholderName('test')
        await makePaymentPage.entercvcNumber('123')
        await makePaymentPage.enteraddressLine1('10 satin drive')
        await makePaymentPage.enterACity('Manchester')
        await makePaymentPage.enterpostcode('m97bq')
        await makePaymentPage.clicksubmitPayment()
        await makePaymentPage.clickCancelPayment()
        await expect(makePaymentPage.pageHeaderOne).toHaveText('Your payment has been cancelled')
        await makePaymentPage.clicktoSeeyouranswers()
        await expect(makePaymentPage.pageHeaderOne).toHaveText('Check your answers')

      })
    })

    