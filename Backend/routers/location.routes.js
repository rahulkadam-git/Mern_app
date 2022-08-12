const router = require("express").Router();
const controller = require("../controller/location.controller");

router.post("/company/location", controller.location);
router.post("/company/gates",controller.gates);
router.get("/company/allLocations",controller.allLoctions);

module.exports = router;
