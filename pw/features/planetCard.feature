Feature: Planet Card Details

Scenario: View detailed information about a planet
Given I am on the planet card page
When I click on the "Tatooine" planet card
Then I should see detailed information about "Tatooine"
When I navigate back using the leave button
Then I should be back on the planets list page

# #This feature is not yet implemented
# Scenario: Navigate to related films from planet details
# Given I am on the planet card page
# When I click on the "Tatooine" planet card
# Then I should see a list of films related to "Tatooine"
# When I click on the first film in the list
# Then I should be taken to the film's detail page
# When I navigate back using the leave button
# Then I should be back on the "Tatooine" planet details page