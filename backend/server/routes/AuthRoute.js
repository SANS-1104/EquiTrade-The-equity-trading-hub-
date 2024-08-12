const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

// Define routes with username as a route parameter
router.post('/signup/:username', Signup);
router.post('/login/:username', Login);
router.post('/', userVerification);

module.exports = router;
