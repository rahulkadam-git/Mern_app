const router = require("express").Router();
const controller = require("../controller/auth.controller");



router.post("/auth/login",controller.login);
router.post("/auth/register",controller.register);


module.exports = router;
