const router = require("express").Router()
const {addnewCat,allCat} = require("../controlers/categoriesCon")


// new category
router.post("/", addnewCat)


// get all cat
router.get("/", allCat)

module.exports = router
