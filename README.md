# Event Planner App

## Overview
The Event Planner App is a Node.js application designed to help users create, manage, and receive reminders for events. It features user authentication, event categorization, and notification systems to ensure users never miss an important event.

## Features
- User authentication (registration and login)
- Event creation and management
- Categorization of events
- Reminder notifications for upcoming events
- View upcoming events

## Technologies Used
- Node.js
- Express.js
- MongoDB (or any other database of your choice)
- Mongoose (for MongoDB object modeling)
- JWT (for authentication)
- dotenv (for environment variable management)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd event-planner-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables (e.g., database connection string, JWT secret).

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Use Postman or any API client to interact with the API endpoints for user authentication, event management, and reminders.

## API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Events**
  - `POST /api/events` - Create a new event
  - `GET /api/events` - Retrieve all events
  - `DELETE /api/events/:id` - Delete an event

- **Reminders**
  - `POST /api/reminders` - Set a reminder for an event
  - `GET /api/reminders` - Retrieve all reminders

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.