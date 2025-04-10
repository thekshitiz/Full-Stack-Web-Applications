# Node.js To-Do App

This is a simple **To-Do List application** built using **Node.js**. The project demonstrates how to create a basic RESTful API to manage a list of tasks (to-dos). The application supports the following operations:

-   **GET**: Retrieve all to-dos.
-   **POST**: Add a new to-do.
-   **DELETE**: Remove a to-do by its ID.

The project is designed to run on a local server and uses in-memory storage for the to-do list. It provides a foundational understanding of how to build and structure a basic Node.js application.

---

## Features

1. **RESTful API**:

    - `GET /api/v1/todos`: Fetch all to-dos.
    - `POST /api/v1/todos`: Add a new to-do.
    - `DELETE /api/v1/todos/:id`: Delete a to-do by its ID.

2. **In-Memory Data Storage**:

    - The to-do list is stored in a JavaScript array (`todos.js`).

3. **Error Handling**:

    - Handles invalid routes and methods with appropriate HTTP status codes.
    - Returns meaningful error messages for invalid requests.

4. **Modular Code**:
    - The project is divided into multiple files for better organization:
        - `app.js`: The main server logic.
        - `todos.js`: Contains the initial to-do list data.
        - `utils.js`: Contains utility functions like `getRequestData` for handling request bodies.

---

## Project Structure

```
.
├── app.js          # Main server file
├── todos.js        # In-memory to-do list data
├── utils.js        # Utility functions
├── package.json    # Project metadata and dependencies
```

---

## How to Run the Project

### Prerequisites

-   **Node.js** (v14 or higher) installed on your system.

### Steps

1. Clone the repository or download the project files.
2. Navigate to the project directory:
    ```bash
    cd "fullstack project/New folder"
    ```
3. Install dependencies (if any):
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open Postman or your browser and test the following endpoints:
    - `GET http://localhost:3000/api/v1/todos`
    - `POST http://localhost:3000/api/v1/todos` (with a JSON body)
    - `DELETE http://localhost:3000/api/v1/todos/:id`

---

## What I Learned

### 1. **Node.js Basics**

-   Setting up an HTTP server using the `http` module.
-   Handling different HTTP methods (`GET`, `POST`, `DELETE`).
-   Parsing request data using streams.

### 2. **RESTful API Design**

-   Designing endpoints for CRUD operations.
-   Structuring API responses with proper status codes and messages.

### 3. **Error Handling**

-   Returning appropriate error messages for invalid routes and methods.
-   Handling edge cases like invalid JSON data or non-existent IDs.

### 4. **Modular Code Organization**

-   Separating concerns by dividing the project into multiple files:
    -   `todos.js` for data storage.
    -   `utils.js` for reusable utility functions.

### 5. **In-Memory Data Management**

-   Managing data in a JavaScript array and performing operations like adding, deleting, and finding items.

---

## Future Improvements

1. **Persistent Storage**:

    - Replace the in-memory array with a database (e.g., MongoDB, PostgreSQL, or a `db.json` file).

2. **Advanced Features**:

    - Add support for updating a to-do.
    - Implement user authentication.

3. **Error Logging**:

    - Use a logging library like `winston` to log errors and requests.

4. **Frontend Integration**:
    - Build a frontend using React or plain HTML/CSS to interact with the API.

---

## Conclusion

This project serves as a great starting point for understanding how to build a basic RESTful API with Node.js. It helped me gain practical experience in server-side programming, API design, and modular code organization. With further enhancements, this project can be extended into a fully functional to-do application.
