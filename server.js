const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`);
});