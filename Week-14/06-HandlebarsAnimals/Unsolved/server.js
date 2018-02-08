var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  const dog = animals.find(e => e.animalType === "dog")
  // 1. Send the dog object from the animals array to the dog.handlebars file.
  res.render("dog", dog)
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    animals: animals.filter(x => x.pet)
  }
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  res.render("index", data)
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  const data = {
    animals: animals.filter(x => !x.pet)
  }
  // 3. Send all the animals that are not pets to the index.handlebars file.
  res.render("index", data)
});

app.listen(port);
