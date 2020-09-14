const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Mills = require('../models/Mills');
const Harvests = require('../models/Harvests');
const Farms = require('../models/Farms');
const Fields = require('../models/Fields');

const connection = new Sequelize(dbConfig);

Mills.init(connection);
Harvests.init(connection);
Farms.init(connection);
Fields.init(connection);


Mills.associate(connection.models);
Harvests.associate(connection.models);
Farms.associate(connection.models);
Fields.associate(connection.models);

module.exports = connection;