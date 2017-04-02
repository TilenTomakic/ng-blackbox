import { NgBlackboxPage } from './app.po';

describe('ng-blackbox App', () => {
  let page: NgBlackboxPage;

  beforeEach(() => {
    page = new NgBlackboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blackbox works!');
  });
});
