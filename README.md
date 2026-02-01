# 📒 Mobile Note-Taking App (React Native + Expo)

A full-stack mobile note-taking application built with **React Native (Expo)** and a **Node.js + Express** backend.  
The app allows users to securely create, view, edit, and delete personal notes, with data stored in a SQLite database.

---

## ✨ Features

- 📱 Cross-platform mobile app (Android & iOS)
- 🔐 User authentication (Register / Login)
- 📝 CRUD operations for notes
- 👤 Each user has a private note collection
- 🗄 SQLite database for persistent storage
- 🌐 RESTful API built with Express
- ✅ Server-side validation and clear error handling

---

## 🧰 Tech Stack

### Frontend
- React Native
- Expo
- JavaScript

### Backend
- Node.js
- Express
- SQLite
- JWT (JSON Web Tokens)
- bcrypt (password hashing)

---

## 📁 Project Structure

```
notes-app/
├─ README.md
├─ app/                          # Expo (React Native) frontend
│  └─ notes/
│     └─ index.js                # Notes screen (UI entry)
│
└─ backend/                      # Node.js + Express backend API
   ├─ server.js                  # Starts the server (port 3000)
   ├─ app.js                     # Express app setup + route mounting
   │
   ├─ database/
   │  └─ db.js                   # SQLite connection + table creation
   │
   ├─ middleware/
   │  └─ auth.js                 # JWT auth middleware (protects routes)
   │
   ├─ models/
   │  ├─ User.js                 # User DB operations
   │  └─ Note.js                 # Note DB operations
   │
   ├─ controllers/
   │  ├─ authController.js       # Register/login logic
   │  └─ noteController.js       # Notes CRUD logic
   │
   └─ routes/
      ├─ authRoutes.js           # /auth/register, /auth/login
      └─ noteRoutes.js           # /notes CRUD (protected)

```

---

## 🚀 Getting Started

### 1) Prerequisites
- Node.js (v18+ recommended)
- npm (or yarn)
- Expo CLI

Install Expo CLI:
```bash
npm install -g expo-cli
```

### 2) Backend Setup
```bash
cd backend
npm install
node server.js
```

API runs at:
- http://localhost:3000

SQLite DB file (`notes.db`) is created automatically when the server starts.

### 3) Frontend Setup (Expo)
From the project root:
```bash
npm install
expo start
```

⚠️ If you run the app on a physical device, replace `localhost` in API calls with your computer’s local IP address.

---

## 🔐 API Endpoints

### Auth
- `POST /auth/register`
- `POST /auth/login`

Register/Login body:
```json
{ "email": "user@example.com", "password": "password123" }
```

### Notes (Protected - requires JWT)
Send header:
```
Authorization: Bearer <JWT_TOKEN>
```

- `GET /notes` — list notes for logged-in user
- `POST /notes` — create note
- `PUT /notes/:id` — update note
- `DELETE /notes/:id` — delete note

Create/Update body:
```json
{ "title": "My Note", "content": "Note content here" }
```

---

## ❌ Error Handling

The API returns JSON error responses like:
```json
{ "message": "Title required" }
```

Common status codes:
- `400` Bad Request (validation errors)
- `401` Unauthorized (missing/invalid token)
- `404` Not Found (note not found / not owned by user)

---

## 📄 License
Educational use only.
