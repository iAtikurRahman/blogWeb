const router = require("express").Router()
const {register,login}=require("../controlers/authCon")

// regsiter
router.post("/register", register);
// login
router.post("/login", login);


module.exports = router;
