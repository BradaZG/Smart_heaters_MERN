const mongoose = require('mongoose');

const heaterSchema = mongoose.Schema(
  {
    client_name: { type: String, required: true },
    address: { type: String, required: true },
    readings: [
      {
        temperature: { type: Number },
        timestamp: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Heater = mongoose.model('Heater', heaterSchema);

module.exports = Heater;
