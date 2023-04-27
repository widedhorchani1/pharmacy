const express= require ('express')
const mongoose = require ('mongoose')
const app = express()

require ("dotenv").config()
URI=process.env.URI
mongoose.connect(URI).then(console.log("connect to the database")).catch((err)=>console.log(err))

console.log("ok")

app.use(express.json());
app.use("/api/myapp", require("./routes/user"))
app.listen(5000,(err=>{
    if(err){
        throw (err)
    }
   console.log("server is running app ")
}))