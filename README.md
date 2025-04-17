# FAQ Manager API

A simple REST API for managing Frequently Asked Questions (FAQs).

## Overview

This project provides backend functionality for creating and retrieving FAQ entries through a RESTful API. Built with Node.js, Express, and MongoDB, it follows the MVC (Model-View-Controller) architecture pattern.

## Features

- Create new FAQ entries with questions and answers
- Retrieve all FAQ entries
- Proper error handling and validation
- RESTful API design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NEXlvl01/FAQ-Manager-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/faq/getfaqs | Retrieve all FAQ entries |
| POST   | /api/faq/postfaq | Create a new FAQ entry |

## Example Usage

### Add a new FAQ entry
```http
POST /api/faq/postfaq
Content-Type: application/json

{
  "question": "What is FAQ Manager?",
  "answer": "A simple REST API for managing frequently asked questions."
}
```

### Get all FAQ entries
```http
GET /api/faq/getfaqs
```

## Response Format

### Success Response
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "60f7b0b9e6c7b32d684c74d2",
      "question": "What is FAQ Manager?",
      "answer": "A simple REST API for managing frequently asked questions.",
      "createdAt": "2023-07-21T14:23:21.947Z"
    }
  ]
}
```

## Project Structure

```
faq-manager/
├── config/           # Database configuration
│   └── db.js
├── controllers/      # Request handlers
│   └── faq.controller.js
├── models/           # Database models
│   └── faq.model.js
├── routes/           # API routes
│   └── faq.routes.js
├── app.js            # Express app setup
├── index.js          # Entry point
└── package.json      # Project dependencies
```

## Technologies

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object Data Modeling library

## Error Handling

The API returns appropriate HTTP status codes:
- `200 OK`: Successful GET request
- `201 Created`: Successful POST request
- `400 Bad Request`: Invalid input
- `500 Internal Server Error`: Server-side error

## License

MIT

## Author

Arman Thakur