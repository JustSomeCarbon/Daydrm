import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json( {'users': ['noe']} );
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
