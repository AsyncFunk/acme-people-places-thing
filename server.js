const express = require('express');
const conn = require('./db');
const morgan = require('morgan');
const { People, Places, Things, syncAndSeed } = require('./db');
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

const init = async () => {
  await syncAndSeed();
  app.listen(port, console.log(`listening on port ${port}`));
};

init();
