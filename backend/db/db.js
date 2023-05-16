const mongoose=require("mongoose");
const dotenv =require("dotenv");

dotenv.config();


const user=process.env.DB_USER;
const pass= process.env.DB_PASS;



const connection=()=>{

    const urlDatbase=`mongodb+srv://${user}:${pass}@blog-website.7mrkylc.mongodb.net/?retryWrites=true&w=majority`;


    // old

    mongoose.connect(urlDatbase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(console.log("Connected to MongoDB")).catch((err) => console.log(err))

};
module.exports= connection;