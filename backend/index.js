/** @format */

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('../backend/db');
const auth = require('./middleware/authetication');
const {
	registerHandler,
	contactHandler,
} = require('./middleware/errorHandler');
const Contact = require('./model/contact');

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const contactRoute = require('./routes/contact');

(async function db() {
	await connection();
})();

app.use(cors());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//middleware
app.use(express.json());

//route middleware
app.use('/', authRoute);
app.use('/admin', registerHandler, authRoute);
app.use(postRoute);
app.use('/contact', contactHandler, contactRoute);

//get all contacts
app.get('/contacts', auth, (req, res) => {
	Contact.find()
		.then((users) => {
			res.send(users);
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

//delete one contact
app.delete('/contacts/:id', auth, function (req, res) {
	Contact.findByIdAndDelete(req.params.id)
		.exec()
		.then((result) => {
			if (!result) {
				return res.status(404).end();
			}
			return res
				.status(200)
				.json({ status: 'Success', message: 'Deleted Successfully' });
		})
		.catch((error) => next(err));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port 5000!'));
