#  QuoteForge

**QuoteForge** is a full-stack web app that delivers motivational quotes with a clean, responsive interface.  
Built using **React + Vite** for the frontend and **Node.js + Express** for the backend, it’s deployed with a modern **CI/CD pipeline** via GitHub Actions and **Render**.

>  *“It always seems impossible until it’s done.” — Nelson Mandela*

---

##  Live Demo

-  **Frontend:** [https://quoteforge-1.onrender.com](https://quoteforge-1.onrender.com)  
-  **Backend API:** [https://quoteforge.onrender.com/api/quote](https://quoteforge.onrender.com/api/quote)

---

##  Overview

QuoteForge fetches and displays random motivational quotes with smooth animations, light/dark mode, and error handling.  
It demonstrates modern full-stack practices, automated CI/CD, and cloud deployment.

###  Features
-  Random motivational quotes via REST API  
-  Light/Dark mode toggle  
-  Instant builds with Vite  
-  Loading and error feedback  
-  CI/CD workflow with GitHub Actions  
-  Live hosting on Render  

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, Vite, CSS (Poppins font) |
| **Backend** | Node.js, Express |
| **Version Control** | Git & GitHub |
| **CI/CD** | GitHub Actions |
| **Deployment** | Render (Free Tier) |
| **Language** | JavaScript (ES6+) |

---

## ⚙️ CI/CD Workflow

GitHub Actions automates testing and build verification on every push or pull request.

### `.github/workflows/ci.yml`
```yaml
name: Build and Test QuoteForge
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install and build frontend
        working-directory: frontend
        run: |
          npm install --legacy-peer-deps
          npm run build

      - name: Install backend dependencies
        working-directory: backend
        run: npm install

         
  
 ## Local Development Setup

To run the project locally:

```bash
# 1️ Clone the repository
git clone https://github.com/ayan-i/QuoteForge.git
cd QuoteForge

# 2️ Run backend
cd backend
npm install
node server.js
# Backend runs on http://localhost:5000

# 3️ Run frontend
cd ../frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
