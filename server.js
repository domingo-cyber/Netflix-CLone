require('dotenv').config();
const express = require('express');

const path = require('path');
let app = express();
const hbs=require("hbs");
const collection =require("./mongodb")
const tempelatePath=path.join(__dirname,'tempelates')
app.use(express.json());
app.set("view engine","hbs")
console.log(tempelatePath);

app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

let initial_path = path.join(__dirname, "public");


app.use(express.static(initial_path));


app.get("/signup",(req,res)=>{res.render("signup")

})
app.post("/signup",async(req,res)=>{

const data={
    name:req.body.name,
    password:req.body.password

}

await collection.insertMany([data])


    res.sendFile(path.join(initial_path, "signin.html"));
  
}
)

// res.sendFile(path.join(initial_path, "index.html"));


app.get('/signin', (req, res) => {
    res.sendFile(path.join(initial_path, "signin.html"));
})
app.post('/signin', async (req, res) => {
   try{
          const email=req.body.name;
          const password=req.body.password;
          const useremail=await collection.findOne({name:email});
          
         if(useremail.password===password)
         {
            
           res.sendFile(path.join(initial_path, "signedin.html"));
            
           
         }
         else{
            res.sendFile(path.join(initial_path, "signin.html"));
         }
          
   }
   catch(error)
   {
    res.sendFile(path.join(initial_path, "signin.html"));
   }
})
app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000......');
})