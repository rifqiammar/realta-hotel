"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Bonus_Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Bonus_Point.belongsTo(models.User, { foreignKey: "ubpo_user_id" });
    }
  }
  User_Bonus_Point.init(
    {
      ubpo_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ubpo_user_id: {
        primaryKey: true,
        references: {
          schema: "users",
          model: "User",
          key: "user_id",
        },
        type: DataTypes.INTEGER,
      },
      ubpo_total_points: DataTypes.SMALLINT,
      ubpo_bonus_type: DataTypes.CHAR,
      ubpo_created_on: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "User_Bonus_Point",
    }
  );
  return User_Bonus_Point;
};
