'use strict'
const pathfile = require('path');

class makePaymentPage {
  // LOCATORS
  get pageHeaderOne () { return $('h1') }
  get cancelPayment () { return $('#cancel-payment') }
  get continueButton () { return $('button[id="continue"]') }
  get pageTitle () { return $('head') }
  get rmiItemFive () { return $('#whatTypeOfItemIsIt-5') }
  get selectRadioIndex1 () {return $('[type="radio"].govuk-radios__input')}
  get enterCertNo () { return $('#certificateNumber') }
  get alreadyCertified3 () { return $('#alreadyCertified-3') }
  get enterfullname () { return $('input#fullName.govuk-input') }
  get enterEmailAdress () { return $('#emailAddress') }
  get headerOne () {return $('h1.govuk-fieldset__heading')}
  get confirmEmailAddress () {return $('#confirmEmailAddress')}
  get enterNameoraddressnumber () {return $('#nameOrNumber')}
  get enterPostcode () {return $('#postcode')}
  get clickOnFindAddress () {return $('#findAddress')}
  get confirmAndContinue () {return $('#confirmAndContinue')}
  get checkDeclaration () {return $('#agree')}
  get submitAfterAgreement () {return $('#callToAction')}
  get shareDetailsOfItem () {return $('#shareDetailsOfItem')}
  get shareDetailsOfItem2 () {return $('#shareDetailsOfItem-2')}
  get enterCardNumber () {return $('#card-no')}
  get appliedBefore2 () {return $('#appliedBefore-2')}
  get appliedBefore () {return $('#appliedBefore')}
  get appliedBefore3 () {return $('#alreadyCertified-3')}
  get selecthowcertainRadio () {return $('#howCertain')}
  get selecthowcertain2Radio () {return $('#howCertain-2')}
  get selectwhatTypeOfItemIsIt () {return $('input#alreadyCertified.govuk-radios__input')}
  get selectnowhatTypeOfItemIsIt () {return $('#pageTitle > div > div > div:nth-child(3) > label')}
  get selectalreadyCertifiedRadio () {return $('#alreadyCertified')}
  get selectdoYouOwnTheItem () {return $('#doYouOwnTheItem')}
  get selectintentionForItem () {return $('#intentionForItem')}
  get expiryMonth () {return $('#expiry-month')}
  get revokedCertificateNumber () {return $('#revokedCertificateNumber')}
  get previousApplicationNumber () {return $('#previousApplicationNumber')}
  get expiryYear () {return $('#expiry-year')}
  get cardholderName () {return $('#cardholder-name')}
  get cvc () {return $('#cvc')}
  get addressLine1 () {return $('#address-line-1')}
  get city () {return $('#address-city')}
  get postcode  () {return $('#address-postcode')}
  get submitPayment () {return $('#submit-card-details')}
  get confirmPayment () {return $('#confirm')}
  get returnUrl () {return $('#return-url')}
  get IdontknowRadioBtn () {return $('#containElephantIvory-3')}



    // METHODS AND FUNCTIONS

    async clicktoSeeyouranswers() {
      await (await this.returnUrl ).click()
     }
    async clickCancelPayment() {
      await (await this.cancelPayment ).click()
     }
    async clickconfirmPayment() {
      await (await this.confirmPayment ).click()
     }
    async clicksubmitPayment() {
      await (await this.submitPayment).click()
     }
     async clickonappliedBefore2 () {
      await (await this.appliedBefore2).click()
     }
     async clickonappliedBefore () {
      await (await this.appliedBefore).click()
     }
     async clickonappliedBefore3 () {
      await (await this.appliedBefore3).click()
     }
    async enterpostcode(text) {
      await (await this.postcode).setValue(text)
     }
    async enterACity(text) {
      await (await this.city).setValue(text)
     }
    async enteraddressLine1(text) {
      await (await this.addressLine1).setValue(text)
     }
    async enterExpiryMonth(text) {
      await (await this.expiryMonth).setValue(text)
     }
     async entercvcNumber(text) {
      await (await this.cvc).setValue(text)
     }
     async entercardholderName(text) {
      await (await this.cardholderName).setValue(text)
     }

     async enterExpiryYear(text) {
      await (await this.expiryYear).setValue(text)
     }
    async getPageTitle () {    
      const element = await this.pageTitle     
      return await (await element.getText())  
    }
    async clickContinueBtn () {
      await (await this.continueButton).click()
    }
    async  selectintentionForItemRadioBtn () {
      await (await this.selectintentionForItem).click()
    }

    async selectwhatTypeOfItemIsItRadioBtn () {
      await (await this.selectwhatTypeOfItemIsIt).click()
    }
    async selectnowhatTypeOfItemIsItRadioBtn () {
      await (await this.selectnowhatTypeOfItemIsIt).click()
    }


    async selectalreadyCertifiedRadioBtn () {
      await (await this.selectalreadyCertifiedRadio).click()
    }
    async selectsubmitAfterAgreementRadioBtn () {
      await (await this.shareDetailsOfItem).click()
    }
    async selectsubmitAfterAgreement2RadioBtn () {
      await (await this.shareDetailsOfItem2).click()
    }
    async selecthowcertainRadioBtn () {
      await (await this.selecthowcertainRadio).click()
    }
    async selecthowCertain2RadioBtn () {
      await (await this.selecthowcertain2Radio).click()
    }
    async selectIdontknowRadioBtn () {
      await (await this.IdontknowRadioBtn).click()
    }
   
  async getPageHeaderOne () {
    const element = await this.pageHeaderOne
    return await (await element.getText())
  }

  async getPageTitle () {    
    const element = await this.pageTitle     
    return await (await element.getText())  
  }

  getPageBodyText () {
    this.pageBodyText.waitForDisplayed()
    return this.pageBodyText.getText()
  }

  async selectRmiItemFive() {
    await (await this.rmiItemFive).click()
  }

  async selectFirstRadioItem() {
    await (await this.selectRadioIndex1).click()
  }

  async enterCertNumber(text) {
   await (await this.enterCertNo).setValue(text)
  }
  async enterCertNumberToRevoke() {
    await (await this.alreadyCertified3).click()
   }
   async revokeCertNumber(text) {
    await (await this.revokedCertificateNumber).setValue(text)
   }
   async enterpreviousApplicationNumber(text) {
    await (await this.previousApplicationNumber).setValue(text)
   }



  async enterCardNumberDetails(text) {
    await (await this.enterCardNumber ).setValue(text)
   }
  
  async enterFullnamesDetails(text) {
    await (await this.enterfullname).setValue(text)
  }

  async clickOnFindAddressButton() {
    await (await this.clickOnFindAddress).click()
  }

  async enterEmailAddress (text) {
    await (await this.enterEmailAdress).setValue(text)
  }

  async confirmEmailAdress (text) {
    await (await this.confirmEmailAddress).setValue(text)
  }

  async enteraddressNameorNumber (text) {
    await (await this.enterNameoraddressnumber).setValue(text)
  }

  async enterAuthCode (text) {
    await (await this.authCode).clearValue()
    await (await this.authCode).setValue(text)
  }
  async clickOnConfirmAndContinue  () {
    await (await this.confirmAndContinue ).click()
  }

  async clickSignOut () {
    await (await this.signOut).click()
  }

  async selectEmailOption () {
    await (await this.emailRadio).click()
  }

  async selectTelephoneOption () {
    await (await this.telephoneRadio).click()
  }

  async clickOnContinue () {
    await (await this.continue).click()

  }

  async enterAddressPostcode (text) {
    await (await this.enterPostcode).setValue(text)
  
  }

  async clickSelectPlace () {
    await (await this.selectedPlace).isSelected()
    await (await this.continue).scrollIntoView()
    await (await this.continue).click()
  }
  
  async selectRadioIndexOne()
  {
    await (await this.selectRadioIndex1).selectByIndex(0)
  }
 async checkDeclarationCheckbox()
  {
    await (await this.checkDeclaration).click()
  }
  
  async clickOnselectdoYouOwnTheItem()
  {
    await (await this.selectdoYouOwnTheItem).click()
  }
  async clickOnSubmitAfterAgreement()
  {
    await (await this.submitAfterAgreement).click()
  }

}
module.exports = new makePaymentPage();
