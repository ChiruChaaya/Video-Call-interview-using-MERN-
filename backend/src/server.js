import express from 'express';
import {Env} from "./lib/env.js";


const app = express();

console.log(process.env.PORT);
app.get("/", (req, res) => {
    res.status(200).json({msg:"Server is running succesufully"});
});

app.listen(Env.PORT, () => {
    console.log("Server is running on port 3000");
});