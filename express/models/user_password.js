"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Password.belongsTo(models.User, { foreignKey: "uspa_user_id", onDelete: "cascade" });
    }
  }
  User_Password.init(
    {
      uspa_user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          schema: "users",
          model: "User",
          key: "user_id",
        },
      },
      uspa_passwordHash: DataTypes.STRING,
      uspa_passwordSalt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_Password",
    }
  );
  return User_Password;
};
