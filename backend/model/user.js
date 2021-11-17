/** @format */

const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			validate: [validator.isEmail, 'Please provide a valid email address.'],
		},
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
