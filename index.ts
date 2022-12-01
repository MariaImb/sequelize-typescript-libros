import express from "express";
import connection from "./models";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    return res.status(200).send({
        message: `Server running :)`,
    });
});

app.listen(3000, async () => {
    console.log(3000);
    connection.sync({ force: true });
});
