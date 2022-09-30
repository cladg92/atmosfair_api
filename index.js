const express = require("express");

const app = express();

let airports = [
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
];

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/airports", (req, res) => {
  res.json(airports);
});

app.get("/airports/:iata_code", (req, res) => {
  res.json(airports.find((a) => a.iata_code == req.params.iata_code));
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

// listen for requests
app.listen(8081, () => {
  console.log("Your app is listening on port 8081.");
});
