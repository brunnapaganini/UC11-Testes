import {soma, sub, div, multi} from '../src/soma';

test('deve somar dois numeros',() => {
    expect(soma(2,3)).toBe(5);
});


test('deve subtrair dois numeros',() => {
    expect(sub(2,3)).toBe(-1);
});


describe("Função dividir", () => {
    it("deve dividir corretamente",()=>{
        expect(div(10,2)).toBe(5);
    })
    it("deve lançar erro ao dividir por zero",()=>{
        expect(() => div(10, 0)).toThrow();
    })
})


test('deve multiplicar dois numeros',() => {
    expect(multi(2,3)).toBe(6);
});

