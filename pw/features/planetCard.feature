Feature: Planet Card Details

Scenario: View detailed information about a planet
Given I am on the planet card page
When I click on the "Tatooine" planet card
Then I should see detailed information about "Tatooine"
When I navigate back using the leave button
Then I should be back on the planets list page