import express from "express";
import path from 'path';

const app = express();
const server = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "../public"))); // recuerda que la ruta __dirname es donde te ubicas




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.post("/", (req, res) => {
    console.log("Server is getting the email")
    console.log("Email in server", req.body);
    res.sendFile(path.join(__dirname, "../public/correct.html"));

})

app.listen(server, () => {
    console.log("Sever is running at http://localhost:5000")
})