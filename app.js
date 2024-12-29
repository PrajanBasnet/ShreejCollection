import express from "express"
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.use(expressEjsLayouts);
app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

