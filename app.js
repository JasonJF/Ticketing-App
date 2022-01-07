const express = require("express");
const connectDB = require("./config/db");
const books = require("./config/routes/api/books");
const assemblies = require("./config/routes/api/assemblies");

// setup app
const app = express();
app.use(express.urlencoded({
    extended: true
  }));

//Connect DB
connectDB();

//Configure modular routes
app.use('/books', books);
app.use('/assemblies', assemblies);

app.get("/", (req,res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 8082;

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});