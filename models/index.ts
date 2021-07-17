import * as Sequelize from "sequelize";
import userModel from './user';


const sequelize = new Sequelize.Sequelize(
    'cap_admin',
    'root',
    'root',
    {
        port: 3306,
        host: 'localhost',
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

const user = userModel(sequelize, Sequelize);


export { sequelize, user}