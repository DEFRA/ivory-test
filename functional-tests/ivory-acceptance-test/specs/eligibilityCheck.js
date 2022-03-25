'use strict'
const eligibilityPage = require('../pageobjects/eligibility.js')
const makePaymentPage = require('../pageobjects/make-payment.js')



describe('Eligibility check', function () {
    it("AC-1 eligibility check", async () => {
      await browser.url('/')
      await eligibilityPage.selecthowCertain2RadioBtn()
      await makePaymentPage.clickContinueBtn()
      await eligibilityPage.selectIdontknowRadioBtn()
      await makePaymentPage.clickContinueBtn()
      await expect(eligibilityPage.pageHeaderOne).toHaveText('You cannot continue')
    })
    it("AC-2 eligibility check", async () => {
        await browser.url('/')
        await eligibilityPage.selecthowCertain2RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectIdontknowRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await expect(eligibilityPage.pageHeaderOne).toHaveText('Dealing in items containing ivory or made of ivory')
      })
      it("AC-3 eligibility check", async () => {
        await browser.url('/')
        await eligibilityPage.selecthowCertain2RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectcontainElephantIvoryRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectsellingToMuseum2RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectisItAMusicalInstrument2RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectlessThan10IvoryRadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectmadeBefore1947RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await eligibilityPage.selectivoryAdded2RadioBtn()
        await makePaymentPage.clickContinueBtn()
        await makePaymentPage.clickContinueBtn()
        await expect(eligibilityPage.pageTitle).toHaveText('Both the owner and applicant are jointly responsible for providing accurate information')
      })

  })




