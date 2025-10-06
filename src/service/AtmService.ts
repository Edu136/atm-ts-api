import { AtmResponseDTO } from "../dto/AtmResponseDTO";
import { BadRequestException } from "../exceptions/BadRequestException";

export function AtmSaqueService(valor: number): AtmResponseDTO {
    if (typeof valor !== 'number' || !Number.isInteger(valor)) {
        throw new BadRequestException("Valor inválido, deve ser um número inteiro.");
    }

    if (valor <= 0) {
        throw new BadRequestException("Valor inválido, deve ser maior que zero.");
    }

    if (valor === 1 || valor === 3) {
        throw new BadRequestException("Não é possível sacar esse valor com as notas disponíveis.");
    }

    const notas: AtmResponseDTO = { 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0 };
    let restante = valor;

    const valoresNotas: (keyof AtmResponseDTO)[] = [100, 50, 20, 10, 5, 2];

    for (const nota of valoresNotas) {
        if (restante >= nota) {
            let qtd = Math.floor(restante / nota);

            if (restante - qtd * nota === 1 || restante - qtd * nota === 3) {
                qtd--;
            }

            if (qtd > 0) {
                notas[nota] = qtd;
                restante -= qtd * nota;
            }
        }
    }

    if (restante !== 0) {
        throw new BadRequestException("Não é possível sacar esse valor com as notas disponíveis.");
    }

    return notas;
}
