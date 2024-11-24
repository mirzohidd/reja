console.log("Web Serverni boshlash");

const express = require("express");
const res = require("express/lib/response");
const app = express();


//  MongoDB connect
const db = require("./server").db();

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 : Session

// 3 Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item",(req, res)=>{
    console.log(req.body);
    res.json({test:"success"});
})
app.get("/", function (req, res) {
    res.render(`reja`);
});
app.get("/author",(req,res)=>{

    res.render("author", { user:user });
})

module.exports = app;