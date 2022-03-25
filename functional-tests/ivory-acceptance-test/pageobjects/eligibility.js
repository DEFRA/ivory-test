'use strict'

class eligibilityPage {
  // LOCATORS
  get pageHeaderOne () { return $('h1') }
  get continueButton () { return $('button[id="continue"]') }
  get pageTitle () { return $('#pageTitle') }
  get selecthowcertain2Radio () {return $('#howCertain-2')}
  get selectalreadyCertifiedRadio () {return $('#alreadyCertified')}
  get IdontknowRadioBtn () {return $('#containElephantIvory-3')}
  get containElephantIvoryRadioBtn () {return $('#containElephantIvory')}
  get sellingToMuseum2RadioBtn () {return $('#sellingToMuseum-2')}
  get isItAMusicalInstrument2RadioBtn () {return $('#isItAMusicalInstrument-2')}
  get lessThan10IvoryRadioBtn () {return $('#lessThan10Ivory')}
  get madeBefore1947RadioBtn () {return $('#madeBefore1947')}
  get ivoryAdded2RadioBtn () {return $('#ivoryAdded-2')}

    // METHODS AND FUNCTIONS
   
    async selecthowCertain2RadioBtn () {
      await (await this.selecthowcertain2Radio).click()
    }
    async selectIdontknowRadioBtn () {
      await (await this.IdontknowRadioBtn).click()
    }
    async selectcontainElephantIvoryRadioBtn () {
      await (await this.containElephantIvoryRadioBtn).click()
    }
    async selectsellingToMuseum2RadioBtn () {
      await (await this.sellingToMuseum2RadioBtn).click()
    }
    async selectisItAMusicalInstrument2RadioBtn () {
      await (await this.isItAMusicalInstrument2RadioBtn).click()
    }
    async selectlessThan10IvoryRadioBtn () {
      await (await this.lessThan10IvoryRadioBtn).click()
    }
    async selectmadeBefore1947RadioBtn () {
      await (await this.madeBefore1947RadioBtn).click()
    }
    async selectivoryAdded2RadioBtn () {
      await (await this.ivoryAdded2RadioBtn).click()
    }

  async getPageHeaderOne () {
    const element = await this.pageHeaderOne
    return await (await element.getText())
  }

  async getPageTitle () {    
    const element = await this.pageTitle     
    return await (await element.getText())  
  }

  
}
module.exports = new eligibilityPage();
