import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { getUsers } from "../Controllers/userContoller.js";

const userRoutes = express.Router();

userRoutes.get("/Users", authMiddleware, getUsers);

export default userRoutes;