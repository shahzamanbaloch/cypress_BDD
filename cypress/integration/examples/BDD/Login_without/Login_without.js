import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import test1 from './test1';

Given('User opens browser and enters the New NHS Pre Prod URL', function () {
  cy.visit(Cypress.env('url'));
})

const test1page = new test1();

Then('User selects the RoomType from dropdown', function () {
  test1page.RoomType();
})

And('click on find a room button', function () {
  test1page.Roombutton();
})

Then('Verify Search Results page is displayed', function () {
  test1page.Pagedisplayed();
})

Then('User validate the shown results are based on the selected “RoomType” with price per hour not displayed', function () {
  test1page.showresult()
})

Then('Verify results by changing filters on the page', function () {
  test1page.changingfilter()
})

Then('validate the room details page by clicking on room name', function () {
  test1page.roomdetails()
})

Then('validate the property details page by clicking on property name', function () {
  test1page.propertydetails()
})

