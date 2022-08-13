import CareersPage from '../pageobjects/careers.page';

describe('Validate QA role on Careers page', () => {
  beforeEach('Open careers page', async () => {
    await CareersPage.openCareersPageAndAcceptCookies();
  });
  it('should be only one Senior QA Automation Role on the page', async () =>
    await expect(CareersPage.qaJobTitles).toBeElementsArrayOfSize({eq: 1}));
  it('should be able to select QA role from dropdown and validate results', async () => {
    await CareersPage.selectQAroleFromDropdown();
    await expect(CareersPage.allJobTitles).toHaveTextContaining(
      /QA Automation | QA Engineer/g
    );
  });
});
