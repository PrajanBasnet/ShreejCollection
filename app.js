import express from "express"
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";
import index from "./server/routes/index.route.js";
import { connectDB } from "./server/config/db.js";
import auth from "./server/routes/auth.router.js";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.use(express.static("public"));
app.use(expressEjsLayouts);
app.use(express.json());

connectDB();
app.use(index);
app.use(auth);




app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

