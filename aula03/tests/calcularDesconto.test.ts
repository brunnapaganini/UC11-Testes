import { calcularDesconto, ehPar, validarIdade } from "../src/calcularDesconto"

describe("função calcularDesconto", () => {
    it("deve aplicar desconto quando valor for maior que 100", () =>{
        expect(calcularDesconto(200)).toBe(180);
    })
    it("não deve aplicar desconto quando valor for menor ou igual a 100", () => {
        expect(calcularDesconto(100)).toBe(100);
    })
});

describe("função ehPar", () => {
    it("deve retornar true se for numero par", () =>{
        expect(ehPar(2)).toBeTruthy();
    })
    it("deve retornar false se for numero impar", () =>{
        expect(ehPar(3)).toBeFalsy();
    })
});

describe("função validarIdade", () => {
    it("deve retornar true se for maior de idade", () =>{
        expect(validarIdade(19)).toBeTruthy();
    })
    it("deve retornar false se for menor de idade", () =>{
        expect(validarIdade(17)).toBeFalsy();
    })
});