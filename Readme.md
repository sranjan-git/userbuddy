# userBuddy - User Management System

https://github.com/user-attachments/assets/f76fcd29-a608-46d0-a9d9-25881658accc

UserBuddy is a simple and responsive user management system built with React, TypeScript, Node.js, and Express. It allows users to register, login, view, and edit profiles, and browse a directory of registered users.

## Features

- **User Registration**: Users can create a new account.
- **User Login**: Secure login with JWT authentication.
- **Profile Management**: Users can view and update their profile.
- **User Directory**: View all registered users with a search functionality.
- **Responsive Design**: Fully responsive across different devices.

## Installation and Setup

### Prerequisites

- Node.js
- npm or yarn

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/UserBuddy.git
   cd UserBuddy
   ```

2. Navigate to the `backend` directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file with the following variables:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

3. The frontend will be available at `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login with email and password.

### User Profile

- **GET /users/profile**: Get logged-in user's profile.
- **PUT /users/profile/edit**: Update logged-in user's profile.

### User Directory

- **GET /users**: Get a list of all users.
- **GET /users/:id**: Get details of a specific user by ID.

## Usage

1. **Register**: Navigate to `/register` and create a new account.
2. **Login**: Use your credentials to log in at `/login`.
3. **Profile**: View and update your profile at `/profile`.
4. **Directory**: Browse the user directory at `/directory` and search for users.

### API Documentation

This API provides endpoints for user registration, login, and profile management. Below are the details of each endpoint, including the request and response formats.

---

### Base URL
- **Development:** `http://localhost:5001`
- **Production:** `https://userbudbackend.onrender.com`

---

### 1. Register User

**Endpoint:** `POST /api/auth/register`

Description: Registers a new user.

Request:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "Password123"
}
```

**Response:**
- **Success (201 Created):**
  ```json
  {
    "message": "User registered successfully"
  }
  ```
- **Error (400 Bad Request):**
  ```json
  {
    "error": "User already exists"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **2. Login User**

**Endpoint:** `POST /api/auth/login`

**Description:** Authenticates a user and returns a JWT token.

**Request:**
```json
{
  "email": "johndoe@example.com",
  "password": "Password123"
}
```

**Response:**
- **Success (200 OK):**
  ```json
  {
    "email": "johndoe@example.com",
    "token": "jwt_token_here"
  }
  ```
- **Error (400 Bad Request):**
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **3. Get User Profile**

**Endpoint:** `GET /api/auth/profile`

**Description:** Retrieves the authenticated user's profile.

**Request Headers:**
```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

**Response:**
- **Success (200 OK):**
  ```json
  {
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "bio": "User bio here"
  }
  ```
- **Error (401 Unauthorized):**
  ```json
  {
    "error": "Unauthorized"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **4. Edit User Profile**

**Endpoint:** `PUT /api/auth/profile/edit`

**Description:** Updates the authenticated user's profile.

**Request Headers:**
```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

**Request Body:**
```json
{
  "name": "John Doe",
  "bio": "Updated bio here"
}
```

**Response:**
- **Success (200 OK):**
  ```json
  {
    "message": "Profile updated successfully"
  }
  ```
- **Error (400 Bad Request):**
  ```json
  {
    "error": "Invalid input data"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **5. Get All Users**

**Endpoint:** `GET /api/users`

**Description:** Retrieves a list of all registered users.

**Request Headers:**
```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

**Response:**
- **Success (200 OK):**
  ```json
  [
    {
      "_id": "user_id_here",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "bio": "User bio here"
    },
    {
      "_id": "another_user_id",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "bio": "User bio here"
    }
  ]
  ```
- **Error (401 Unauthorized):**
  ```json
  {
    "error": "Unauthorized"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **6. Get User by ID**

**Endpoint:** `GET /api/users/:id`

**Description:** Retrieves the profile of a specific user by their ID.

**Request Headers:**
```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

**Response:**
- **Success (200 OK):**
  ```json
  {
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "bio": "User bio here"
  }
  ```
- **Error (404 Not Found):**
  ```json
  {
    "error": "User not found"
  }
  ```
- **Error (500 Internal Server Error):**
  ```json
  {
    "error": "Server error"
  }
  ```

---

### **Authentication**

All protected routes require the JWT token to be passed in the `Authorization` header as follows:

```json
{
  "Authorization": "Bearer jwt_token_here"
}
```

---

### **Error Handling**

All responses include an `error` field in the case of failures, with a brief description of the issue encountered. 

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---


