import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello, world!");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
