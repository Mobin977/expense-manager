const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Food",
        "Transport",
        "Shopping",
        "Bills",
        "Entertainment",
        "Health",
        "Education",
        "Other",
      ],
    },

    date: {
      type: Date,
      required: true,
      default: Date.now,
    },

    paymentMethod: {
      type: String,
      required: true,
      enum: ["Cash", "Card", "UPI", "Bank Transfer", "Other"],
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);