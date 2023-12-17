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
          unique: true,
          allowNull: false,
        },
        user_type: {
          type: Sequelize.CHAR,
        },
        user_company_name: {
          type: Sequelize.STRING,
        },
        user_email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_phone_number: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING,
        },
        user_modified_date: {
          allowNull: true,
          type: Sequelize.DATEONLY,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATEONLY,
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
