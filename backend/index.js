/** @format */

const express = require('express');

const app = express();
app.use(express.json()); //access the req.body

const cors = require('cors');
app.use(cors());
const { sequelize } = require('./models');

//end point routes
const postRoute = require('./routes/note');
app.use(postRoute);

const userRoute = require('./routes/user');
app.use('/', userRoute);

const contactRoute = require('./routes/contact');
app.use('/', contactRoute);

const port = process.env.PORT || 5000;
app.listen(port, async () => {
	console.log('App listening on port 5000!');
	await sequelize.authenticate();
	console.log('Database is Connected successfully!');
});
