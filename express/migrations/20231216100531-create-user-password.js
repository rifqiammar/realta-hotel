"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("users");

    await queryInterface.createTable(
      "User_Passwords",
      {
        uspa_user_id: {
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
        uspa_passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        uspa_passwordSalt: {
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable("User_Passwords");
  },
};
