import {ChainablePromiseElement} from 'webdriverio';
import {visibilityOf} from 'wdio-wait-for';

export default class BasePage {
  get getCookies(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('//div[contains(@class,"cookies")]//button');
  }

  async waitForElementVisibility(selector: any): Promise<void> {
    await browser.waitUntil(visibilityOf(selector), {
      timeout: 25000,
      timeoutMsg: `Failed, element is not visible!`,
    });
  }
}
