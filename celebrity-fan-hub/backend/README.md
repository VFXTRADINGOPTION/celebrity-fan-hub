# Celebrity Fan Hub Backend

## Overview
Celebrity Fan Hub is a full-stack web application designed for fans of celebrities. The backend is built using Node.js and Express, providing a RESTful API for user authentication, celebrity management, and user profiles.

## Features
- User authentication (registration and login)
- Premium membership options
- Celebrity pages with detailed information
- User profiles with favorite celebrities and membership status

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/celebrity-fan-hub.git
   ```
2. Navigate to the backend directory:
   ```
   cd celebrity-fan-hub/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:5000`.

### API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **Celebrities**
  - `GET /api/celebrities` - Retrieve a list of celebrities
  - `GET /api/celebrities/:id` - Retrieve details of a specific celebrity

- **User Management**
  - `GET /api/users/profile` - Get user profile information
  - `POST /api/users/membership` - Upgrade user membership

## Technologies Used
- Node.js
- Express
- TypeScript
- Tailwind CSS (for styling in the frontend)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.