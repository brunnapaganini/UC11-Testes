export function calcularDesconto(valor:number):number{
    if (valor > 100){
        return valor * 0.9;
    }
    return valor;
}

export function ehPar(numero:number):boolean {
    return numero % 2 === 0;
}

export function validarIdade(idade:number):boolean {
    if(idade >= 18){
        return true;
    }
    return false;
}

export function statusAluno(nota:number,frequencia:number):string{
    if(nota >= 70 && frequencia < 75){
        return "Recuperação";
    } else if (nota >= 70 && frequencia > 75) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}