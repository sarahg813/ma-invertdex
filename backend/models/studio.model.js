const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudioSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: [],
    postalCode: String,
    country: String,
  },
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
  phoneNum: String,
  email: String,
  website: String,
  socialMedia: {
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
  },
  categories: [],
});

const Studio = mongoose.model("Studio", StudioSchema);

module.exports = Studio;
