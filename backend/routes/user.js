/** @format */

const express = require('express');
const app = express();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerHandler } = require('../middleware/errorHandler');

//register;
app.post('/register', registerHandler, async (req, res) => {
	const { name, email, password } = req.body;

	const emailExist = await User.findOne({ where: { email } });
	if (emailExist)
		return res.status(400).json('User Already Exist. Please Login');

	// lets validate the data before use
	const validatePassword = (password) => {
		const re =
			/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
		return re.test(password);
	};
	if (!validatePassword(req.body.password)) {
		return res.status(400).send({
			error:
				'Password must contain at least 8 characters including uppercase, lowercase and special characters',
		});
	}

	//hash the password
	const salt = await bcrypt.genSalt(10);
	const encryptedPassword = await bcrypt.hash(req.body.password, salt);

	//create a new user
	try {
		const user = await await User.create({
			name,
			email,
			password,
			encryptedPassword,
		});

		return res.status(201).json({
			status: 'Success',
			message: 'created Successfully!',
			data: user,
		});
	} catch (error) {
		return res.status(400).json({
			status: 'Fail',
			message: error.message,
		});
	}
});

//login
app.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ where: { email } });
	if (!user) return res.status(400).json('Email is not found');

	//password check
	if (!user || user.password !== password) {
		return res.status(400).json('Invalid password');
	}

	//create and assign a token
	const token = jwt.sign({ _id: user._id }, 'secret');
	user.token = token;
	return res.status(200).json({ user: user.email, token: token });
});

module.exports = app;
