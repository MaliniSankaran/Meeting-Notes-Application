# React Reminder App

The React Reminder App is a full-stack web application that helps users efficiently manage meeting notes and action items. Users can create, view, edit, and organize notes, as well as track the completion status of individual tasks. Built with a modern tech stack—React.js, Node.js, and MongoDB—this app ensures a smooth user experience, fast performance, and reliable data persistence.

The frontend leverages React with Vite for optimal development speed and interactivity, while Material UI enhances the visual design. All user interactions, including creating or updating notes, are backed by robust REST APIs, ensuring real-time updates and secure database operations.

## User Requirements:
- The application should allow users to view existing meeting notes fetched from the server.
- Each meeting note should display its title, truncated content, and action items.
- Users should be able to click on a meeting note to expand its content and view action items.
- Users should be able to toggle action items between open and completed states.
- Users should have the ability to edit the content and action items of a meeting note.
- Users should be able to add new meeting notes.
- Meeting notes should persist in the database through REST APIs.

## Technical Requirements:
- The project will be built using React.js, incorporating features such as expressions, lists, useState, props, and effects.
- Data will be fetched from the Node.js server using the fetch API.
- MaterialUI will be utilized for styling the application.
- Vite will be used as the build tool for the project.
- All data operations will interact with the server through REST APIs to ensure persistence in the database.

## Tech Stack Used:
- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - Vite: A fast build tool that provides a modern development experience for React applications.
  - MaterialUI: A popular React UI framework for building visually appealing and responsive web applications.
  - Fetch API: Used for making HTTP requests to fetch data from the server.
  
- **Backend:**
  - Node.js: A JavaScript runtime for building scalable server-side applications.
  - Express.js: A minimalist web framework for Node.js used for building APIs.
  - MongoDB: A NoSQL database for storing meeting notes and other data.
  
## Project Setup:
1. Clone the repository containing the project code.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Access the application in  browser at the provided URL.

## Usage:
1. Upon launching the application, users will be presented with a list of existing meeting notes.
2. Users can click on a meeting note to expand its content and view action items.
3. Action items can be toggled between open and completed states by clicking on checkboxes.
4. Users can edit the content and action items of a meeting note by clicking on the edit button.
5. New meeting notes can be added by clicking on the create button and filling out the necessary details.
