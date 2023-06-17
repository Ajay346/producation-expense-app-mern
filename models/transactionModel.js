const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is Required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    category: {
      type: String,
      required: [true, "category is Required"],
    },
    reference: {
      type: String,
      required: [true, "reference is Required"],
    },
    description: {
      type: String,
      required: [true, "description is Required"],
    },
    date: {
      type: Date,
      required: [true, "date is Required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);

module.exports = transactionModel;
