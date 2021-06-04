#Comment: New NHS website – Search regression
Feature:  Search Scenarios – Non Logged In User

    #User Story: As a Non-Logged In user I want to be able to search the room by selecting room type or Location or Property name only and with Combination of both room type and location & Check the property and Room details page by clicking on the listed links

    # @Test5
    Scenario: Search – With Room Type Only
        Given User opens browser and enters the New NHS Pre Prod URL
        Then User selects the RoomType from dropdown
        And click on find a room button
        Then Verify Search Results page is displayed
        Then User validate the shown results are based on the selected “RoomType” with price per hour not displayed
        Then Verify results by changing filters on the page
        Then validate the room details page by clicking on room name
        Then validate the property details page by clicking on property name

# @Test6
# Scenario: Search – With Location Only
#     Then User inputs Location in search box
#     And click on find a room button
#     Then Verify Search Results page is displayed
#     Then User validate the shown results are based on the inputted “location” with price per hour not displayed
#     Then Verify results by changing filters on the page
#     Then validate the room details page by clicking on room name
#     Then validate the property details page by clicking on property name


# @Test7
# Scenario: Search – With Property Name Only
#     Then User inputs PropertyName in search box
#     And click on find a room button
#     And Verify Search Results page is displayed
#     Then User validate the shown results are based on the inputted “PropertyName” with price per hour not displayed
#     Then Verify results by changing filters on the page
#     Then validate the room details page by clicking on room name
#     Then validate the property details page by clicking on property name

# @Test8
# Scenario: Search – With combination of Room Type and Location
#     Then User selects the room type from dropdown
#     Then User inputs “PropertyName” in search box
#     And click on find a room button
#     Then Verify Search Results page is displayed
#     Then User validate the shown results are based on the selected “RoomType” and inputted “Location” with price per hour not displayed
#     Then Verify results by changing filters on the page
#     Then validate the room details page by clicking on room name
#     Then validate the property details page by clicking on property name
#Author: Cristee Singal
#Comment: New NHS website – Search regression


#User Story: As a Logged In user I want to be able to search the room by selecting room type or Location or Property name only and with Combination of both room type and location & Check the property and Room details page by clicking on the listed links
