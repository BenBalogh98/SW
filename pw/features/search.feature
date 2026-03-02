#Feature: Search Functionality

#Scenario: Searching for substring shows correct results
#Given I am on the planet card page
#And I enter 'ta' into the search input
#Then I should see planet cards with names containing 'ta'

#Scenario: Searching for non-existing substring shows no results
#Given I am on the planet card page
#And I enter 'sdifgise' into the search input
#Then I should see no planet cards displayed

#Scenario: Searching with empty input shows all results
#Given I am on the planet card page
#And I have entered 'ta' into the search input
#When I clear the search input
#Then I should see all planet cards displayed