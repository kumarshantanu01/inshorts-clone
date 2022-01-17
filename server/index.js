import express from "express";

import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();

app.use('/', Route);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

DefaultData();
