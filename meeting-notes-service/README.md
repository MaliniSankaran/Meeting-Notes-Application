[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/UCQYxFhy)

# Assignment 8 - MeetingNotes REST API

This is a simple Node.js/Express REST API for managing meeting notes.The API utilizes MongoDB as its database and Mongoose as the ODM (Object Data Mapper) for interacting with MongoDB.
The project permits users to execute a range of actions, including retrieving all current meeting notes, refining the search for meeting notes by keywords and date intervals, creating new meeting notes, modifying existing meeting notes, and removing meeting notes from the system.

## Technical Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bruno (For API Testing)

## Endpoints

- **Fetch all existing meeting notes**: `/meetingnotes` (GET)
- **Filter Meeting Notes**: `/meetingnotes/filter` (GET)
- **Add a Meeting Note**: `/meetingnotes` (POST)
- **Update a Meeting Note**: `/meetingnotes/:id` (PUT or PATCH)
- **Delete a Meeting Note**: `/meetingnotes/:id` (DELETE)


## Getting Started

1. Clone the repository
2. Install dependencies: npm install.
3. Start the server: node server.js .
4. The server will start at http://localhost:3000.
5. Any API testing tool like Bruno or Postman can be used  to interact with and test the endpoints.