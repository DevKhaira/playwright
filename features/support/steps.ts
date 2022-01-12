import {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { ioc } from '../inversify.config';
import { ISandbox } from '../../interfaces/sandbox';
import { TYPES } from '../../types';

const sandbox = ioc.get<ISandbox>(TYPES.Sandbox);

let page;
let browser;

setDefaultTimeout(50 * 1000);

BeforeAll(async () => {
  page = await sandbox.launchNewPage();
});

AfterAll(async () => {
  sandbox.closeBrowser(page);
});

Given("Navigate to the kung fu site", async () => {
  await sandbox.visit(page);
});

When("I am on the kung fu site", async () => {
  await sandbox.assertOnSite(page);
});

Then("The page header should be {string}", async (header) => {
  await sandbox.assertHeaderShouldHaveText(page, header);
});
