import mongoose from "mongoose";

const planetsSchema = new mongoose.Schema({
  koi_disposition: {
    type: String,
    required: true,
  },
  koi_insol: {
    type: Number,
    required: true,
  },
  koi_prad: {
    type: Number,
    required: true,
  },
});

export { planetsSchema };
