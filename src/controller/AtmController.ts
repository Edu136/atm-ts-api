import { Request, Response } from "express";
import { AtmRequestDTO } from "../dto/AtmRequestDTO";
import { AtmSaqueService } from "../service/AtmService";

export const AtmSaque = (req: Request<AtmRequestDTO>, res: Response) => {
    if(!req.body.valor) {
        return res.status(400).json({
            mensagem: "O campo 'valor' é obrigatório."
        });
    }
    try{
        const { valor } = req.body;
        const notas = AtmSaqueService(valor);
        return res.status(200).json(notas);


    }catch (error: any) {
        return res.status(400).json({
            mensagem: error.message
        });
    }
}
