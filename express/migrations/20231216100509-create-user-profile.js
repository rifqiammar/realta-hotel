"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "User_Profiles",
      {
        uspro_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        // uspro_national_id: {
        //   type: Sequelize.STRING,
        // },
        uspro_birt_date: {
          type: Sequelize.DATEONLY,
        },
        uspro_job_title: {
          type: Sequelize.STRING,
        },
        uspro_marital_status: {
          type: Sequelize.CHAR,
        },
        uspro_gender: {
          type: Sequelize.CHAR,
        },
        uspro_addr_id: {
          // allowNull: false,
          // foreignKey: true,
          // onDelete: "cascade",
          // onUpdate: "cascade",
          // references: {
          //   model: {
          //     tableName: "address",
          //     schema: "users",
          //   },
          //   key: "addr_id",
          // },
          type: Sequelize.INTEGER,
        },
        uspro_user_id: {
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
    await queryInterface.dropTable("User_Profiles");
  },
};
