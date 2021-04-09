const db = require("../models");

exports.getAllProducts = (req, res) => {
	db.Product.find().then((products) => {
        console.log(JSON.stringify(products, null, "\t"));
        res.status(200).json(products);
    });
};

exports.getSearchedProducts = (req, res) => {
	db.Product.find({'name': {'$regex': req.params.name , '$options': 'i'}}).then((products) => {
        console.log(JSON.stringify(products, null, "\t"));
        res.status(200).json(products);
    });
};

// db.Product.find({ $text: { $search: req.params.name } })
// db.users.find({'name': {'$regex': 'sometext', '$options': 'i'}})