describe('EligibilityChecker',function(){
    it('EligibilityChecker',function(){
        
        cy.visit('please add BASE URL config');
        cy.get('[type="radio"]').check('I’d like some help to work this out')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)

      //Contain Elephant Ivory - Don't know - Cannot Continue

        cy.get('[type="radio"]').check('I don’t know')
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
      // Don't need service
        
        cy.title()
        cy.wait(2000)

    })

})
