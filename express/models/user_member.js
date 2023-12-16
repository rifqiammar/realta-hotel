"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Member.belongsTo(models.User, { foreignKey: "usme_user_id", onDelete: "cascade" });
      // User_Member.belongsTo(models.Member, { foreignKey: "usme_memb_name" });
    }
  }
  User_Member.init(
    {
      usme_user_id: {
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
      usme_memb_name: {
        // primaryKey: true,
        // references: {
        //   schema: "master",
        //   model: "Member",
        //   key: "memb_name",
        // },
        type: DataTypes.INTEGER,
      },
      usme_promote_date: DataTypes.DATEONLY,
      usme_points: DataTypes.SMALLINT,
      usme_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User_Member",
    }
  );
  return User_Member;
};
