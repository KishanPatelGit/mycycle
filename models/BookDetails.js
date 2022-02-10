const mongoose = require("mongoose");
const BookDetailsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  },
  priceDetails: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BookDetails", BookDetailsSchema);
