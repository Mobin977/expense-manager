# 💰 Expense Manager — Frontend

The frontend of the **Expense Manager** application, built with **React, JavaScript, Vite, Axios, and CSS**.

It provides a responsive finance dashboard for managing expenses through the backend REST API.

## 🚀 Live Application

https://expense-manager-six-pi.vercel.app/

## 🔗 Backend API

https://expense-manager-api-4xci.onrender.com/

## 📂 GitHub Repository

https://github.com/Mobin977/expense-manager

---

## ✨ Features

- ➕ Add expenses
- ✏️ Edit expenses
- 🗑️ Delete expenses
- 📋 Display recent expenses
- 💰 Total expense calculation
- 🔢 Total expense count
- 🔎 Search by title
- 🔎 Search by description
- 🏷️ Category filtering
- 📅 Date filtering
- 🔄 Combined search and filtering
- ❌ Clear search
- ❌ Clear date filter
- 📱 Responsive layout
- 🎨 Finance-focused dashboard UI

---

## 🛠️ Technologies

- React
- JavaScript
- Vite
- Axios
- CSS

---

## 🏗️ Frontend Architecture

```text
React Components
       │
       ▼
State Management
       │
       ▼
Axios
       │
       ▼
Express REST API
       │
       ▼
MongoDB
```

---

## 📁 Folder Structure

```text
frontend/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mobin977/expense-manager.git
```

Move into the frontend directory:

```bash
cd expense-manager/frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Vite will provide the local development URL.

---

## 🔗 API Configuration

The frontend communicates with the deployed backend through Axios.

Production API:

```text
https://expense-manager-api-4xci.onrender.com/api/expenses
```

The application uses this API for:

- Creating expenses
- Fetching expenses
- Updating expenses
- Deleting expenses

---

## 🔎 Search & Filtering

Users can:

### Search

Search expenses using:

- Expense title
- Description

### Category Filter

Available categories:

- Food
- Transport
- Shopping
- Bills
- Entertainment
- Health
- Education
- Other

### Date Filter

Users can select a specific date to display matching expenses.

### Combined Filters

Search, category, and date filters can be used together.

---

## 🎨 UI Design

The frontend uses a clean finance dashboard design featuring:

- Warm cream background
- Emerald green primary color
- White cards
- Rounded components
- Responsive layouts
- Clear action buttons
- Mobile-friendly design

---

## 📱 Responsive Design

The interface adapts to:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🚀 Deployment

The frontend is deployed on **Vercel**.

Live application:

https://expense-manager-six-pi.vercel.app/

---

## 🧪 Tested Features

- Add expense
- Edit expense
- Delete expense
- Search
- Category filter
- Date filter
- Combined filters
- Clear filters
- API integration
- Responsive layout

---

## 👨‍💻 Author

**Mobin Shaik**

GitHub:

https://github.com/Mobin977
