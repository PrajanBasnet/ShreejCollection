import express from "express";

import { admin, login, logout, register } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();


router.post("/auth", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/admin", isAuthenticated, admin);
router.get("/admin", (req, res) => {
    res.render("admin", { layout: 'layouts/adminlay.ejs' });
})

router.get("/login", (req, res) => {
    res.render("auth", { layout: 'layouts/adminlay.ejs' });
})
export default router;