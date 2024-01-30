# GraphQL-app
Graph QL Project is Web Application (MERN Stack)
Graph QL Project is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage the employee directory. The application utilizes apollo client server to query the mongo db data.   

Technologies Used
MongoDB: A NoSQL database used to store user and idea data in a flexible, scalable format.  
Express.js: A backend framework used to handle server-side operations and API endpoints.  
React: A frontend library used to create an interactive and dynamic user interface.  
Node.js: A runtime environment used for server-side JavaScript execution.


# Features
Employee Durectory: Forms to add/update/delete employee data in directory.  
Apollo Client: Allows users to query the employee data using the apollo client server.  

# Usage
Clone the repository:

git clone <repository-url>
Install dependencies for both the server and client:

cd server && npm install
cd ../frontend && npm install
Run the server and client concurrently (from the root directory):

npm run dev
Access the application at http://localhost:{YourPortNumber} in your web browser.

Getting Started
Follow the steps below to set up the application and get started:

Ensure you have MongoDB installed and running on your local machine or provide a MongoDB connection URI in the server configuration.

Set up the server:

Navigate to the server directory: cd server
Create a .env file and add the necessary environment variables (e.g., database URI, JWT secret).
Run the server: npm start
Set up the client:

Navigate to the client directory: cd frontEnd
Run the client: npm start
Access the application in your web browser at http://localhost:{YourPortNumber}.
