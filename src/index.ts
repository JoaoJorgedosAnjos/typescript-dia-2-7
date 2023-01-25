
function add(num1 : number, num2 : number): number{
    return num1 + num2
}

add(2,2)
console.log(add(2,2));


function result(price : number){
    console.log(`The result is ${price}`);

}

console.log(result(add(6,3))); //função sem retorno = void/undefinied
 