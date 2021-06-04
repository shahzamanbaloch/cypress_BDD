Background:
    Given New NHS Pre Prod URL is launched  and login with “username” and “password”
    When User have gone to the homepage on desktop 
    
        
    
@Test9
Scenario: Search – With Room Type Only
    Then User selects the “RoomType” from dropdown
    And click on find a room button
    Then Verify Search Results page is displayed
    Then User validate the shown results are based on the selected “RoomType” with price per hour displayed w.r.t the room
    Then Verify results by changing filters on the page
    Then validate the room details page by clicking on room name
    Then validate the property details page by clicking on property name

    
@Test10
Scenario: Search – With Location Only
    Then User inputs “Location” in search box
    And click on find a room button
    Then Verify Search Results page is displayed
    Then User validate the shown results are based on the inputted “location” with price per hour displayed w.r.t the room
    Then Verify results by changing filters on the page
    Then validate the room details page by clicking on room name
    Then validate the property details page by clicking on property name
 
    
@Test11
Scenario: Search – With Property Name Only
    Then User inputs “PropertyName” in search box 
    And click on find a room button
    Then Verify Search Results page is displayed
    Then User validate the shown results are based on the inputted “PropertyName” with price per hour displayed w.r.t the room
    Then Verify results by changing filters on the page
    Then validate the room details page by clicking on room name
    Then validate the property details page by clicking on property name


@Test12
Scenario: Search – With combination of Room Type and Location
    Then User selects the room type from dropdown
    Then User inputs “PropertyName” in search box 
    And click on find a room button
    Then Verify Search Results page is displayed
Then User validate the shown results are based on the selected “RoomType” and inputted “Location” with price per hour displayed w.r.t the room
    Then Verify results by changing filters on the page
    Then validate the room details page by clicking on room name
    Then validate the property details page by clicking on property name


















