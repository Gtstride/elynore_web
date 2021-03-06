/** @format */

'use strict';

const { DataTypes } = require('sequelize/dist');

module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
			encryptedPassword: {
				type: DataTypes.STRING,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	down: async (queryInterface, DataTypes) => {
		await queryInterface.dropTable('Users');
	},
};
