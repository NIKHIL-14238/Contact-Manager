# 📇 Contact Manager  

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)  
[![Backend Express](https://img.shields.io/badge/Backend-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)  
[![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Frontend Deployment Pending](https://img.shields.io/badge/Frontend-Deployment%20Pending-FF69B4?logo=vercel&logoColor=white)](https://vercel.com/)  
[![Backend Deployment Pending](https://img.shields.io/badge/Backend-Deployment%20Pending-46E3B7?logo=render&logoColor=white)](https://render.com/)  

A simple **Contact Manager Application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This app allows users to add, view, and manage contacts efficiently.  

---

## 🚀 Features (Planned)  
- ✍️ Add new contacts with **name** and **phone number**  
- 👀 View all contacts in a clean UI  
- ✅ Edit or delete existing contacts  
- ⚡ Responsive and user-friendly interface  

---

## 🛠️ Tech Stack  
- **Frontend:** React, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Deployment:** Vercel (Frontend), Render (Backend)  

---

## ⚙️ Installation & Setup  

Run the following commands step by step 👇  

```bash
# 1. Clone the repository
git clone https://github.com/NIKHIL-14238/Contact-Manager.git
cd Contact-Manager

# 2. Install dependencies for backend
cd backend
npm install

# 3. Install dependencies for frontend
cd ../frontend
npm install

# 4. Create environment variables (inside backend folder)
echo "MONGO_URI=your_mongodb_connection_string" >> ../backend/.env
echo "PORT=5000" >> ../backend/.env

# 5. Start backend server
cd ../backend
npm start

# 6. Open a new terminal and start frontend
cd ../frontend
npm start
