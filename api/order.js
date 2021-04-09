const router = require("express").Router();
const Controller = require("../controllers");

router.post("/add", Controller.Order.addOrder);

module.exports = router;