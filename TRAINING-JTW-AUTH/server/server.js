import express from "express"
import 'dotenv/config'
import authRoutes from "./Routes/AuthRoutes.js";
import { connectToDb } from "./Database.js";
import userRoutes from "./Routes/UserRoutes.js";

const server = express();

const PORT = process.env.PORT ?? 5000;

server.use(express.json());
server.use("/auth", authRoutes);
server.use("/", userRoutes);


connectToDb()
    .then(() => {
        server.listen(PORT, () => console.log(`Serveris sėkmingai paleistas ant ${PORT}`))
    })
    .catch((error) => {
        console.error("Nepavyko paleisti duomenų bazės", error)
    })