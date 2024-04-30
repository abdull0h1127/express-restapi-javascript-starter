const express = require("express");
const exampleRoutes = require("../modules/example/_routes");


const router = express.Router();

router.use(exampleRoutes);

module.exports = router;
