'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./routes');

const { env: { PORT } } = process;
const DEFAULT_PORT = 4000;

const port = PORT || process.argv[2] || DEFAULT_PORT;
const app = express();

app.use(cors());
app.use('/api', router);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

process.on('SIGINT', () => {
  console.log('\nstopping server');
  process.exit();
});