"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "User_Members",
      {
        usme_user_id: {
          allowNull: false,
          autoIncrement: true,
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
        usme_memb_name: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
        },
        usme_promote_date: {
          type: Sequelize.DATEONLY,
        },
        usme_points: {
          type: Sequelize.SMALLINT,
        },
        usme_type: {
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
    await queryInterface.dropTable("User_Members");
  },
};
