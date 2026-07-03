const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
    const data = JSON.parse(fs.readFileSync("products.json"));
    res.json(data);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});