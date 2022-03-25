'use strict'
const faker = require('faker');

function makepaymentLoad () {   
cardNumber = '4444333322221111'
expiryMonth = '01'
expiryYear = '23'
cvc = '123'
name0nCard = faker.name.firstName()
country = 'United Kingdom'
addressLine1 = 'test'
town = 'Manchester'
postcode = 'M10 1fg'
email = faker.internet.email()
return makepaymentLoad
}
module.exports = { makepaymentLoad };