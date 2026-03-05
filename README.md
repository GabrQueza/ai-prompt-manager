# AI Prompt Vault

A sleek, full-stack application for managing, organizing, and saving your best AI prompts.
Built with **Next.js**, **Chakra UI**, **Node.js (Express)**, and **Prisma** (SQLite).

---

## 📁 Project Structure

This project is organized into a monorepo-style structure with two main directories:
- `/backend`: Node.js Express API connected to a Prisma SQLite database.
- `/frontend`: Next.js web application styled with Chakra UI.

---

## 🚀 Getting Started

To run this project locally, you will need to open **two separate terminal windows** (one for the backend and one for the frontend).

### 1. Starting the Backend (API)

The backend handles database operations and runs on **Port 3001**.

```bash
# 1. Navigate to the backend folder
cd backend

# 2. Install backend dependencies
npm install

# 3. Create the SQLite database and run migrations
npx prisma migrate dev

# 4. Start the server
npm run start
```
*If successful, you will see: `Server is running on http://localhost:3001`.*

### 2. Starting the Frontend (UI)

The frontend is the visual dashboard and runs on **Port 3000**.

```bash
# 1. Open a NEW terminal window and navigate to the frontend folder
cd frontend

# 2. Install frontend dependencies
# (Note: --legacy-peer-deps is used for Chakra UI v2 compatibility with Next.js 15)
npm install --legacy-peer-deps

# 3. Start the Next.js development server
npm run dev
```
*If successful, access the application by opening your browser to: `http://localhost:3000`.*

---

## 🛠️ Technology Stack

**Frontend Environment:**
- [Next.js](https://nextjs.org/) (App Router & Server Components)
- [Chakra UI v2](https://v2.chakra-ui.com/) (Component Library & Styling)
- Axios (API Integration)
- Framer Motion (Animations)

**Backend Environment:**
- [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)
- TypeScript & `ts-node`
- [Prisma ORM](https://www.prisma.io/)
- SQLite (Zero-config local database)

---

## 📌 Features
- **Prompt Dashboard**: View your collection structured in a beautifully responsive grid layout.
- **Create Prompts**: Instantly add new prompts to your vault with Titles and Categories.
- **Copy to Clipboard**: One-click feature to quickly copy any prompt's content to use in ChatGPT, Claude, etc.
- **Manage Collection**: Safely delete outdated or unwanted prompts from your database.
