### API Documentation

This API provides endpoints for user registration, login, and profile management. Below are the details of each endpoint, including the request and response formats.

---

### Base URL
- **Development:** `http://localhost:5001`
- **Production:** `https://userbudbackend.onrender.com`

---

### 1. Register User**

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

All responses include an `error` field in the case of failures, with a brief description of the issue encountered. Ensure that your application is handling these errors gracefully.

---
