# ⚙️ Expense Manager — Backend

The backend REST API for the **Expense Manager** application, built with **Node.js, Express.js, MongoDB, and Mongoose**.

The API provides complete CRUD functionality for managing expenses and connects the React frontend with MongoDB.

## 🚀 Live API

https://expense-manager-api-4xci.onrender.com/

## 🔗 Frontend

https://expense-manager-six-pi.vercel.app/

## 📂 GitHub Repository

https://github.com/Mobin977/expense-manager

---

## ✨ Features

- Create expenses
- Get all expenses
- Get a single expense
- Update expenses
- Delete expenses
- MongoDB persistence
- Mongoose schema validation
- RESTful API architecture
- CORS support
- Environment variable configuration
- Production deployment with Render

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

---

## 🏗️ Backend Architecture

```text
Client
  │
  │ HTTP Request
  ▼
Express Router
  │
  ▼
Controller
  │
  ▼
Mongoose Model
  │
  ▼
MongoDB
```

---

## 📁 Folder Structure

```text
backend/
│
├── controllers/
│   └── expenseController.js
│
├── models/
│   └── Expense.js
│
├── routes/
│   └── expenseRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
└── .env
```

---

## 🔌 API Endpoints

Base URL:

```text
https://expense-manager-api-4xci.onrender.com/api/expenses
```

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| POST   | `/`      | Create expense     |
| GET    | `/`      | Get all expenses   |
| GET    | `/:id`   | Get single expense |
| PUT    | `/:id`   | Update expense     |
| DELETE | `/:id`   | Delete expense     |

---

## 📝 Create Expense

### Request

```http
POST /api/expenses
```

Example JSON:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-09-15",
  "paymentMethod": "UPI",
  "description": "Lunch with friends"
}
```

---

## 📋 Expense Schema

Each expense contains:

```text
title
amount
category
date
paymentMethod
description
createdAt
updatedAt
```

### Category Values

```text
Food
Transport
Shopping
Bills
Entertainment
Health
Education
Other
```

### Payment Methods

```text
Cash
Card
UPI
Bank Transfer
Other
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mobin977/expense-manager.git
```

Move into the backend:

```bash
cd expense-manager/backend
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

⚠️ Never commit `.env` or your MongoDB credentials to GitHub.

---

## ▶️ Run the Backend

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Local API:

```text
http://localhost:5000
```

Expenses endpoint:

```text
http://localhost:5000/api/expenses
```

---

## 🌐 CORS

CORS is enabled so that the React frontend can communicate with the Express API.

```js
app.use(cors());
```

---

## 🗄️ Database

MongoDB is used as the persistent database.

Mongoose handles:

- Schema definition
- Validation
- Database queries
- CRUD operations
- Document management

---

## 🚀 Deployment

The backend is deployed using **Render**.

Live API:

https://expense-manager-api-4xci.onrender.com/

API endpoint:

https://expense-manager-api-4xci.onrender.com/api/expenses

---

## 🧪 API Testing

The backend CRUD operations were tested successfully:

- POST — Create expense
- GET — Fetch expenses
- GET `/:id` — Fetch individual expense
- PUT `/:id` — Update expense
- DELETE `/:id` — Delete expense

---

## 👨‍💻 Author

**Mobin Shaik**

GitHub:

https://github.com/Mobin977
