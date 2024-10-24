# Clothing Store App

---

## Description

The **Clothing Store App** is a mobile-first web application built for iOS and Android users. It allows customers to browse and purchase a variety of clothing items through an intuitive and responsive interface. The frontend is developed using **React** and **JavaScript**, while the backend is powered by **Scala** with **Akka HTTP** to handle communication between actors. The app also includes a simple user authentication system, where logins and passwords are stored in memory using a **Scala Map**.

---

## Requirements

- **Frontend**: React, JavaScript
- **Backend**: Scala with Akka HTTP (actor-based communication)
- **Libraries**:
  - **Axios**: for handling API requests from frontend to backend
  - **Akka HTTP**: for managing asynchronous requests in the backend

---

## How To Run

### Backend (Scala with Akka HTTP)
1. **Install dependencies**:
   - Make sure Scala and SBT are installed on your machine.
   - Navigate to the backend directory and run:
     ```bash
     sbt update
     ```

2. **Run the backend server**:
   - In the same directory, use the command:
     ```bash
     sbt run
     ```
   - The backend will start at `http://localhost:8080`.

3. **User Authentication**:
   - The user credentials are stored in memory using a `Map[String, String]`. You can modify the map directly in the backend code to add new users or change existing credentials.

### Frontend (React)
1. **Install dependencies**:
   - Navigate to the frontend directory and run:
     ```bash
     npm install
     ```

2. **Run the frontend server**:
   - After installation, start the development server with:
     ```bash
     npm start
     ```
   - The frontend will run at `http://localhost:3000`.

---

## Application Features

- **Mobile-Friendly Design**: The app is fully responsive and designed to provide a seamless shopping experience on mobile devices.
- **User Authentication**: Basic authentication system where users can log in to make purchases. Credentials are stored in-memory in a simple Scala `Map`.
- **Actor-Based Backend**: The backend uses Akka actors for handling user requests and game logic asynchronously, ensuring smooth performance even under high traffic.

