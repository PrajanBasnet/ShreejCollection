import express from "express";
import { admin, login, logout, register } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();


router.post("/auth", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/admin", isAuthenticated, admin);



export default router;