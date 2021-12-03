/** @format */

const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
	let token = req.headers['token'];

	if (!token) {
		return res.status(403).send('Unauthorized');
	}
	try {
		const decoded = jwt.verify(token, 'secret');
		req.User = decoded;
	} catch (err) {
		return res.status(401).send('Invalid Token');
	}
	return next();
};

module.exports = verifyToken;
