
describe('S10 - Museum',function(){
    it('S10 - Museum',function(){
        
        cy.visit('please add BASE URL config');
        cy.get('[type="radio"].govuk-radios__input').first().check()
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
        //Item type //
        //cy.get('[type="radio"].govuk-radios__input').check("Musical instrument made before 1975 with less than 20% ivory")
        cy.get('#whatTypeOfItemIsIt-4').check()
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
        // Can Continue //
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
        //Legal Halt//
        cy.get('button[id="continue"]').click()
        cy.wait(2000)
        
        //Photo upload
  
        const yourFixturePath = 'Elephant.jpg';
        cy.get('#files').attachFile(yourFixturePath);
        cy.get("#continue").click();
        cy.wait(2000)
        
        //Your photos
        cy.get("#continue").click();
      
        //Tell us about the item
  
        cy.get('#whatIsItem').type('Ivory jewellery');
        cy.get('#whereIsIvory').type('necklace');
        cy.get('#uniqueFeatures').type('very unique 15th century item');
        cy.get("#continue").click();

  
        // //Ivory volume
        // cy.get('[type="radio"].govuk-radios__input').first().check()
        // cy.get("#continue").click();

        // //Ivory Integral
        // cy.get('[type="radio"].govuk-radios__input').first().check()
        // cy.get("#continue").click();
       
        // //Ivory age
        // cy.get('input[type="checkbox"]').check()
        // cy.get("#continue").click();
        // cy.get('#otherReason').type('I have so many reasons');
        // cy.get("#continue").click();
  
        //Who Owns the item
        cy.get('[type="radio"].govuk-radios__input').first().check()
        cy.get("#continue").click();
  
        //Contact details
        cy.get('#fullName').type('Shaun Test');
        cy.get('#emailAddress').type('joe.bloggs@email.com');
        cy.get('#confirmEmailAddress').type('joe.bloggs@email.com');
        cy.get("#continue").click();
  
        //Address 
        cy.get('#nameOrNumber').type('6');
        cy.get('#postcode').type('BS16 2LL');
        cy.get("#findAddress").click();
        cy.get("#confirmAndContinue").click();
  
        //Intention for item
        cy.get('[type="radio"].govuk-radios__input').first().check()
        cy.get("#continue").click();
      
        //CheckYourAnswers and Declaration//
        cy.get('#agree').check()
        //cy.get('form input').check(['agree'])
        cy.get("#agreeAndSubmit").click();
  
  //dhsy
  
      })
      })
    