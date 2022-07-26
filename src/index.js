import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import categoriesRoute from "./routes/categoriesRoute.js";
import gamesRoute from "./routes/gamesRoute.js"; 
import customersRoute from "./routes/customersRoute.js";
import rentalsRoute from "./routes/rentalsRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(categoriesRoute);
app.use(gamesRoute);
app.use(customersRoute);
app.use(rentalsRoute);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Server running");
});