#  Thread Studios - Full Stack Handmade Product Website

Welcome to **Thread Studios** — a full-stack web application for showcasing and managing beautiful, fairy-themed handmade products like bows, ribbons, bookmarks, and bracelets.

This project consists of a modern **frontend** (HTML, CSS, JS) and a **Node.js + Express** backend with **MongoDB** as the database. It is designed to support both customers browsing products and admins managing inventory.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Deployment Guide](#deployment-guide)
- [Contributing](#contributing)
- [Author](#author)

---

## Features

###  Frontend
- Beautiful landing page with product showcases
- Static pages for About and Contact
- Product listing section (dynamic-ready)
- Responsive design using basic CSS

###  Backend
- Express server with routing and controllers
- MongoDB integration with Mongoose
- Product model and basic CRUD setup
- Environment-based config management

###  Ready for
- User Authentication (JWT)
- Admin dashboard extension

ThreadStudiosProject/
├── frontend/
│ ├── index.html
│ ├── about.html
│ ├── contact.html
│ ├── style/
│ └── js/
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── config/
│ └── .env


Pretty basic for now. Planning to add user login and admin dashboard later.

---

 Ideas for later
Add login/signup with JWT

Product search, filters and categories

Dashboard for managing inventory

Payment integration (maybe Razorpay)

Connect Instagram API for live posts?

TECH STACK
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Tools: VS Code, GitHub, Postman

Author
Pratik Sawant
Instagram: @thethreadstudios
Based in India 🇮🇳

## 🚀 How to run it locally

### For backend:

```bash
cd backend
npm install
# make sure Mongo is running locally or use cloud URI
node server.js

