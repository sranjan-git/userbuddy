# Demo

https://github.com/user-attachments/assets/0450d583-0b50-4507-b328-c4e5aee9e697



https://github.com/user-attachments/assets/52b07ca6-29e7-4fe0-a613-2d35aa048a7c

# UserBuddy - User Management System

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
   npm start
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

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

This README provides a brief overview and easy-to-follow instructions for setting up and running your project.
