'use strict'

class copydeckPages {
  // LOCATORS
  get pageTitle () { return $('.govuk-heading-xl') }
  get pageHeaderOne () { return $('.govuk-heading-l') }
  get privacyLink () { return $('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li:nth-child(1) > a') }
  get accessibilityLink () { return $('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li:nth-child(3) > a') }
  get privacyContent () {return $('#main-content > div > div')}
  get cookiesLink () { return $('body > footer > div > div > div.govuk-footer__meta-item.govuk-footer__meta-item--grow > ul > li:nth-child(2) > a') }
  get ivoryTypelink () { return $('#needMoreHelp > summary > span') }
  get ivoryTypeHelpText () { return $('#needMoreHelp > div') }
  get certExemptionLink () { return $('#unknownCertificateNumber > summary > span') }
  get certExemptionHelpText () { return $('#unknownCertificateNumber > div') }
  get whatIsYourIvoryText () { return $('#introPara') }
  get alreadyCertifiedHintText () { return $('#alreadyCertified-3-item-hint') }
  get howCertainhint () { return $('#howCertain-hint') }
  get containElephantIvoryHelpText () { return $('#helpText') }
  get howDoIKnowlink () { return $('#howDoIKnow > summary > span') }
  get howDoIKnowHelpText () { return $('#howDoIKnow > div') }
  get jointResponsibilityText () { return $('#main-content > form > div') }
  get declarationToSellOrHireOutText () { return $('#main-content > form > div > div') }
  get addPhotoOfItemtText () { return $('#main-content > form > div > div') }
 
    // METHODS AND FUNCTIONS
    async  clickOnCookiesLink () {
      await (await this.cookiesLink).click()
    }
    async  clickOnPrivacyLink () {
      await (await this.privacyLink).click()
    }
    async  clickOnAccessibilityLink () {
      await (await this.accessibilityLink).click()
    }
    async getPrivacyText () {
      const element = await this.privacyContent
      return await (element.getText())
    }

    async getPageHeaderOneText () {
      const element = await this.pageHeaderOne
      return await (await element.getText())
    }
    async clickOnIvoryTypelink () {
      await (await this.ivoryTypelink).click()
    
    }

    async getIvoryTypeHelpText () {
      const element = await this.ivoryTypeHelpText
      return await (await element.getText())
    }
    async clickOncertExemptionlink () {
      await (await this.certExemptionLink).click()
    
    }
    async clickOnhowDoIKnowlink () {
      await (await this. howDoIKnowlink).click()
    
    }
  
    async getcertExemptionHelpText () {
      const element = await this.certExemptionHelpText
      return await (await element.getText())
    }
    async getwhatIsYourIvoryText () {
      const element = await this.whatIsYourIvoryText
      return await (await element.getText())
    }
    async getalreadyCertifiedHintText () {
      const element = await this.alreadyCertifiedHintText
      return await (await element.getText())
    }
    async gethowCertainhintText () {
      const element = await this.howCertainhint
      return await (await element.getText())
    }
    async getcontainElephantIvoryHelpText () {
      const element = await this.containElephantIvoryHelpText
      return await (await element.getText())
    }
    async gethowDoIKnowHelpText () {
      const element = await this.howDoIKnowHelpText
      return await (await element.getText())
    }
    async getjointResponsibilityText () {
      const element = await this.jointResponsibilityText
      return await (await element.getText())
    }
    async getdeclarationToSellOrHireOutText () {
      const element = await this.declarationToSellOrHireOutText
      return await (await element.getText())
    }
    async getaddPhotoOfItemtText () {
      const element = await this.addPhotoOfItemtText
      return await (await element.getText())
    }

  
  }
  module.exports = new copydeckPages();
  

  