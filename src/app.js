const express=require('express');
const app=express();
const path= require('path');
const staticpath=path.join(__dirname,"../public")
const viewpath=path.join(__dirname,"../views")
app.use(express.static(staticpath))
app.set("views",viewpath)
app.set("view engine","hbs")
// app.get()
app.get("",(req,res)=>{
    res.render("index")
})
app.get("",(req,res)=>{
    res.send("this is home page")
})





app.listen(8000,()=>{
    console.log("server is created")
})