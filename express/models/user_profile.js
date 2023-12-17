"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Profile.belongsTo(models.User, { foreignKey: "uspro_user_id", onDelete: "cascade" });
    }
  }
  User_Profile.init(
    {
      uspro_id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // uspro_national_id: DataTypes.STRING,
      uspro_birt_date: DataTypes.DATEONLY,
      uspro_job_title: DataTypes.STRING,
      uspro_marital_status: DataTypes.CHAR,
      uspro_gender: DataTypes.CHAR,
      uspro_addr_id: DataTypes.INTEGER,
      uspro_user_id: {
        references: {
          schema: "users",
          model: "User",
          key: "user_id",
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User_Profile",
    }
  );
  return User_Profile;
};
