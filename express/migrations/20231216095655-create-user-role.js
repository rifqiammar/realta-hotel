"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "User_Roles",
      {
        usro_role_id: {
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          onDelete: "cascade",
          onUpdate: "cascade",
          references: {
            model: {
              tableName: "Roles",
              schema: "users",
            },
            key: "role_id",
          },
          type: Sequelize.INTEGER,
        },
        usro_user_id: {
          allowNull: false,
          primaryKey: true,
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
    await queryInterface.dropTable("User_Roles");
  },
};
