const router = require("express").Router();
const Controller = require("../controllers");

router.get("/all", Controller.Product.getAllProducts);

router.get("/search/:name", Controller.Product.getSearchedProducts);


module.exports = router;