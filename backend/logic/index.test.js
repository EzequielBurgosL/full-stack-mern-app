const logic = require('.');

const { expect } = require('chai');

describe('testing logic functions', () => {
  describe('getCompanies', () => {
    it('should return company by id', async () => {
      const result = await logic.getCompanies();

      expect(result[0]).to.deep.equal({
        id: '1',
        name: 'The Boring Company',
        logo: 'http://placekitten.com/300/300',
        specialties: ['excavation'],
        city: 'Los Angeles'
      });
    });
  });

  describe('getCompanyById', () => {
    it('should return company by id', async () => {
      const result = await logic.getCompanyById('1');

      expect(result).to.deep.equal([
        {
          id: '1',
          name: 'The Boring Company',
          logo: 'http://placekitten.com/300/300',
          specialties: ['excavation'],
          city: 'Los Angeles'
        }
      ]);
    });

    it('should fail on no company id', () =>
      expect(() => logic.getCompanyById()).to.throw('company id should be an string')
    );

    it('should fail on no company id', async () => {
      logic.getCompanyById('99999')
        .catch(({ message }) => expect(message).to.equal('no company found by id'));
    });
  });
});