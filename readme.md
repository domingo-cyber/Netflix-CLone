# Netflix Clone - MERN Stack

A full MERN stack application replicating major features of Netflix, offering a seamless user experience, responsive design, and robust functionality. This project demonstrates the essential components of a video streaming platform, including user authentication, content browsing, and playback.

---

## Features

- **User Authentication:** Sign up, login, and secure user sessions.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Content Browsing:** Dynamic browsing and search functionality for movies and TV shows.
- **Playback:** Stream video content with a Netflix-like interface.
- **Admin Panel:** Manage users, content, and platform settings.

---

## Technologies Used

- **Frontend:** React, Redux, CSS3, Bootstrap/Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Cloud Storage:** (e.g., AWS S3 for media storage)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_jwt_secret
     PORT=your_preferred_port
     ```
5. Run the development servers:
   - Start the backend server:
     ```bash
     cd server && npm run dev
     ```
   - Start the frontend server:
     ```bash
     cd client && npm start
     ```
6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---
