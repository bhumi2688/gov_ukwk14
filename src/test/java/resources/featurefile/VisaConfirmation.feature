Feature: Visa Confirmation Test

  Scenario: an Australian Coming to Uk For Tourism
    Given User is on home page
    When User click on accept cookies
    And User click on start button
    And User select a Nationality Australia
    And User click on Continue Button
    And User select Tourism
    And User click on Continue Button
    Then User should verify result "You will not need a visa to come to the UK"


  Scenario: a Chilean coming to Uk For Work and Plans On Staying For Longer Than Six Months
    Given User is on home page
    When User click on accept cookies
    And User click on start button
    And User select nationality Chile
    And User click on Continue Button
    And User click on Work,academic visit or business
    And User click on Continue Button
    And User select intendent to stay for longer than 6 months
    And User click on Continue Button
    And User select having plan to work for Health and Care professional
    And User click on Continue Button
    Then User should be able to verify text "You need a visa to work in health and care"


  Scenario: a Columbian National Coming To UK to join A Partner For a Long Stay
    Given User is on home page
    When User click on accept cookies
    And User click on start button
    And User select natinoality Colombia
    And User click on Continue Button
    And User select reason join partner or family for a long stay
    And User click on Continue Button
    Then User to verify message "You may need a visa"

