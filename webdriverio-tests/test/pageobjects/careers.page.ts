import BasePage from './base.page';
import {ChainablePromiseElement, ChainablePromiseArray} from 'webdriverio';

class CareersPage extends BasePage {
  get qaJobTitles(): ChainablePromiseArray<WebdriverIO.ElementArray> {
    return $$('//h2[contains(text(),"Senior QA Automation Engineer")]');
  }

  get allJobTitles(): ChainablePromiseArray<WebdriverIO.ElementArray> {
    return $$('//*[@class="job-offer__title"]');
  }

  get dropdownElement(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('//span[contains(text(),"All departments")]');
  }

  get dropdownJobsTitles(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('//li[contains(text(),"QA")]');
  }

  async openCareersPageAndAcceptCookies(): Promise<void> {
    await browser.url('/careers');
    await this.waitForElementVisibility(this.dropdownElement);
    await (await this.getCookies).click();
  }

  async selectQAroleFromDropdown(): Promise<void> {
    await (await this.dropdownElement).click();
    await (await this.dropdownJobsTitles).click();
  }
}

export default new CareersPage();
