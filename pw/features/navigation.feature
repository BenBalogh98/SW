Feature: Planet Card Details

Scenario: View detailed information about a planet
Given I am on the planet card page
When I click on the "Tatooine" planet card
Then I should see detailed information of "planet"
	| Rotation Period |
	| Orbital Period  |
	| Diameter        |
	| Climate         |
	| Gravity         |
	| Terrain         |
	| Surface Water   |
	| Population      |
	| Residents       |
	| Films           |
	| Created         |
	| Edited          |
When I navigate back using the leave button
Then I should be back on the planets list page

Scenario: Navigate to related films from planet details
Given I am on the planet card page
When I click on the "Tatooine" planet card
Then I should see a list of films related to "Tatooine"
When I click on the "A New Hope" film link in the details
Then I should see detailed information of "film"
	| Episode ID      |
	| Opening Crawl   |
	| Director        |
	| Producer        |
	| Release Date    |
	| Characters      |
	| Planets         |
	| Starships       |
	| Vehicles        |
	| Species         |
	| Created         |
	| Edited          |
# No such feature and no plan for this right now
#When I navigate back using the leave button
#Then I should be back on the "Tatooine" planet details page