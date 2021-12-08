/** @format */

'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('contacts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			subject: {
				type: Sequelize.STRING,
			},
			company: {
				type: Sequelize.STRING,
			},
			message: {
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
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('contacts');
	},
};
