import { Sequelize } from 'sequelize-typescript';
import { Cat } from './Cat';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'userx',
  password: 'userx',
  database: 'cat_api_db',
});

sequelize.addModels([Cat]);

export { sequelize };