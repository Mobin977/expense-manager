const Expense = require("../models/Expense");

// Create Expense
const createExpense = async (req, res) => {
  try {
    const {
      title,
      amount,
      category,
      date,
      paymentMethod,
      description,
    } = req.body;

    if (!title || amount === undefined || !category || !paymentMethod) {
      return res.status(400).json({
        message: "Title, amount, category and payment method are required",
      });
    }

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      paymentMethod,
      description,
    });

    res.status(201).json({
      message: "Expense created successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create expense",
      error: error.message,
    });
  }
};

// Get All Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({
      date: -1,
      createdAt: -1,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch expenses",
      error: error.message,
    });
  }
};

// Get Single Expense
const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch expense",
      error: error.message,
    });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json({
      message: "Expense updated successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update expense",
      error: error.message,
    });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete expense",
      error: error.message,
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
};