import express from "express";
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use("/api/auth",authRoutes);


app.listen(8000,()=>{
    console.log("server is listening on port 8000");
    connectMongoDB();
});