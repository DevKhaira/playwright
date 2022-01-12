export interface ISandbox {
    launchNewPage(): Promise<ISandbox>;
    visit(page:any): Promise<ISandbox>;
    closeBrowser(page:any): Promise<ISandbox>;
    assertOnSite(page:any): Promise<ISandbox>;
    assertHeaderShouldHaveText(page:any, header:string): Promise<ISandbox>;
  }