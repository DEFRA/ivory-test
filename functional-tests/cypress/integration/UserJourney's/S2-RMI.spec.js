describe('S2 - RMI',function(){
    it('S2 - RMI',function(){
        
      cy.visit('please add BASE URL config');
      cy.get('[type="radio"].govuk-radios__input').first().check()
      cy.get('button[id="continue"]').click()
      cy.wait(2000)
// Select RMI 
cy.get('#whatTypeOfItemIsIt-5').check()
cy.get('button[id="continue"]').click()

//Can Continue
cy.get('button[id="continue"]').click()

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
cy.get('#whereMade').type('Japan');
cy.get('#whenMade').type('14th Century');
cy.get("#continue").click();

//Why is item RMI

cy.get('#whyRmi').type('14th century unique item from Japan');
cy.get("#continue").click();

//Ivory age
cy.get('input[type="checkbox"]').check()
cy.get("#continue").click();
cy.get('#otherReason').type('I have so many reasons');
cy.get("#continue").click();

// Add Documents

cy.get('[type="radio"].govuk-radios__input').first().check()
cy.get('button[id="continue"]').click()
cy.wait(2000)

   
      //Add documents

const yourFixturePath01 = 'sample-docx-file-for-testing.docx';
cy.get('#files').attachFile(yourFixturePath01);
cy.get("#continue").click();
cy.wait(2000)
      
      //Your documents
      cy.get("#continue").click();

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
    
      //Declaration & submission//
      cy.get('#agree').check()
      //cy.get('form input').check(['agree'])
      cy.get("#agreeAndSubmit").click();
// comments///
    })
})

