const express = require("express");
const mongoose = require("mongoose");
const Models = require("./models.js");

const app = express();

// Define mongoose model
const Airports = Models.Airport;
// Connect mongoose to database
mongoose.connect("mongodb://localhost:27017/airportsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*let airports = [
  {
    iata_code: "HIR",
    name: "Honiara International Airport",
    latitude: -9.428,
    longitude: 160.054993,
    municipality: "Honiara",
  },
  {
    iata_code: "POM",
    name: "Port Moresby Jacksons International Airport",
    latitude: -9.443380356,
    longitude: 147.2200012,
    municipality: "Port Moresby",
  },
  {
    iata_code: "KEF",
    name: "Keflavik International Airport",
    latitude: 63.985001,
    longitude: -22.6056,
    municipality: "Reykjavík",
  },
];*/

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/airports", (req, res) => {
  Airports.find()
    .then((airports) => {
      res.status(200).json(airports);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

/*app.get("/airports/:iata_code", (req, res) => {
  Airports.findOne({ iata_code: req.params.iata_code })
    .then((a) => {
      res.json(a);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});*/

// listen for requests
app.listen(8081, () => {
  console.log("Your app is listening on port 8081.");
});
