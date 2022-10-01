const mongoose = require("mongoose");

// Define the Schema
let airportSchema = mongoose.Schema({
  iata_code: { type: String, required: true },
  name: { type: String, required: true },
  latitude_deg: { type: Number, required: true },
  longitude_deg: { type: Number, required: true },
  municipality: { type: String, required: true },
});

// Create the model
let Airport = mongoose.model("Airport", airportSchema);

// Export the model as Airport
module.exports.Airport = Airport;
