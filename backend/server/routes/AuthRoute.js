const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

// Define routes with username as a route parameter
router.post('/signup/', Signup);
router.post('/login/', Login);
router.post('/', userVerification);

module.exports = router;
