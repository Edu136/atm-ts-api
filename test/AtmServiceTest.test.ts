import { AtmSaqueService } from "@service/AtmService";
import { BadRequestException } from "@exceptions/BadRequestException";

describe("AtmSaque", () => {
  it("Deve lançar exceção para valor impossível (1)", () => {
    expect(() => AtmSaqueService(1)).toThrow(BadRequestException);
  });

  it("Deve lançar exceção para valor negativo", () => {
    expect(() => AtmSaqueService(-10)).toThrow(BadRequestException);
  });

  it("Deve lançar exceção para valor não inteiro", () => {
    expect(() => AtmSaqueService(10.5)).toThrow(BadRequestException);
  });

  it("Deve sacar 13 corretamente", () => {
    const resultado = AtmSaqueService(13);
    expect(resultado).toEqual({
      100: 0,
      50: 0,
      20: 0,
      10: 0,
      5: 1,
      2: 4
    });
  });

  it("Deve sacar 431 corretamente", () => {
    const resultado = AtmSaqueService(431);
    expect(resultado).toEqual({
      100: 4,
      50: 0,
      20: 1,
      10: 0,
      5: 1,
      2: 3
    });
  });
});
