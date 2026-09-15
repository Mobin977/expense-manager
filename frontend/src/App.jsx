import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5000/api/expenses";

const initialForm = {
  title: "",
  amount: "",
  category: "Food",
  date: "",
  paymentMethod: "UPI",
  description: "",
};

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [showForm, setShowForm] = useState(false);

  // Search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  // Fetch expenses
  const fetchExpenses = async () => {
    try {
      const response = await axios.get(API_URL);
      setExpenses(response.data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Handle form changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Open add form
  const handleOpenAddForm = () => {
    setEditingId(null);
    setFormData(initialForm);
    setShowForm(true);
  };

  // Close form
  const handleCloseForm = () => {
    setEditingId(null);
    setFormData(initialForm);
    setShowForm(false);
  };

  // Add / Update expense
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.amount || !formData.date) {
      alert("Please fill in title, amount and date.");
      return;
    }

    try {
      setSubmitting(true);

      const expenseData = {
        ...formData,
        amount: Number(formData.amount),
      };

      if (editingId) {
        const response = await axios.put(
          `${API_URL}/${editingId}`,
          expenseData
        );

        setExpenses((previous) =>
          previous.map((expense) =>
            expense._id === editingId
              ? response.data.expense
              : expense
          )
        );

        alert("Expense updated successfully!");
      } else {
        const response = await axios.post(
          API_URL,
          expenseData
        );

        setExpenses((previous) => [
          response.data.expense,
          ...previous,
        ]);

        alert("Expense added successfully!");
      }

      setFormData(initialForm);
      setEditingId(null);
      setShowForm(false);
    } catch (error) {
      console.error("Failed to save expense:", error);

      alert(
        error.response?.data?.message ||
          "Failed to save expense."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Edit expense
  const handleEdit = (expense) => {
    setEditingId(expense._id);

    setFormData({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: expense.date
        ? expense.date.substring(0, 10)
        : "",
      paymentMethod: expense.paymentMethod,
      description: expense.description || "",
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete expense
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setExpenses((previous) =>
        previous.filter((expense) => expense._id !== id)
      );

      if (editingId === id) {
        handleCloseForm();
      }

      alert("Expense deleted successfully!");
    } catch (error) {
      console.error("Failed to delete expense:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete expense."
      );
    }
  };

  // Filter expenses
  const filteredExpenses = expenses.filter((expense) => {
    const title = expense.title || "";
    const description = expense.description || "";

    // Search
    const matchesSearch =
      title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    // Category
    const matchesCategory =
      categoryFilter === "All" ||
      expense.category === categoryFilter;

    // Date
    const expenseDate = expense.date
      ? expense.date.substring(0, 10)
      : "";

    const matchesDate =
      dateFilter === "" ||
      expenseDate === dateFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDate
    );
  });

  // Total amount
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1>💰 Expense Manager</h1>
        <p>Track and manage your daily expenses</p>
      </header>

      <main className="container">

        {/* SUMMARY */}
        <section className="summary">

          <div className="summary-card">
            <h3>Total Expenses</h3>
            <p>{expenses.length}</p>
          </div>

          <div className="summary-card">
            <h3>Total Amount</h3>
            <p>
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>
          </div>

        </section>

        {/* ADD BUTTON */}
        {!showForm && (
          <section className="add-expense-section">
            <button
              className="open-form-btn"
              onClick={handleOpenAddForm}
            >
              ➕ Add New Expense
            </button>
          </section>
        )}

        {/* ADD / EDIT FORM */}
        {showForm && (
          <section className="form-section">

            <div className="form-header">

              <h2>
                {editingId
                  ? "✏️ Edit Expense"
                  : "➕ Add New Expense"}
              </h2>

              <button
                type="button"
                className="close-form-btn"
                onClick={handleCloseForm}
              >
                ✕
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="expense-form"
            >

              {/* TITLE */}
              <div className="form-group">
                <label htmlFor="title">
                  Expense Title
                </label>

                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Example: Lunch"
                />
              </div>

              {/* AMOUNT */}
              <div className="form-group">
                <label htmlFor="amount">
                  Amount
                </label>

                <input
                  id="amount"
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Example: 250"
                  min="0"
                />
              </div>

              {/* CATEGORY */}
              <div className="form-group">
                <label htmlFor="category">
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Entertainment">
                    Entertainment
                  </option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* DATE */}
              <div className="form-group">
                <label htmlFor="date">
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              {/* PAYMENT */}
              <div className="form-group">
                <label htmlFor="paymentMethod">
                  Payment Method
                </label>

                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                  <option value="UPI">UPI</option>
                  <option value="Bank Transfer">
                    Bank Transfer
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* DESCRIPTION */}
              <div className="form-group full-width">
                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Add a description..."
                  rows="4"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="add-expense-btn"
                disabled={submitting}
              >
                {submitting
                  ? "Saving..."
                  : editingId
                  ? "💾 Update Expense"
                  : "➕ Add Expense"}
              </button>

              {/* CANCEL */}
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCloseForm}
              >
                Cancel
              </button>

            </form>

          </section>
        )}

        {/* EXPENSE SECTION */}
        <section className="expense-section">

          <h2>Recent Expenses</h2>

          {/* SEARCH + FILTERS */}
          <div className="filters">

            {/* SEARCH */}
            <div className="search-wrapper">

              <span className="search-icon">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />

              {searchTerm && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}

            </div>

            {/* CATEGORY */}
            <select
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
            >
              <option value="All">
                All Categories
              </option>

              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">
                Entertainment
              </option>
              <option value="Health">Health</option>
              <option value="Education">
                Education
              </option>
              <option value="Other">Other</option>
            </select>

            {/* DATE FILTER */}
            <div className="date-filter-wrapper">

              <input
                type="date"
                value={dateFilter}
                onChange={(event) =>
                  setDateFilter(event.target.value)
                }
              />

              {dateFilter && (
                <button
                  type="button"
                  className="clear-date-btn"
                  onClick={() => setDateFilter("")}
                  aria-label="Clear date filter"
                >
                  ✕
                </button>
              )}

            </div>

          </div>

          {/* LOADING */}
          {loading ? (
            <p>Loading expenses...</p>

          ) : filteredExpenses.length === 0 ? (

            <div className="empty-state">

              <p>
                {expenses.length === 0
                  ? "No expenses found."
                  : "No expenses match your search or filter."}
              </p>

              {expenses.length === 0 && !showForm && (
                <button
                  className="empty-add-btn"
                  onClick={handleOpenAddForm}
                >
                  ➕ Add Your First Expense
                </button>
              )}

            </div>

          ) : (

            <div className="expense-list">

              {filteredExpenses.map((expense) => (

                <div
                  className="expense-card"
                  key={expense._id}
                >

                  <div className="expense-info">

                    <h3>{expense.title}</h3>

                    <p>
                      {expense.description ||
                        "No description"}
                    </p>

                    <div className="expense-meta">

                      <span>
                        {expense.category}
                      </span>

                      <span>
                        {expense.paymentMethod}
                      </span>

                    </div>

                  </div>

                  <div className="expense-right">

                    <strong>
                      ₹
                      {expense.amount.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                    <small>
                      {new Date(
                        expense.date
                      ).toLocaleDateString("en-IN")}
                    </small>

                    <div className="expense-actions">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(expense)
                        }
                      >
                        ✏️ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(expense._id)
                        }
                      >
                        🗑️ Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;
