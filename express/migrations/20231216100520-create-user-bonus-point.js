"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "User_Bonus_Points",
      {
        ubpo_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        ubpo_user_id: {
          primaryKey: true,
          allowNull: false,
          foreignKey: true,
          onDelete: "cascade",
          onUpdate: "cascade",
          references: {
            model: {
              tableName: "Users",
              schema: "users",
            },
            key: "user_id",
          },
          type: Sequelize.INTEGER,
        },
        ubpo_total_points: {
          type: Sequelize.SMALLINT,
        },
        ubpo_bonus_type: {
          type: Sequelize.CHAR,
        },
        ubpo_created_on: {
          type: Sequelize.DATEONLY,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        schema: "users",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User_Bonus_Points");
  },
};
