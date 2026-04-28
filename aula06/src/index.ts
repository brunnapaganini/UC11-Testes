/*export function calcularFrete(valor:number):number{
    if(valor > 200){
        return 0;
    } else {
        return 20;
    }
}*/

export function calcularFrete(valor:number):number{
    const calcula = valor >= 200;
    return calcula ? 0 : 20;
}

export function ehPar(numero:number):boolean {
    const parim = numero % 2 === 0;
    return parim ? true : false;
}