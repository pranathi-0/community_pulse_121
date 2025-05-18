# community_pulse_121
✅ Step 1: Set Up Backend (Node.js + MongoDB)
1.1. Create a Project Folder
mkdir community-pulse
cd community-pulse
mkdir backend
cd backend
npm init -y
1.2. Install Required Packages
npm install express mongoose cors dotenv
1.3. Create Folder Structure
backend/
├── models/
│   └── Event.js
├── routes/
│   └── events.js
├── .env
├── server.js
1.4. Set Up MongoDB
Go to MongoDB Atlas

Create a free cluster

Add a database and get your connection URI

Add it to .env file:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/community-pulse
1.5. Add Code from Above
Copy server.js, models/Event.js, and routes/events.js from my previous message into your project.

1.6. Start Backend Server
node server.js
You should see MongoDB connected and Server running on port 5000

✅ Step 2: Set Up Frontend (React)
2.1. Create a React App
Use Vite or Create React App. Here’s Vite:

cd ..
npm create vite@latest frontend --template react
cd frontend
npm install
npm install axios
2.2. Project Structure
Inside frontend/, create App.jsx (or update the existing one):

Replace contents of src/App.jsx with:

// Use the React code I gave above here
2.3. Update vite.config.js if needed for proxy (Optional)
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
2.4. Run Frontend
npm run dev
✅ Step 3: Test Locally
Go to http://localhost:5173

You should see the event list

Post an event via a temporary POST request (e.g., Postman)

Try RSVP by filling in the form

✅ Step 4: Deploy
Option 1: Deploy Backend on Render
Create a GitHub repo and push your backend

Go to Render

Create a new web service → Select the repo

Set Environment Variable MONGO_URI

Choose node server.js as the start command

Option 2: Deploy Frontend on Vercel
Push frontend code to GitHub

Go to Vercel

Import GitHub project

Set environment variable (if needed for production API URL)

✅ Step 5: Improvements (Optional)
Add user authentication (JWT)

Admin panel (React Dashboard)

Form validation with react-hook-form

Use TailwindCSS or ShadCN for styling

Use email services (e.g., SendGrid, Twilio)
