import { App5Page } from './app.po';

describe('app5 App', () => {
  let page: App5Page;

  beforeEach(() => {
    page = new App5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
