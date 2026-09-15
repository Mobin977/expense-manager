const express = require("express");

const {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

// Create expense
router.post("/", createExpense);

// Get all expenses
router.get("/", getExpenses);

// Get single expense
router.get("/:id", getExpense);

// Update expense
router.put("/:id", updateExpense);

// Delete expense
router.delete("/:id", deleteExpense);

module.exports = router;