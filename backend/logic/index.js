'use strict'

const logic = {
  /**
   * Lists all the companies stored in the database.
   * 
   * @throws {Error} - If no companies are found.
   * @returns {Promise<[Company]>}
   */
  getCompanies() {
    return Promise.resolve()
      .then(() => {
        const { data } = require('../fixtures/companies');

        if (!data) throw Error(`no companies were found`);

        return data;
      });
  },

  /**
   * Retrieves a company stored in the database.
   * 
   * @param {string} companyId
   * @throws {Error} - on invalid type of input or if no companies are found in a specific company.
   * @returns {Promise<[Company]>} 
   */
  getCompanyById(id) {
    if (typeof id !== 'string') throw Error(`company id should be an string`);

    return Promise.resolve()
      .then(() => {
        const { data } = require('../fixtures/companies');
        const result = data.filter(item => item.id === id);

        if (!result.length) throw Error(`no company found by id`);

        return result;
      });
  }
};

module.exports = logic;