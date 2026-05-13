import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, expect } from '../fixtures/fixtures';
import CardPage from '../pages/cardPage';
import { BreadcrumbType } from '../interfaces/types';

const { Given, When, Then } = createBdd(test);

When('I click on the {string} link in the breadcrumb', async ({ homePage }, breadcrumbName: BreadcrumbType) => {
    await homePage.breadCrumbs.clickLinkByName(breadcrumbName);
});

Then('I should be back on the {string} page', async ({ homePage }, breadcrumbName: BreadcrumbType) => {
    await homePage.breadCrumbs.verifyBreadcrumbLinkActive(breadcrumbName);

});