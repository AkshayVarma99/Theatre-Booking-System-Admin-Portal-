# 🎭 Theatre Booking System

A dynamic web application designed to streamline the management of entertainment shows for theatre administrators. Built using the **MERN stack**, this project ensures seamless workflows, improved communication, and robust user authentication.

---

## 📌 Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation and Setup](#installation-and-setup)
5. [API Endpoints](#api-endpoints)
6. [Future Enhancements](#future-enhancements)
7. [Conclusion](#conclusion)
8. [Contact](#contact)

---

## 📖 Introduction

The **Theatre Booking System** is tailored for theatre administrators to efficiently manage entertainment shows. Administrators can:
- Create and edit show details such as description, duration, price, timings, and availability.
- Publish or draft shows for enhanced management.
- Lock editing to prevent conflicts when multiple admins are managing the same show.

---

## 🚀 Features

### Administrator Functionalities
- **Add/Modify Shows**: Input or update show details like title, genre, timing, and ticket availability.
- **Publish/Draft Shows**: Toggle between draft and published states for visibility control.
- **Edit Lock**: Prevents simultaneous edits by applying a lock when a show is being updated.

### User Authentication
- **Register/Login**: Admins can create accounts or log in to manage shows securely.
- **Protected Routes**: Only authenticated admins can access management functionalities.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Ant Design for components)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
- **State Management**: Redux
- **Authentication**: JWT (JSON Web Token)

---

## ⚙️ Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- MongoDB

### Backend Setup
1. Open a terminal and navigate to the `TheatreBookingSystemProject` folder:
    ```bash
    cd TheatreBookingSystemProject
    ```
2. Install server dependencies:
    ```bash
    npm install
    ```
3. Navigate to the server directory and start the backend server:
    ```bash
    cd server
    node server.js
    ```

### Frontend Setup
1. Open another terminal and navigate to the `client/src` directory:
    ```bash
    cd TheatreBookingSystemProject/client/src
    ```
2. Install client dependencies:
    ```bash
    npm install
    ```
3. Start the client application:
    ```bash
    npm start
    ```

---

## 🔗 API Endpoints

### User Endpoints
| Endpoint                    | Method | Description                           |
|-----------------------------|--------|---------------------------------------|
| `/api/users/register`       | POST   | Register a new admin user            |
| `/api/users/login`          | POST   | Authenticate admin and return JWT    |
| `/api/users/get-current-user` | GET  | Get details of the logged-in admin   |

### Movie Show Endpoints
| Endpoint                     | Method | Description                               |
|------------------------------|--------|-------------------------------------------|
| `/api/movieshows/add-draft`  | POST   | Add a new draft show                     |
| `/api/movieshows/get-all-drafts` | GET | Retrieve all drafted shows               |
| `/api/movieshows/get-all-published` | GET | Retrieve all published shows            |
| `/api/movieshows/update-draft` | POST | Update an existing draft show            |
| `/api/movieshows/delete-draft` | POST | Delete a draft show                      |
| `/api/movieshows/publish`    | POST   | Publish a draft show                     |
| `/api/movieshows/draft`      | POST   | Move a published show back to draft state|

---

## 🌟 Future Enhancements
- **User Ticketing System**: Add features for end-users to book tickets.
- **Real-Time Updates**: Implement notifications for show updates.
- **Analytics Dashboard**: Visualize show performance metrics.

---

## 📝 Conclusion

The Theatre Booking System effectively bridges the gap between administrators and seamless show management. With an intuitive UI and powerful backend, it serves as a robust tool for modern-day entertainment workflow optimization.

---

## 📬 Contact

For any questions or feedback, please reach out to [aavarma238_personal@yahoo.com](mailto:aavarma238_personal@yahoo.com).
