const router = require("express").Router();
const controller = require("../controller/appointment.controller")


router.post("/user/appionment", controller.newAppoinment);
router.get("/user/allappionment", controller.allAppoinments);


module.exports = router;
