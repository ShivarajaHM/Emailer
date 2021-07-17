import { TBL_USER } from '../constants/modelConstants';
import Sequelize from 'sequelize';

const userModel = (sequelize, type) => {
    return sequelize.define(TBL_USER, {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        scheduled_time: {
            type: type.DATE,
            allowNull: true
        },
        is_active: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          email_success: {
            type: type.BOOLEAN,
            allowNull: true
        },
        email_fails: {
            type: type.BOOLEAN,
            allowNull: true,
            defaultValue: null
        }
    },{
        indexes: [
            {
                fields: ['id']
            }
        ],
        timestamps: false,
        freezeTableName: true, underscored: true
    })
}

export default userModel;