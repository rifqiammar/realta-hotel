"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.User_Bonus_Point, { foreignKey: "ubpo_user_id", onDelete: "cascade" });
      User.hasMany(models.User_Member, { foreignKey: "usme_user_id", onDelete: "cascade" });
      User.hasMany(models.User_Password, { foreignKey: "uspa_user_id", onDelete: "cascade" });
      User.hasMany(models.User_Profile, { foreignKey: "uspro_user_id", onDelete: "cascade" });
      User.hasMany(models.User_Role, { foreignKey: "usro_user_id", onDelete: "cascade" });
    }
  }
  User.init(
    {
      user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_full_name: DataTypes.STRING,
      user_type: DataTypes.CHAR,
      user_company_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_phone_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
