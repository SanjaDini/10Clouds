import ApiRequest from '../utils/api-request';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

describe('Validate API response', async () => {
  it('GET and validate name', async () => {
    await expect(ApiRequest.runApiRequest('get', 'people/4/')).to.be.fulfilled.then((response) => {
      expect(response.data.name).to.be.eql('Darth Vader');
    });
  });

  it('GET and validate 404 stutus code', async () => {
    await expect(ApiRequest.runApiRequest('get', 'people/400/')).to.be.rejected.then((error) => {
      expect(error.response.status).to.be.eql(404);
    });
  });
});
