const router = require("express").Router();
const controller = require("../controller/auth.controller");



router.post("/auth/login",controller.login);
router.post("/auth/register",controller.register);
router.post("/detection/flower",controller.detection);
router.get("/detection/flower/:date",controller.getFlowerData);
router.get("/user/all",controller.getAllUsers);
router.post("/user/:_id",controller.getUserDetails);

module.exports = router;
