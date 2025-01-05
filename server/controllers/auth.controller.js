import UserCredentials from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";
import passport from "passport";
import session from "express-session";


const sessionMiddleware = session({
    secret: "Mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1day
    }
});


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

    try {
        const { email, password } = req.body;
        console.log(password);
        console.log(email);
        let user = await UserCredentials.findOne({ email: email });
        let checkPassword = await bcrypt.compare(password, user.password);
        if (user && checkPassword == true) {
            if (req.session.email == null) {
                req.session.regenerate((err) => {
                    req.session.email = email;
                    req.session.save();
                    console.log(req.session);

                    res.render("admin");
                    res.status(200).json({ message: `generated  ${req.session.email}` });
                })
            } else {
                res.status(200).json({ message: "Alredy loged in" });
            }
        } else {

            res.status(401).json({ message: "Invalid  username or password " });
        }


    } catch (error) {
        res.status(401).json({ message: `Problem in Login: ${error}` });
    }
}

export const logout = async (req, res) => {
    try {
        console.log(req.session);
        if (req.session.email) {
            delete req.session.email;
            res.status(200).send("Sucessfully deleted session")

        } else {
            res.status(404).send("Already logged out ")
        }
    } catch (err) {
        res.status(500).send(`Error ${err}`);
    }
}


export const admin = async (req, res) => {
    res.status(200).send({ message: "Hello Customer" });

}
