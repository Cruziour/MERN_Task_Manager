📝 MERN Task Manager
A high-performance and responsive Task Management web application built using the MERN Stack (MongoDB, Express, React, Node.js). This project features a sleek Dark Mode interface, standardized API responses, and clean ES6+ architecture.

🚀 Live Links
Frontend URL: https://mern-task-manager-amber.vercel.app/
Backend API URL: https://mern-task-manager-server-n6ia.onrender.com
GitHub Repository: https://github.com/Cruziour/MERN_Task_Manager

🛠️ Tech Stack
Frontend: React.js (Vite), Tailwind CSS (Dark Mode), Axios
Backend: Node.js, Express.js (ES6 Modules)
Database: MongoDB Atlas (Mongoose ODM)
API Pattern: Professional structure using asyncHandler, ApiError, and ApiResponse utilities.

⚙️ Setup Instructions
Follow these steps to get the project running on your local machine:
git clone https://github.com/Cruziour/MERN_Task_Manager.git
cd MERN_Task_Manager

Backend Setup
cd Mern-Task-Manager-Server
npm install

Create a .env file in the backend folder and add the following variables:
PORT=3000
MONGODB_URI=your_mongodb_atlas_uri
CORS_ORIGIN=frontend_url

Run the server: npm run dev

Frontend Setup

cd Mern-Task-Manager
npm install
Create a .env file in the frontend folder:
VITE_BACKEND_URL=your_local_backend_url
Run The app: npm run dev

API Endpoints
Base URL: https://mern-task-manager-server-n6ia.onrender.com
Method	    Endpoint	    Description	Payload (JSON)
GET 	    /tasks	        Retrieve all tasks	N/A
POST	    /tasks	        Create a new task	{ "title": "String" }
DELETE	    /tasks/:id	    Delete a specific task	N/A

☁️ Deployment Details
Frontend (Vercel)
Environment Variable: VITE_BACKEND_URL is set to the live Render URL.
Build Command: npm run build
Output Directory: dist
Backend (Render)
Environment Variables: MONGODB_URI, PORT, and CORS_ORIGIN (set to the Vercel URL) are configured.
Start Command: node src/index.js
Database (MongoDB Atlas)
Cloud-hosted MongoDB cluster.
Network Access configured to allow connections from deployment IP addresses.

✨ Key Features
✅ Dark Mode UI: A modern, eye-friendly slate-themed interface.
✅ Clean ES6+ Code: Uses modern JavaScript imports/exports and async/await.
✅ Professional Error Handling: Centralized middleware for consistent API error messages.
✅ Full CRUD Functionality: Seamlessly create, read, and delete tasks.
✅ Responsive Design: Fully optimized for Mobile, Tablet, and Desktop screens.