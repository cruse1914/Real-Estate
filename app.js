const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// -------------Subscribe--------------- //
const encrypt = require("mongoose-encryption");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

app.get("/", function(req, res){
  res.render("main");
});
app.get("/about", function(req, res){
  res.render("about");
});
app.get("/project", function(req, res){
  res.render("project");
});
app.get("/p1", function(req, res){
  res.render("p1");
});
app.get("/p2", function(req, res){
  res.render("p2");
});
app.get("/p3", function(req, res){
  res.render("p3");
});
app.get("/p3", function(req, res){
  res.render("p3");
});
app.get("/p4", function(req, res){
  res.render("p4");
});
app.get("/p5", function(req, res){
  res.render("p5");
});
app.get("/p6", function(req, res){
  res.render("p6");
});
app.get("/p7", function(req, res){
  res.render("p7");
});
app.get("/p8", function(req, res){
  res.render("p8");
});
app.get("/p9", function(req, res){
  res.render("p9");
});
app.get("/p10", function(req, res){
  res.render("p10");
});
app.get("/p101", function(req, res){
  res.render("p101");
});
app.get("/p110", function(req, res){
  res.render("p110");
});
app.get("/residential", function(req, res){
  res.render("residential");
});
app.get("/interiors", function(req, res){
  res.render("interiors");
});
app.get("/comm", function(req, res){
  res.render("comm");
});
app.get("/colla", function(req, res){
  res.render("colla");
});
app.get("/master", function(req, res){
  res.render("master");
});
app.get("/studio", function(req, res){
  res.render("studio");
});
app.get("/team", function(req, res){
  res.render("team");
});
app.get("/map", function(req, res){
  res.render("map");
});
app.get("/map1", function(req, res){
  res.render("map1");
});
app.get("/map2", function(req, res){
  res.render("map2");
});
app.get("/map3", function(req, res){
  res.render("map3");
});
app.get("/map4", function(req, res){
  res.render("map4");
});
app.get("/map5", function(req, res){
  res.render("map5");
});
app.get("/map6", function(req, res){
  res.render("map6");
});
app.get("/map7", function(req, res){
  res.render("map7");
});
app.get("/map8", function(req, res){
  res.render("map8");
});
app.get("/map9", function(req, res){
  res.render("map9");
});
app.get("/map10", function(req, res){
  res.render("map10");
});
app.get("/map11", function(req, res){
  res.render("map11");
});
app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("/success", function(req, res){
  res.render("success");
});
app.get("/failure", function(req, res){
  res.render("failure");
});
//Subscribe //
app.post("/s", function(req, res){

  const name = req.body.name;
  const email = req.body.email;

  const data ={
  members: [
    {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name
      }
    }
  ]
};
const jsonData = JSON.stringify(data);
const url = "https://us2.api.mailchimp.com/3.0/lists/process.env.UNIQUEKEY";
const options = {
  method: "POST",
  auth: process.env.AUTH
}

const request = https.request(url, options, function(response){

  if (response.statusCode === 200) {
    res.render("success");
  }else {
  res.render("failure");
  }

  response.on("data", function(data){
    console.log(JSON.parse(data));
  })
})

request.write(jsonData);
request.end();
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port Successfully !");
});
