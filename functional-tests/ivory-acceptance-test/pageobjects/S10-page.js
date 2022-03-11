'use strict'
const pathfile = require('path');

class s10Page {
  // LOCATORS
  get pageHeaderOne () { return $('h1') }
  get clickOnUpload () { return $('#files') }
  get distinguishingFeatures () { return $('#distinguishingFeatures') }
  get whatIsItem () { return $('#whatIsItem') }
  get doYouOwnTheItem () { return $('#doYouOwnTheItem') }
  get ivoryVolume () { return $('#ivoryVolume') }
  get ivoryIsIntegral () { return $('#ivoryIsIntegral') }
  get whereIsIvory () { return $('#whereIsIvory') }
  get hasDistinguishingFeatures () { return $('#hasDistinguishingFeatures') }
  get ivoryAge7 () { return $('#ivoryAge-7') }
  get ivoryAge8 () { return $('#ivoryAge-8') }
  get otherReason () { return $('#otherReason') }
  // get pageTitle () { return $('#pageTitle') }
  get selectwhatTypeOfItemIsIt2Radio () {return $('#whatTypeOfItemIsIt-2')}
  get selectwhatTypeOfItemIsIt4Radio () {return $('#whatTypeOfItemIsIt-4')}
  get selectwhatTypeOfItemIsIt5Radio () {return $('#whatTypeOfItemIsIt-5')}
  get whatTypeOfItemIsItRadio () {return $('#whatTypeOfItemIsIt')}
  get whatTypeOfItemIsIt3Radio () {return $('#whatTypeOfItemIsIt-3')}
  get whereMadeRadio () {return $('#whereMade')}
  get whenMadeRadio () {return $('#whenMade')}
  get whyRmi () {return $('#whyRmi')}
  get wantToAddDocuments2 () {return $('#wantToAddDocuments-2')}



  // get selectalreadyCertifiedRadio () {return $('#alreadyCertified')}
  // get IdontknowRadioBtn () {return $('#containElephantIvory-3')}
  // get containElephantIvoryRadioBtn () {return $('#containElephantIvory')}
  // get sellingToMuseum2RadioBtn () {return $('#sellingToMuseum-2')}
  // get isItAMusicalInstrument2RadioBtn () {return $('#isItAMusicalInstrument-2')}
  // get lessThan10IvoryRadioBtn () {return $('#lessThan10Ivory')}
  // get madeBefore1947RadioBtn () {return $('#madeBefore1947')}
  // get ivoryAdded2RadioBtn () {return $('#ivoryAdded-2')}


    // METHODS AND FUNCTIONS
    async enterwhereMade (text) {
      await (await this.whereMadeRadio).setValue(text)
    }
    async wantToAddDocuments2Radio () {
      await (await this.wantToAddDocuments2).click()
    }
  
    async enterwhenMadeRadio (text) {
      await (await this.whenMadeRadio).setValue(text)
    }
    async enterwhyRmi (text) {
      await (await this.whyRmi).setValue(text)
    }
   
    async  selectwhatTypeOfItemIsItRadioRadioBtn () {
      await (await this.whatTypeOfItemIsItRadio).click()
    }

    async  selectwhatTypeOfItemIsIt3RadioRadioBtn () {
      await (await this.whatTypeOfItemIsIt3Radio).click()
    }
    
    async selectivoryAge7oRadioBtn () {
      await (await this.ivoryAge7).click()
    }
    async selectivoryAge8oRadioBtn () {
      await (await this.ivoryAge8).click()
    }

    async selectdoYouOwnTheItemRadioBtn () {
      await (await this.doYouOwnTheItem).click()
    }
    
    async selectotherReasonRadioBtn (text) {
      await (await this.otherReason).setValue(text)
    }
   
    async selectwhatTypeOfItemIsIt2RadioRadioBtn () {
      await (await this.selectwhatTypeOfItemIsIt2Radio).click()
    }
    async selectwhatTypeOfItemIsIt5RadioRadioBtn () {
      await (await this.selectwhatTypeOfItemIsIt5Radio).click()
    }
    async  selectwhatTypeOfItemIsIt4RadioRadioBtn () {
      await (await this.selectwhatTypeOfItemIsIt4Radio).click()
    }

    async selectivoryVolumeRadioBtn () {
      await (await this.ivoryVolume).click()
    }
    async selectivoryIsIntegralRadioBtn () {
      await (await this.ivoryIsIntegral).click()
    }

    async selecthasDistinguishingFeaturesRadioBtn () {
      await (await this.hasDistinguishingFeatures).click()
    }
    async enterwhatIsItem (text) {
      await (await this.whatIsItem).setValue(text)
    }
    async enterdistinguishingFeatures (text) {
      await (await this.distinguishingFeatures).setValue(text)
    }
    
    async enterwhereIsIvory (text) {
      await (await this.whereIsIvory).setValue(text)
    }
   
    async clickOnUploadBtn () {
       const filePath = await pathfile.join(__dirname, '../fixtures/Elephant.jpg');
       const remote = await browser.uploadFile(filePath)
       await this.clickOnUpload.setValue(remote)
    }
  
}
module.exports = new s10Page();

