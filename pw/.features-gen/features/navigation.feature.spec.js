// Generated from: features\navigation.feature
import { test } from "../../fixtures/fixtures.ts";

test.describe('Planet Card Details', () => {

  test('View detailed information about a planet', async ({ Given, When, Then, cardPage, homePage, page, planetPage }) => { 
    await Given('I am on the "Planets" card page', null, { homePage, page }); 
    await When('I click on the "Tatooine" planet card', null, { planetPage }); 
    await Then('I should see detailed information of "Planets"', {"dataTable":{"rows":[{"cells":[{"value":"Rotation Period"}]},{"cells":[{"value":"Orbital Period"}]},{"cells":[{"value":"Diameter"}]},{"cells":[{"value":"Climate"}]},{"cells":[{"value":"Gravity"}]},{"cells":[{"value":"Terrain"}]},{"cells":[{"value":"Surface Water"}]},{"cells":[{"value":"Population"}]},{"cells":[{"value":"Residents"}]},{"cells":[{"value":"Films"}]},{"cells":[{"value":"Created"}]},{"cells":[{"value":"Edited"}]}]}}, { cardPage }); 
    await When('I navigate back using the leave button', null, { cardPage }); 
    await Then('I should be back on the planets list page', null, { planetPage }); 
  });

  test('Navigate to related films from planet details', async ({ Given, When, Then, cardPage, homePage, page, planetPage }) => { 
    await Given('I am on the "Planets" card page', null, { homePage, page }); 
    await When('I click on the "Tatooine" planet card', null, { planetPage }); 
    await Then('I should see a list of films related to "Tatooine"', null, { cardPage }); 
    await When('I click on the "A New Hope" film link in the details', null, { cardPage }); 
    await Then('I should see detailed information of "Films"', {"dataTable":{"rows":[{"cells":[{"value":"Episode ID"}]},{"cells":[{"value":"Opening Crawl"}]},{"cells":[{"value":"Director"}]},{"cells":[{"value":"Producer"}]},{"cells":[{"value":"Release Date"}]},{"cells":[{"value":"Characters"}]},{"cells":[{"value":"Planets"}]},{"cells":[{"value":"Starships"}]},{"cells":[{"value":"Vehicles"}]},{"cells":[{"value":"Species"}]},{"cells":[{"value":"Created"}]},{"cells":[{"value":"Edited"}]}]}}, { cardPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\navigation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the \"Planets\" card page","stepMatchArguments":[{"group":{"start":12,"value":"\"Planets\"","children":[{"start":13,"value":"Planets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the \"Tatooine\" planet card","stepMatchArguments":[{"group":{"start":15,"value":"\"Tatooine\"","children":[{"start":16,"value":"Tatooine","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see detailed information of \"Planets\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Planets\"","children":[{"start":38,"value":"Planets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I navigate back using the leave button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should be back on the planets list page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I am on the \"Planets\" card page","stepMatchArguments":[{"group":{"start":12,"value":"\"Planets\"","children":[{"start":13,"value":"Planets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click on the \"Tatooine\" planet card","stepMatchArguments":[{"group":{"start":15,"value":"\"Tatooine\"","children":[{"start":16,"value":"Tatooine","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see a list of films related to \"Tatooine\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Tatooine\"","children":[{"start":41,"value":"Tatooine","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I click on the \"A New Hope\" film link in the details","stepMatchArguments":[{"group":{"start":15,"value":"\"A New Hope\"","children":[{"start":16,"value":"A New Hope","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see detailed information of \"Films\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Films\"","children":[{"start":38,"value":"Films","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end