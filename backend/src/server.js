import express from 'express';
import {Env} from "./lib/env.js";


const app = express();

console.log(Env.PORT);
app.get("/healthy", (req, res) => {
    res.status(200).json({msg:"Server is in health"});
});

app.listen(Env.PORT, () => {
    console.log("Server is running on port",Env.PORT);
});