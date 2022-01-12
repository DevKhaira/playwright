import { injectable } from 'inversify';
import { ISandbox } from '../../../interfaces/sandbox';

const { chromium } = require("playwright");
const expect = require("expect");

let browser;
let page;

@injectable()

export class Sandbox implements ISandbox {
    private selectors = {
        entryTitle: "h1.title-post.entry-title",
    };
    public launchNewPage = async () => {
        browser = process.env.GITHUB_ACTIONS
            ? await chromium.launch()
            : await chromium.launch({ headless: false });
        page = await browser.newPage();
        return page;
    }

    public closeBrowser = async (page) => {
        if (await !page.isClosed()) {
            browser.close();
          }
        return this;
    }

    public visit = async (page) => {
        await page.goto("https://kungfulondon.com/", {
            waitUntil: "networkidle0",
        })
        .catch(() => {});
        return this;
    };

    public assertOnSite = async(page) => {
        await page.waitForSelector(this.selectors.entryTitle);
        expect(await page.title()).toEqual("Hung Leng Kuen Kung Fu/ Wu Shu London");
        return this;
    }

    public assertHeaderShouldHaveText = async (page, header) => {
        const title = await page.$eval(this.selectors.entryTitle, (el) => el.textContent);
        expect(title).toEqual(header);
        return this;
    }
}