# 🧥 WINTER-CARE

[![Project Status](https://img.shields.io/badge/status-Completed-brightgreen)]()
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)]()
[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-orange?logo=firebase)]()
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-skyblue?logo=tailwindcss)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()

---

## 🔗 Live Demo

[Winter-Care Live Site](https://winter-care-4560b.web.app)

## 🔗 GitHub Repository

[GitHub Repo](https://github.com/arman685913/winter-care.git)

## 🔗 Requirement 

[Requirement](https://docs.google.com/document/d/1f3tbugV_D0CATzbteer6reXLVWmtoAIIX4MaffV48kI/edit?usp=sharing)

---

## 📖 Overview

**WINTER-CARE** is a simple and easy-to-use web application that helps people donate winter clothing to those in need across Bangladesh.
When the weather gets colder, thousands of vulnerable people, especially in rural and low-income areas, struggle to stay warm because they don’t have enough warm clothing.

This platform connects donors with volunteers, making it easy for users to donate clothes and bring warmth to those who need it most. Users can view donation campaigns, check details after logging in, and submit donations via a form.

---

## 📝 Table of Contents

* [Features](#-features)
* [Technologies](#-technologies-used)
* [Screenshots](#-screenshots)
* [Folder Structure](#-folder-structure)
* [Installation](#-installation--setup-instructions)
* [Author](#-author)
* [License](#-license)

---

## 🌟 Features

* **Home Page**

  * Stories of struggle in winter
  * How It Works section
  * Success stories section
  * Supported divisions showcase
* **Donation Campaigns**

  * Browse all campaigns
  * Filter by category (Jacket, Blanket, Sweater) & division (Dhaka, Chittagong, Rajshahi)
* **Donation Details Page**

  * Private route (login required)
  * Detailed campaign info
  * Donation form with quantity, item type, pickup location, and optional notes
  * Toast message on submission
* **Authentication**

  * Registration & Login
  * Password validation & toggling
  * Forget Password with email pre-filled if typed on login
  * Google OAuth login
* **Dashboard**

  * Private route
  * View profile info (name, email, photo, UID)
  * Update profile feature (name & photo)
* **Error Page**

  * 404 Not Found page with "Go Back Home" button
* **Animations**

  * AOS animations on Home Page
* **Responsive Design**

  * Fully responsive with Tailwind CSS

---

## 💻 Technologies Used

* React.js
* Firebase Authentication
* Firebase Hosting
* Tailwind CSS
* React Router
* AOS (Animate on Scroll)
* React Icons
* React Toastify

---

---

## 📂 Folder Structure

```
winter-care/
├─ public/
├─ src/
│  ├─ assets/                 # Images
│  ├─ Components/
│  │  ├─ Banner/
│  │  ├─ Dashboard/
│  │  ├─ Donation/
│  │  ├─ Home/
│  │  └─ Auth/
│  ├─ Provider/               # AuthProvider
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md
```

---

## ⚡ Installation / Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/arman685913/winter-care.git
   cd winter-care
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
   npm start
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 👤 Author

**Md. Arman Hosen**
Email: [armanfarazi01@gmail.com](mailto:armanfarazi01@gmail.com)

---

##  License

This project is licensed under the MIT License.

---

##  Notes

* Logged-in users remain authenticated on page reload.
* Private routes redirect to login if the user is not authenticated.
* Hosted on Firebase Hosting; SPA routing supported.
