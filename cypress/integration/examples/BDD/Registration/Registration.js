import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('User opens browser and enters the New NHS Pre Prod URL', function () {
  cy.visit('https://test.ospace.co.uk/')

})


Then('user clicks on the Register link', function () {
  cy.get('.header__nav-list--pull .button--primary').click()
})


Then('User fills the user details form by entering all the mandatory fields and continue', function () {
  cy.get('input#firstName').type('123Test')
  cy.get('input#lastName').type('Test321')
  cy.get('input#phoneNumber').type('07734945793')
  cy.get('input#mobileNumber').type('07734945793')
  cy.get('input#email').type('123test@example.com')
  cy.get('input#confirmEmail').type('123test@example.com')
  cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
  cy.get('input#confirmPassword').type('Test!"£456')
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User fills the company details form by entering new company details and continue', function () {
  cy.get('.companyName__value-container').type('QA')
  cy.get('.companyName__option').click()
  cy.get('input#address1').type('test123')
  cy.get('input#address2').type('test123')
  cy.get('input#town').type('london')
  cy.get('input#county').type('london')
  cy.get('input#postcode').type('E7D444')
  cy.get('select#companyType').select('GP')
  cy.get("[type='submit']").click()


})


Then('User added the different services on service details and click submit for approval button', function () {
  cy.get('select#serviceType').select('Clinical')
  cy.get(".service__value-container").click()
  cy.get(".service__value-container").type('allergy')
  cy.get('.service__menu').click()
  cy.get('input#serviceIdentifier').type('Test123')
  cy.get('input#agreePrivacy').click()
  cy.get('input#agreeTerms').click()
  cy.get('input.button.button--secondary.button--block').click()

})


Then('User validate the confirmation screen for newly created user', function () {
  cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
})


// With Invalid Phone Number 


Then('User fills the user details with invalid number form by entering all the mandatory fields and continue', function () {
  cy.get('input#firstName').type('123Test')
  cy.get('input#lastName').type('Test321')
  cy.get('input#phoneNumber').type('1234567890')
  cy.get('input#mobileNumber').type('1234567890')
  cy.get('input#email').type('123test@example.com')
  cy.get('input#confirmEmail').type('123test@example.com')
  cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
  cy.get('input#confirmPassword').type('Test!"£456')
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User fills the company details form by entering new company details and continue', function () {
  cy.get('.companyName__value-container').type('QA')
  cy.get('.companyName__option').click()
  cy.get('input#address1').type('test123')
  cy.get('input#address2').type('test123')
  cy.get('input#town').type('london')
  cy.get('input#county').type('london')
  cy.get('input#postcode').type('E7D444')
  cy.get('select#companyType').select('GP')
  cy.get("[type='submit']").click()


})


Then('User added the different services on service details and click submit for approval button', function () {
  cy.get('select#serviceType').select('Clinical')
  cy.get(".service__value-container").click()
  cy.get(".service__value-container").type('allergy')
  cy.get('.service__menu').click()
  cy.get('input#serviceIdentifier').type('Test123')
  cy.get('input#agreePrivacy').click()
  cy.get('input#agreeTerms').click()
  cy.get('input.button.button--secondary.button--block').click()

})


Then('User verify Your registration submission failed because invalid phone numbers', function () {
  cy.get(".registration-submission-errors p").contains('Your registration submission failed because:').should('be.visible')
  cy.get(".registration-submission-errors li:nth-of-type(1)").contains('Tel land is invalid').should('be.visible')
  cy.get(".registration-submission-errors li:nth-of-type(2)").contains('Tel mobile is invalid').should('be.visible')
})




// Test Case 3 

Then('User completes the user details form by entering all the mandatory fields and continue', function () {
  cy.get('input#firstName').type('123Test')
  cy.get('input#lastName').type('Test321')
  cy.get('input#phoneNumber').type('07734945793')
  cy.get('input#mobileNumber').type('07734945793')
  cy.get('input#email').type('123test@example.com')
  cy.get('input#confirmEmail').type('123test@example.com')
  cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
  cy.get('input#confirmPassword').type('Test!"£456')
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User selects the existing company and continue', function () {
  cy.get('.companyName__value-container').type('demo liz client')
  cy.get('.companyName__option').click({ force: true })
  cy.get('input.button.button--secondary.button--block').click()
})

Then('User selects the different services on service details and click submit for approval button', function () {
  cy.get("[for='existingClientServices-2326']").contains('Allergy').should('be.visible').click()
  cy.get("[for='existingClientServices-2327']").contains('Baby clinic').should('be.visible').click()
  cy.get("[for='existingClientServices-2328']").contains('Cardiology - CWHHE').should('be.visible').click()
  cy.get('input.button.button--secondary.button--block').should('exist').click()
 

})


Then('User validate the confirmation screen for newly created user for the existing client', function () {
  cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
})

// Test case 4

Then('User completes the user details form by entering all the fields and continue', function () {
  cy.get('input#firstName').type('123Test')
  cy.get('input#lastName').type('Test321')
  cy.get('input#phoneNumber').type('07734945793')
  cy.get('input#mobileNumber').type('07734945793')
  cy.get('input#email').type('123test@example.com')
  cy.get('input#confirmEmail').type('123test@example.com')
  cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
  cy.get('input#confirmPassword').type('Test!"£456')
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User selects the existing company and click continue', function () {
  cy.get('.companyName__value-container').type('demo liz client')
  cy.get('.companyName__option').click({ force: true })
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User do not select any service from the list of services and click submit for approval button', function () {
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User validate the confirmation message for the newly created user for existing client', function () {
  cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
})


//Test Case 5 

Then('User enters the user details and continue', function () {
  cy.get('input#firstName').type('123Test')
  cy.get('input#lastName').type('Test321')
  cy.get('input#phoneNumber').type('07734945793')
  cy.get('input#mobileNumber').type('07734945793')
  cy.get('input#email').type('123test@example.com')
  cy.get('input#confirmEmail').type('123test@example.com')
  cy.get('input.ReactPasswordStrength-input.form-control').type('Test!"£456')
  cy.get('input#confirmPassword').type('Test!"£456')
  cy.get('input.button.button--secondary.button--block').click()
})

Then('User enters the company details and continue', function () {
  cy.get('.companyName__value-container').type('demo liz client')
  cy.get('.companyName__option').click({ force: true })
  cy.get('input.button.button--secondary.button--block').click()
})


Then('User added the large volume of services on service details and click submit for approval button', function () {
  cy.get("[for='existingClientServices-2326']").contains('Allergy').should('be.visible').click()
  cy.get("[for='existingClientServices-2327']").contains('Baby clinic').should('be.visible').click()
  cy.get("[for='existingClientServices-2330']").contains('Customer Services').should('be.visible').click()
  cy.get("[for='existingClientServices-2329']").contains('Human Resources').should('be.visible').click()

  cy.get('input.button.button--secondary.button--block').should('exist').click()
 

})



Then('User validate the confirmation screen', function () {
  cy.get(".registration-confirmation h3").contains('Thanks for registering').should('be.visible')
})


