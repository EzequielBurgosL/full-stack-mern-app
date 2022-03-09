'use strict'

const axios = require('axios');

const api = {
  url: 'http://localhost:4000/api',

  /**
   * 
   * Lists companies
   * 
   * @throws {Error} - If invalid type of input, unexpected response of status or unable to reach the server
   * 
   * @returns {Promise<[Company]>} 
  */
  listCompanies() {
    return Promise.resolve()
      .then(() => {
        return axios.get(`${this.url}/companies`)
          .then(({ status, data }) => {
            if (status !== 200 || data.status !== 'OK') throw Error(`unexpected response status ${status} (${data.status})`)

            return data.data
          })
          .catch(err => {
            if (err.code === 'ECONNREFUSED') throw Error('could not reach server')

            if (err.response) {
              const { response: { data: { error: message } } } = err

              throw Error(message)
            } else throw err
          })
      })
  },

}

module.exports = api