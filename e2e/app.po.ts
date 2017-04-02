import { browser, element, by } from 'protractor';

export class NgBlackboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blackbox-root h1')).getText();
  }
}
