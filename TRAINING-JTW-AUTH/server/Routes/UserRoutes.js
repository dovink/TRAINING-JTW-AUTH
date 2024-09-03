import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { getCurrentUser } from "../Controllers/userContoller.js";

const userRoutes = express.Router();

userRoutes.get("/", authMiddleware, getCurrentUser);

export default userRoutes;