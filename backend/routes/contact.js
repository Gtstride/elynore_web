/** @format */

const express = require('express');
const app = express();
const { contact } = require('../models');
const { contactHandler } = require('../middleware/errorHandler');
const Admin = require('../middleware/auth');

app.post('/contact', contactHandler, async (req, res) => {
	const { name, email, subject, company, message } = req.body;

	//create a new contact
	try {
		const Contact = await contact.create({
			name,
			email,
			subject,
			company,
			message,
		});
		return res.status(201).json({
			status: 'Success',
			message: 'Message Sent Successfully!',
			data: Contact,
		});
	} catch (error) {
		return res.status(400).json({
			status: 'Fail',
			message: error.message,
		});
	}
});

app.get('/contacts', Admin, async (req, res) => {
	try {
		const Contacts = await contact.findAll();
		return res.json(Contacts);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'something went wrong' });
	}
});

app.get('/contact/:uuid', Admin, async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const Contact = await contact.findOne({ where: { uuid } });
		return res.json(Contact);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'something went wrong' });
	}
});

app.delete('/contact/:uuid', Admin, async (req, res) => {
	const uuid = req.params.uuid;
	try {
		let Contact = await contact.findOne({ where: { uuid } });
		await Contact.destroy();
		return res
			.status(200)
			.json({ status: 'Success', message: 'Deleted Successfully' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'something went wrong' });
	}
});

module.exports = app;
