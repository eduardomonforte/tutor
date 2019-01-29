const router = require("express").Router();
const userRoutes = require("./users");
const resourceRoutes = require("./resources");

router.use("/users", userRoutes);
router.use("/resources", resourceRoutes);

module.exports = router;
