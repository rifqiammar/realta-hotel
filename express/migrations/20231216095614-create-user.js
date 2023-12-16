"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "Users",
      {
        user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_full_name: {
          type: Sequelize.STRING,
        },
        user_type: {
          type: Sequelize.CHAR,
        },
        user_company_name: {
          type: Sequelize.STRING,
        },
        user_email: {
          type: Sequelize.STRING,
        },
        user_phone_number: {
          unique: true,
          type: Sequelize.STRING,
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
    await queryInterface.dropTable("Users");
  },
};
