import UserCredentials from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const saltRounds = 10;
        const hashedPsw = await bcrypt.hash(password, saltRounds);

        const newUser = new UserCredentials({
            name: name,
            email: email,
            password: hashedPsw,
        });
        await newUser.save();
        res.status(500).json({ message: `Data has been inserted` });

        console.log("Data was enter sucessfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let checkPassword = await bcrypt.compare(password, user.password);
        let user = await UserCredentials.findOne({ email: email });
        if (user && checkPassword == true) {

            console.log(checkPassword);
            res.status(200).json({ message: `Data found ${user}` });
        } else {

            res.status(401).json({ message: "Invalid  username or password " });
        }



    } catch (error) {
        res.status(401).json({ message: `Problem in Login: ${error}` });
    }
}
