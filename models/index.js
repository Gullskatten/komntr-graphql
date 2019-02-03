
'use strict';

import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "komntr", 
    "postgres", 
    "postgres", 
    { 
        dialect: "postgres"
    });

const models = {
   User: sequelize['import']('./user'),
   Channel: sequelize['import']('./channel'),
   Post: sequelize['import']('./post'),
   Message: sequelize['import']('./message'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;