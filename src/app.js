// Importing the express framework
const express = require('express');

// Creating an instance of the express application
const app = express();

// Importing the 'subscribers' model
const subscribers = require('./models/subscribers');

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Route for retrieving all subscribers
app.get("/subscribers", async (req, res) => {
    // Fetching all subscriber data from the database
    const data = await subscribers.find({});
    // Sending the subscriber data as JSON in the response
    res.json(data);
});

// Route for retrieving subscriber names and subscribed channels
app.get("/subscribers/names", async (req, res) => {
    // Fetching only the 'name' and 'subscribedChannel' fields from the database
    const data = await subscribers.find({}, { name: 1, subscribedChannel: 1 });
    // Sending the selected data as JSON in the response
    res.json(data);
});

// Route for retrieving a specific subscriber by ID
app.get("/subscribers/:id", async (req, res) => {
    try {
        // Extracting the subscriber ID from the request parameters
        const id = req.params.id;
        // Finding the subscriber with the specified ID in the database
        const data = await subscribers.find({ _id: { $eq: id } });
        // Sending the subscriber data as JSON in the response
        res.json(data);
    } catch {
        // Handling errors and sending a 400 status with an error message
        res.status(400).json({ error: "Not Found" });
    }
});

// Exporting the configured express application
module.exports = app;
