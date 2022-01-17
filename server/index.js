import express from "express";

import Connection from "./connection/db.js";
import DefaultData from "./default.js";

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

DefaultData();
