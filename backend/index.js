const express = require("express")
const app = express()
const multer = require("multer")
const path = require("path");
const connection= require("./db/db.js");


// here is imported
const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCat = require("./routes/categories")



// db connection
connection();


app.use(express.json())


app.use("/images", express.static(path.join(__dirname, "/images")))
const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    callb(null, req.body.name)
  },
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

//routes of 
app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/category", authCat)

//server running
app.listen("5000", () => {
  console.log("backend running...5000")
})
