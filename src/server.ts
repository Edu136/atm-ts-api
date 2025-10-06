import express from "express";
import {AtmSaque} from "./controller/AtmController";



const app = express();
app.use(express.json());
app.post("/api/saque", AtmSaque);


const PORT = 8000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
