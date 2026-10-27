const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Agricultural Produce",
        "Machinery",
        "Equipment",
        "Seeds",
        "Farming Tools",
        "Other"
      ]
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    quantity: {
      type: Number,
      min: 0
    },
    type: {
      type: String,
      enum: ["SALE", "RENT", "BID"],
      default: "SALE"
    },
    location: {
      type: String,
      trim: true
    },
    images: [String],
    status: {
      type: String,
      enum: ["ACTIVE", "SOLD", "RENTED", "CLOSED"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
