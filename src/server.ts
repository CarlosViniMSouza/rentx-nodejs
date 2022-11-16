import express from 'express';
import { router } from './routes';
import "./database";
import "./shared/container";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
    return response.json({ message: "Project Started" })
});

app.listen(3030, () => console.log("Server is Up!"));
