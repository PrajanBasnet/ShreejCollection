
import UserCredentials from "../models/user.model.js";


export const register = async (req, res) => {
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
}

