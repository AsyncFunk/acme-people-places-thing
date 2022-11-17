const express = require('express');
const conn = require('./db');
const morgan = require('morgan');
const homePage = require('./views/homePage');
const { People, Places, Things, syncAndSeed } = require('./db');
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  try {
    const [people, places, things] = await Promise.all([
      People.findAll(),
      Places.findAll(),
      Things.findAll(),
    ]);
    res.send(homePage(people, places, things));
  } catch (error) {
    next(error);
  }
});

const init = async () => {
  await syncAndSeed();
  app.listen(port, console.log(`listening on port ${port}`));
};

init();
