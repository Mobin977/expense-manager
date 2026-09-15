# 💰 Expense Manager

A full-stack expense management application built with **React, Node.js, Express, and MongoDB**. The application allows users to create, view, update, delete, search, and filter expenses through a clean and responsive finance dashboard.

## 🚀 Live Demo

**Frontend:**
https://expense-manager-six-pi.vercel.app/

**Backend API:**
https://expense-manager-api-4xci.onrender.com/

## 📂 GitHub Repository

https://github.com/Mobin977/expense-manager

---

## ✨ Features

- ➕ Add new expenses
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 📋 View recent expenses
- 💰 Calculate total expense amount
- 🔢 Display total number of expenses
- 🔎 Search expenses by title or description
- 🏷️ Filter expenses by category
- 📅 Filter expenses by date
- 🔄 Combine search and filters
- ❌ Clear search and date filters
- 💾 Persistent MongoDB storage
- 📱 Responsive design
- 🎨 Clean finance dashboard interface
- 🔗 REST API integration

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Mongoose
- REST API
- CORS
- dotenv

### Database

- MongoDB

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 🏗️ Project Architecture

```text
React Frontend
      │
      │ Axios HTTP Requests
      ▼
Express REST API
      │
      │ Mongoose
      ▼
MongoDB
```

---

## 📁 Project Structure

```text
expense-manager/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   │   └── expenseController.js
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## 🔌 REST API Endpoints

Base URL:

```text
https://expense-manager-api-4xci.onrender.com/api/expenses
```

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| POST   | `/`      | Create an expense    |
| GET    | `/`      | Get all expenses     |
| GET    | `/:id`   | Get a single expense |
| PUT    | `/:id`   | Update an expense    |
| DELETE | `/:id`   | Delete an expense    |

---

## 💾 Expense Data Model

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

### Categories

- Food
- Transport
- Shopping
- Bills
- Entertainment
- Health
- Education
- Other

### Payment Methods

- Cash
- Card
- UPI
- Bank Transfer
- Other

---

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Mobin977/expense-manager.git
```

```bash
cd expense-manager
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on the Vite development URL.

---

## Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

The backend requires:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Never commit your `.env` file or MongoDB credentials to GitHub.

---

## 🎨 UI Highlights

The application uses a clean finance-focused design with:

- Warm cream background
- Emerald green accents
- White cards
- Responsive expense layout
- Clear summary cards
- Search and filter controls
- Mobile-friendly interface

---

## 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🧪 Tested Functionality

The following functionality has been tested:

- Create expense
- Read expenses
- Update expense
- Delete expense
- Search by title
- Search by description
- Category filtering
- Date filtering
- Combined filtering
- Clearing filters
- MongoDB persistence
- Production API communication

---

## 🚀 Deployment

### Frontend

Deployed using **Vercel**.

Live application:

https://expense-manager-six-pi.vercel.app/

### Backend

Deployed using **Render**.

Live API:

https://expense-manager-api-4xci.onrender.com/

### Database

MongoDB provides persistent database storage.

---

## 📸 Screenshots

Add application screenshots here:

```text
screenshots/
├── dashboard.png
├── add-expense.png
├── expense-list.png
└── filters.png
```

---

## 🎯 Project Goals

This project was built to demonstrate practical full-stack development skills including:

- React application development
- REST API development
- CRUD operations
- MongoDB database integration
- Frontend-backend communication
- Search and filtering
- Responsive UI development
- Production deployment

---

## 👨‍💻 Author

**Mobin Shaik**

GitHub:
https://github.com/Mobin977

---

## ⭐ If you find this project useful

Consider giving the repository a ⭐ on GitHub.
