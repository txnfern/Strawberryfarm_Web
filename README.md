# 🍓 Strawberry Farm Web

A modern full-stack web application for managing a strawberry farm system.  
Built with **Vite + React + Tailwind CSS** and powered by **Node.js + MongoDB**.

---

## 🌐 Live Demo

👉 https://strawberryfarm-web.vercel.app/

---

## 🚀 Features

- 🔐 Authentication system (Login / Register)
- 🌱 Farm management system (items, products, or data)
- 🔍 Search & filter functionality
- 📊 RESTful API integration
- 📱 Responsive UI (Mobile-friendly)
- ⚡ High performance with Vite

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 📦 Axios

### Backend
- 🟢 Node.js
- 🚀 Express.js

### Database
- 🍃 MongoDB

---

## 🧠 Architecture Diagram

sequenceDiagram
    participant U as User
    participant F as Frontend (React)
    participant B as Backend (Express)
    participant DB as MongoDB

    U->>F: Input (Login / Data)
    F->>B: API Request
    B->>DB: Query / Save Data
    DB-->>B: Response
    B-->>F: JSON Response
    F-->>U: Show Result