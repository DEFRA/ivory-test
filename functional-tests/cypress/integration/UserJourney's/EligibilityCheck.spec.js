describe('EligibilityChecker',function(){
    it('EligibilityChecker',function(){
        
        cy.visit('please add BASE URL config');
        cy.get('[type="radio"]').check('I’d like some help to work this out')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)

      //Contain Elephant Ivory - Yes

        cy.get('[type="radio"].govuk-radios__input').first().check()
        cy.get('button[id="continue"]').click()
        cy.wait(2000)

    //Selling to museum
        cy.get('[type="radio"]').check('No')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
  // Is it a musical Instrument
        cy.get('[type="radio"]').check('No')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
 // Less then 10%

        cy.get('[type="radio"]').check('Yes')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)

// Made before 1947
        cy.get('[type="radio"]').check('Yes')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
// ivory Added

        cy.get('[type="radio"]').check('No')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
// Can Continue

        cy.get('button[id="continue"]').click()
        cy.wait(2000)

    })

})
