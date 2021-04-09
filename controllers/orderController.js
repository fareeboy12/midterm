const db = require("../models");

exports.addOrder = async (req, res) => {
	console.log(req.body);
	 await db.Order.create({
		items: JSON.stringify(req.body.items),
	}).then((res) => {
		console.log(res);
	});
};
