const api = require('api');

const logic = {
  /**
   * 
   * Lists all companies
   * 
   * @returns {Promise<[Companies]>}
   */
  listCompanies() {
    return api.listCompanies().then(data => data);
  }
};

module.exports = logic;