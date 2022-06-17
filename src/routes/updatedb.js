const express = require("express");
const router = express.Router();
const {fetch} = require("../controllers/toDB");

router.get('/', fetch);

module.exports = router;