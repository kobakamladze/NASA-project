import mongoose from "mongoose";

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  mission: String,
  rocket: String,
  launchDate: Date,
  destination: String,
  custmoer: [String],
  upcoming: Boolean,
  success: Boolean,
});

export { launchesSchema };
