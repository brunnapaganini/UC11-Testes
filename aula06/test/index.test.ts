import {calcularFrete,ehPar} from '../src/index'

describe("Deve calcular frete",() => {
    it("deve retornar o frete gratuito ", () =>{
        expect(calcularFrete(200)).toBe(0);
    });
    it("deve retornar o frete no valor de 20", () =>{
        expect(calcularFrete(100)).toBe(20);
    });
});

describe("função ehPar", () => {
    it("deve retornar true se for numero par", () =>{
        expect(ehPar(2)).toBeTruthy();
    })
    it("deve retornar false se for numero impar", () =>{
        expect(ehPar(3)).toBeFalsy();
    })
})