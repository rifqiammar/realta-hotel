"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Role.belongsTo(models.Role, { foreignKey: "usro_role_id", onDelete: "cascade" });
      User_Role.belongsTo(models.User, { foreignKey: "usro_user_id", onDelete: "cascade" });
    }
  }
  User_Role.init(
    {
      usro_role_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          schema: "users",
          model: "Role",
          key: "role_id",
        },
      },
      usro_user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
          schema: "users",
          model: "User",
          key: "user_id",
        },
      },
    },
    {
      sequelize,
      modelName: "User_Role",
    }
  );
  return User_Role;
};
