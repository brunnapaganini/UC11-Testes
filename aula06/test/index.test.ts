import {calcularFrete} from '../src/index'

describe("Deve calcular frete",() => {
    it("deve retornar o frete gratuito ", () =>{
        expect(calcularFrete(200)).toBe(0);
    });
    it("deve retornar o frete no valor de 20", () =>{
        expect(calcularFrete(100)).toBe(20);
    });
});