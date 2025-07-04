# Meeting Notes Application

A full-stack web application for creating, managing, and tracking meeting notes and action items, designed to streamline meeting documentation and follow-up in teams and organizations.

## Features

- **View and manage meeting notes:** Browse all meeting notes, each with a title, summary, and associated action items.
- **Expandable note view:** Click to expand any note and view its full content and action items.
- **Action item tracking:** Toggle action items between open and completed states for effective follow-up.
- **Edit and update:** Modify meeting content and action items directly from the interface.
- **Add new notes:** Create new meeting notes and persist them to the database.
- **Responsive UI:** Modern, user-friendly interface built with React and Material UI.
- **Real-time updates:** All changes are reflected instantly via robust REST API integration.

## Tech Stack

| Layer      | Technology                      |
|------------|---------------------------------|
| Frontend   | React.js, Vite, Material UI     |
| Backend    | Node.js, Express.js             |
| Database   | MongoDB                         |

## Project Structure

`/meeting-notes-app # Frontend (React + Vite)
/meeting-notes-service # Backend (Node.js + Express + MongoDB)`


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### 1. Clone the Repository

`git clone https://github.com/MaliniSankaran/Meeting-Notes-Application.git
cd Meeting-Notes-Application`


### 2. Backend Setup (`meeting-notes-service`)

1. Navigate to the backend directory:
    ```
    cd meeting-notes-service
    ```
2. Install backend dependencies:
    ```
    npm install
    ```
3. Create a `.env` file in the `meeting-notes-service` directory with the following content:
    ```
    PORT=3000
    MONGODB_URI=mongodb_connection_string
    ```
    Replace `mongodb_connection_string` with actual MongoDB URI.
4. Start the backend server:
    ```
    node index.js
    ```
    By default, the backend will run on [http://localhost:3000](http://localhost:3000).

### 3. Frontend Setup (`meeting-notes-app`)

1. Open a new terminal window/tab.
2. Navigate to the frontend directory:
    ```
    cd meeting-notes-app
    ```
3. Install frontend dependencies:
    ```
    npm install
    ```
4. Start the frontend development server:
    ```
    npm run dev
    ```
    By default, the frontend will run on [http://localhost:5173](http://localhost:5173) (or as specified in the terminal).

### 4. Access the Application

- Open your browser and go to [http://localhost:5173](http://localhost:5173) to use the app.
- Ensure the backend (`meeting-notes-service`) is running for full functionality.

## API Overview

- **GET /notes** – Fetch all meeting notes
- **POST /notes** – Create a new note
- **PUT /notes/:id** – Update a note or action item
- **DELETE /notes/:id** – Remove a note
