const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/acme_people_places_things');

const { STRING, TEXT } = Sequelize;

const People = conn.define('people', {
  name: { type: STRING, allowNull: false, unique: true },
});

const Things = conn.define('things', {
  name: { type: STRING, allowNull: false, unique: true },
});

const Places = conn.define('places', {
  name: { type: STRING, allowNull: false, unique: true },
});

const Souvenir = conn.define('souvenir', {});

Souvenir.belongsTo(Places);

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const [moe, larry, lucy, ethyl] = await Promise.all([
    People.create({ name: 'moe' }),
    People.create({ name: 'larry' }),
    People.create({ name: 'lucy' }),
    People.create({ name: 'ethyl' }),
  ]);

  const [paris, nyc, chicago, london] = await Promise.all([
    Places.create({ name: 'paris' }),
    Places.create({ name: 'nyc' }),
    Places.create({ name: 'chicago' }),
    Places.create({ name: 'london' }),
  ]);

  const [hat, bag, shirt, cup] = await Promise.all([
    Things.create({ name: 'hat' }),
    Things.create({ name: 'bag' }),
    Things.create({ name: 'shirt' }),
    Things.create({ name: 'cup' }),
  ]);
};

module.exports = { People, Things, Places, syncAndSeed };
