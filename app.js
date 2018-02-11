var express = require("express");
var app  = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var friends = ["Rishab","Rajat","Snehil","Lokesh"];


app.get("/",function (req, res) {
    res.render("home");
});
app.get("/friends",function (req, res) {
  res.render("friends",{friends : friends});
});

app.post("/addFriends",function (req, res) {
    var newFriend = req.body.new_name;
    friends.push(newFriend);
    // res.send("You have reached the POST route");
    res.redirect("/friends")
});


app.listen(3000,function () {
    console.log("listening on port 3000");
});