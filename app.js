const express = require("express");
const bodyParser = require("body-parser");
const { getDate } = require("./date");
const date = require(__dirname + "/date.js");

console.log(getDate);

const app = express();

let items = ["Buy a food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
   let day = date.getDay();

    res.render("list", {listTittle: day, newListItems: items});
});

app.post("/", function(req, res){

    let item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", {listTittle: "Work list", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItem.push(item);
    res.redirect("/work")
});

app.get("/about", function(req, res){
    res.render("about")
})

app.listen(3000, function(){
    console.log("Voom! It's up and running")
});