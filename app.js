const express = require("express");
const connectDB = require("./config/db");
const books = require("./config/routes/api/books");

const app = express();

//Connect DB
connectDB();

//Configure modular routes
app.use('/books', books);

app.get("/", (req,res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 8082;

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});