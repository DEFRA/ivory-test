'use strict'

class revokePage {
  // LOCATORS
  get pageHeaderOne () { return $('h1') }
  get whatIsItem () { return $('#whatIsItem') }
  get selectwhatTypeOfItemIsIt5Radio () {return $('#whatTypeOfItemIsIt-5')}

    // METHODS AND FUNCTIONS

    async  selectwhatTypeOfItemIsItRadioRadioBtn () {
      await (await this.whatTypeOfItemIsItRadio).click()
    }

    async  selectwhatTypeOfItemIsIt3RadioRadioBtn () {
      await (await this.whatTypeOfItemIsIt3Radio).click()
    }
  }
  module.exports = new revokePage();