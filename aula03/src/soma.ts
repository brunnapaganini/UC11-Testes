export function soma(num:number,num2: number): number {
    return num + num2;
}
export function sub(num:number,num2: number): number {
    return num - num2;
}
export function div(num: number, num2: number): number {
    if (num2 === 0) {
        throw "Divisão por zero";
    }
    return num / num2;
}
export function multi(num:number,num2: number): number {
    return num * num2;
}