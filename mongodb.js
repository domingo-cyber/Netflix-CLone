require('dotenv').config();
const mongoose=require("mongoose");
const dburl=process.env.DB_URL
mongoose.connect(dburl)
.then(()=>{
    console.log("mongo connected");
}).catch(()=>{
    console.log("failed mongo");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'Please enter your email',
        
    },
    password:{
        type:String,
        required:true
    }
})
const collection =new mongoose.model("Logincollections",LogInSchema)
module.exports=collection