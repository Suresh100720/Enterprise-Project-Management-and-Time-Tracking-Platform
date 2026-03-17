# 🚀 Enterprise Project Management & Time Tracking Platform

A Full Stack Web Application for Managing Projects, Teams, and Time Tracking

![last commit](https://img.shields.io/badge/last%20update-recent-green)
![open source](https://img.shields.io/badge/open%20source-yes-blue)
![license](https://img.shields.io/badge/license-MIT-orange)

View Demo · Installation · Usage

Built with 🤍 using **MERN Stack + Advanced Enterprise Features**

---

# 🧑‍💻 About the Project

This **Enterprise Project Management & Time Tracking Platform** is a full-stack SaaS-style application designed to manage:

✔ Organizations
✔ Projects
✔ Teams & Users
✔ Time Tracking
✔ Billing & Invoicing
✔ Client Collaboration

It supports **multi-role access control**, making it suitable for real-world enterprise environments.

---

# 📸 Project Overview

### Dashboard Layout

* Sidebar Navigation (Modules)
* Header with User & Logout
* Analytics Cards
* Charts & Reports

---

# 🎯 Scope 😲

i. Supports multi-organization (multi-tenant system)
ii. Enables role-based access control (RBAC)
iii. Tracks project progress and performance
iv. Manages teams, users, and skills
v. Tracks time entries and approvals
vi. Generates invoices and billing reports
vii. Enables real-time collaboration (chat & notifications)
viii. Can scale into a full SaaS enterprise solution

---

# ⚙️ Tech Stack 🍻

## Frontend

* React.js (Hooks, Context API)
* React Router
* Ant Design
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose (Aggregation Pipeline)

## Real-Time

* Socket.io

## File Storage

* AWS S3 / Cloudinary

---

# 👥 Multi-Role System

### 🔹 Super Admin

* Manage all organizations
* View system analytics
* Configure platform settings

### 🔹 Organization Admin

* Manage users & teams
* Create/delete projects
* Billing & reports

### 🔹 Project Manager

* Assign tasks & resources
* Track budgets
* Approve timesheets
* Communicate with clients

### 🔹 Team Member

* Log time
* Update tasks
* Upload deliverables
* Collaborate

### 🔹 Client

* View projects
* Track progress
* Download invoices
* Comment on tasks

---

# 📦 Core Modules 🤩

## 🏢 Organization & User Management

* Multi-tenant architecture
* Team & department structure
* User invitation system (email-based)
* Role-based access control (RBAC)
* Availability calendar
* Skill matrix

---

## 📁 Project Management

### Project Creation

* Project templates
* Budget allocation (Fixed / Hourly)
* Milestones
* Team assignment with roles
* Custom fields & metadata
* Tags & categories

---

## 📊 Project Dashboard

* Gantt chart (timeline)
* Burn-down charts
* Resource utilization
* Budget vs actual tracking
* Risk indicators
* Dependency tracking

---

## ✅ Task Management

* Nested tasks (Task → Subtask → Checklist)
* Task dependencies
* Priority matrix
* Recurring tasks
* Kanban workflows
* Bulk operations

---

## ⏱ Time Tracking

* Time entry logging
* Timesheet approvals
* Time-based reports

---

## 💰 Billing System

* Invoice generation
* Payment tracking
* Billing reports

---

## 💬 Communication

* Real-time chat (Socket.io)
* Comments system
* Notifications

---

# 📋 Requirements 😅

Install the following before running:

Node.js
https://nodejs.org

MongoDB
https://www.mongodb.com/try/download/community

VS Code
https://code.visualstudio.com/

---

# ⚡ Setup & Installation 👀

---

## 🔹 Step 1 — Clone Repository

```bash
git clone https://github.com/yourusername/enterprise-project-platform.git
cd enterprise-project-platform
```

---

## 🔹 Step 2 — Backend Setup

```bash
cd backend
npm install
```

Install required packages:

```bash
npm install express mongoose cors dotenv socket.io jsonwebtoken bcryptjs
```

---

## 🔹 Step 3 — MongoDB Setup

Run MongoDB:

```bash
mongod
```

Default connection:

```bash
mongodb://127.0.0.1:27017/epm
```

---

## 🔹 Step 4 — Run Backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔹 Step 5 — Frontend Setup

```bash
cd frontend
npm install
```

Install frontend libraries:

```bash
npm install axios react-router-dom antd socket.io-client tailwindcss
```

---

## 🔹 Step 6 — Run Frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API Endpoints (Sample)

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| GET    | /api/projects      | Get all projects |
| POST   | /api/projects      | Create project   |
| PUT    | /api/projects/:id  | Update project   |
| DELETE | /api/projects/:id  | Delete project   |

---

# 📄 Example Project Data

```json
{
  "name": "Enterprise App",
  "status": "In Progress",
  "budget": 10000,
  "type": "Fixed",
  "team": ["Developer", "Manager"],
  "tags": ["Web", "SaaS"]
}
```

---

# 🛑 Stop the Application

Press:

```
CTRL + C
```

in both terminals.

---

# 🛵 Roadmap

Future Enhancements:

* AI-based project predictions
* Advanced analytics dashboard
* Mobile app version
* Notifications via email/SMS
* File upload with AWS S3
* Advanced RBAC permissions UI

---

# 🤝 Contributing

Pull requests are welcome.
Open an issue before major changes.

---

# 👨‍💻 Author

Developed by Suresh

---

# 📜 License

This project is licensed under the **MIT License**

---

# ❤️ Built with

Enterprise Project Platform using
React · Node.js · Express · MongoDB · Socket.io
