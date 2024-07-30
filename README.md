# Shopping List Application
## Overview

This application is a full-stack shopping list manager built using Node.js, Express.js, MongoDB for the backend, and React for the frontend. It allows users to manage a shopping list, including adding items and placing orders.

## Getting Started

## Prerequisites

- Node.js
- npm
- React

## Installation

### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HagaiHen/Shopping-List.git
   cd Shopping-List
   ```
2. **Install dependencies for backend:**
```bash
npm insatll
```

3. **Install dependencies for frontend:**
   ```bash
   cd frontend
   npm install
   ```
4. **Create a .env file**
```bash
MONGO_DB=<your-mongodb-uri>
PORT=5000
NODE_ENV=development
```
Replace **<your-mongodb-uri>** with your actual MongoDB connection URI.

### Running the Application
1. **Start the backend server:**
```bash
cd <to the root dir>
npm run start
```
2. **Start the frontend application:**
In another terminal:
```bash
cd frontend
npm run dev
```
The backend server will start and listen on the specified port (default: 5000). The frontend application will be accessible at http://localhost:3000.

## API Endpoints
### Categories
#### Get All Categories

- Endpoint: GET /api/categories/get

- Description: Fetches all categories from the database.

### Orders
#### Create Order

- Endpoint: POST /api/orders/create

- Description: Creates a new order with the provided data.

## Frontend Components
### Home Page
The home page allows users to manage their shopping list. Key features include:

- Category Dropdown: Allows users to select a category for the product.
- Product Input: Input field to add new products to the shopping list.
- Bottom Bar: Displays the list of products, category counters, and provides an option to complete the order.

## Project Structure
#### backend/: Contains the server-side code.
- server.js: Main entry point for the backend application.
- db/connect.js: Module to handle MongoDB connection.
- routes/: Contains route definitions for orders and categories.
#### frontend/: Contains the client-side code.
- src/components/: Contains React components.
- src/hooks/: Contains custom React hooks for fetching data and creating orders.
- src/App.jsx: Main entry point for the React application.
