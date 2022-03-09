'use strict'

const express = require('express');
const logic = require('../../logic/');
const {
  HTTP_STATUS_CODES: {
    BAD_REQUEST,
    OK_REQUEST
  },
  HTTP_STATUS_MESSAGES: {
    KO,
    OK
  }
} = require('../utils/constants');

const router = express.Router();

router.get('/companies', (req, res) => {
  logic.getCompanies()
    .then(data => {
      res.status(OK_REQUEST);
      res.json({
        status: OK,
        data
      });
    })
    .catch(({ message }) => {
      res.status(BAD_REQUEST);
      res.json({
        status: KO,
        error: message
      });
    });
});

router.get('/companies/:id', (req, res) => {
  const { params: { id } } = req;

  return logic.getCompaniesById(id)
    .then(data => {
      res.status(OK_REQUEST);
      res.json({
        status: OK,
        data
      });
    })
    .catch(({ message }) => {
      res.status(BAD_REQUEST);
      res.json({
        status: KO,
        error: message
      });
    });
});

module.exports = router;