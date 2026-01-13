// Generated from: features\planetCard.feature
import { test } from "../../fixtures/fixtures.ts";

test.describe('Planet Card Details', () => {

  test('View detailed information about a planet', async ({ Given, When, Then, page, planetPage }) => { 
    await Given('I am on the planet card page', null, { page }); 
    await When('I click on the "Tatooine" planet card', null, { page, planetPage }); 
    await Then('I should see detailed information about "Tatooine"', null, { planetPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\planetCard.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the planet card page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the \"Tatooine\" planet card","stepMatchArguments":[{"group":{"start":15,"value":"\"Tatooine\"","children":[{"start":16,"value":"Tatooine","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see detailed information about \"Tatooine\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Tatooine\"","children":[{"start":41,"value":"Tatooine","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end