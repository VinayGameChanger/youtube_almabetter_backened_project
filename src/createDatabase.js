// Importing necessary modules: mongoose, subscriberModel, and data
const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to the MongoDB database
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Getting the database connection instance
const db = mongoose.connection

// Handling database connection errors
db.on('error', (err) => console.log(err))

// Logging a message when the database connection is successfully opened
db.once('open', () => console.log('Database created...'))

// Function to refresh the data in the subscribers collection
const refreshAll = async () => {
    // Deleting all existing documents in the subscribers collection
    await subscriberModel.deleteMany({})

    // Inserting new data into the subscribers collection
    await subscriberModel.insertMany(data)

    // Disconnecting from the database after refreshing data
    await mongoose.disconnect();
}

// Calling the refreshAll function to update the subscribers collection
refreshAll()
