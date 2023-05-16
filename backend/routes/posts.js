const router = require("express").Router()

const {createCon,updateCon,readCon,deleteCon,readAllCon}= require("../controlers/postCon")

//create post
router.post("/", createCon)

// update post
router.put("/:id", updateCon)

// get post
router.get("/:id", readCon)

// delete
router.delete("/:id", deleteCon)

// get all post
router.get("/", )

//localhost:5000/posts?user=ram

module.exports = router
