import express from "express"
import expressEjsLayouts from "express-ejs-layouts";
import index from "./server/routes/index.route.js";
import { connectDB } from "./server/config/db.js";
import auth from "./server/routes/auth.router.js";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config();


const port = process.env.PORT || 4000;
const app = express();
const sessionMiddleware = session({
    secret: "Mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1day
    }
});
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

connectDB();
app.use(express.static("public"));

app.use(sessionMiddleware);
app.use(expressEjsLayouts);
app.use(express.json());
app.use(index);
app.use(auth);






app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

