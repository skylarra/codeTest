import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render( __dirname + "/views/home.ejs")
})

app.get("/projects", (req, res) => {
    res.render( __dirname + "/views/projects.ejs")
})

app.listen(port, () => {
    console.log(`Server is running on ${ port }.`);
});
