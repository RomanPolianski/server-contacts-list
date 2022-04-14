/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    static associate({ contacts }) {
      this.belongsTo(contacts, { foreignKey: 'contact_id'});
    }
  }
  tasks.init({
    task_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    task_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    task_status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};