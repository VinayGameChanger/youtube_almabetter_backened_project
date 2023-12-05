# youtube_almabetter_backened_project
YouTube Subscribers API
This project provides a simple API for retrieving YouTube subscribers' data. It utilizes Node.js with Express for the server and MongoDB as the database. Below are the main components of the project:

API Endpoints:

GET /subscribers:

Link: http://localhost:3000/subscribers
Description: Returns an array of subscribers (an Object).
GET /subscribers/names:

Link: http://localhost:3000/subscribers/names
Description: Returns an array of subscribers (an Object) with only two fields: name and subscribed Channel.
GET /subscribers/:id:

Link: http://localhost:3000/subscribers/:id
Description: Returns a subscriber (an Object) with the given ID.


Important Note
Ensure that the MongoDB server is running, and the API server is accessible at http://localhost:3000 before interacting with the API.
