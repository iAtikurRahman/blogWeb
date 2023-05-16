const router = require("express").Router()
const {updateUserCon,deleteUserCon,allUserCon}= require("../controlers/userCon")

// update
router.put("/:id", updateUserCon);
// delete
router.delete("/:id", deleteUserCon);
// get   user
router.get("/:id", allUserCon);


module.exports = router;
