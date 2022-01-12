export interface ISandbox {
    launchNewPage(): void;
    visit(page:any): void;
    closeBrowser(page:any): void;
    assertOnSite(page:any): void;
    assertHeaderShouldHaveText(page:any, header:string): void;
  }