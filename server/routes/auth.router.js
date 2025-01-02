import express from "express";
import UserCredentials from "../models/user.model.js";
const router = express.Router();


router.post("/auth", async (req, res) => {
    try {
        const newUser = new UserCredentials({
            name: "Prajwal",
            email: "abcd@gmail.com",
            password: "appleball",
        });
        await newUser.save();
        res.status(500).json({ message: "Succesfully done" });

        console.log("Data was enter sucessfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;