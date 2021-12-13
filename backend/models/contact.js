/** @format */

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class contact extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
		toJSON() {
			return { ...this.get(), id: undefined };
		}
	}
	contact.init(
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: { msg: 'Email must be valid' },
				},
			},
			subject: DataTypes.STRING,
			company: DataTypes.STRING,
			message: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'contact',
			tableName: 'contacts',
		}
	);
	return contact;
};
