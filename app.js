var express=require("express");
//app.use(express.static(__dirname+"/public"))
var app=express();
app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html")
})
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html")
})
app.get("/girl.jpg",function(req,res){
    res.sendFile(__dirname+"/girl.jpg")
})
app.get("/addition",function(req,res){
    res.sendFile(__dirname+"/add.html")
})
app.listen(9090);