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

- notes-app/
- │
- ├── app/ # Expo React Native app
- │ └── notes/
- │ └── index.js
- │
- ├── backend/
- │ ├── controllers/
- │ ├── models/
- │ ├── routes/
- │ ├── middleware/
- │ ├── database/
- │ ├── app.js
- │ └── server.js
- │
- └── README.md

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn
- Expo CLI

Install Expo CLI if not already installed:
```bash
npm install -g expo-cli
🔧 Backend Setup
cd backend
npm install
node server.js
The API will run on http://localhost:3000

SQLite database (notes.db) is created automatically on first run

---

## 📱 Frontend Setup (Expo)

npm install
expo start
Run the app using:

Android Emulator

iOS Simulator

Expo Go on a physical device

⚠️ Important:
When testing on a real device, replace localhost in API calls with your computer’s local IP address.

---

## 🔐 Authentication

The app uses JWT-based authentication.

Authentication Flow
User registers with email and password

User logs in and receives a JWT token

Token is stored on the client

Token is sent in the Authorization header for all protected requests

Example header:

Authorization: Bearer <JWT_TOKEN>

## 📡 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and receive JWT
Register / Login Request Body

{
  "email": "user@example.com",
  "password": "password123"
}
Notes Routes (Protected)
Method	Endpoint	Description
GET	/notes	Get all user notes
POST	/notes	Create a new note
PUT	/notes/:id	Update a note
DELETE	/notes/:id	Delete a note
Create / Update Note Body

{
  "title": "My Note",
  "content": "This is the note content"
}
## ❌ Error Handling
The API returns clear JSON error responses.

Status Code	Meaning
400	Invalid or missing data
401	Unauthorized access
404	Resource not found
500	Internal server error
Example error response:

{
  "message": "Title required"
}
## 🔒 Security
Passwords are hashed using bcrypt

JWT protects all note routes

Users can only access their own notes

SQL queries are parameterized to prevent injection

## 🛠 Future Enhancements
TypeScript support

Frontend form validation

Offline note sync

Search and tags

Cloud database support (MongoDB / PostgreSQL)

Dark mode

Unit and integration tests

## 📄 License
This project is for educational and learning purposes.
You are free to modify and extend it.
