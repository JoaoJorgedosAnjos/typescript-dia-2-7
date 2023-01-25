"use strict";
//FUNÇÃO RETURN E VOID
// function add(num1 : number, num2 : number): number{
//     return num1 + num2
// }
// add(2,2)
// console.log(add(2,2));
// function result(price : number){
//     console.log(`The result is ${price}`);
// }
// console.log(result(add(6,3))); //função sem retorno = void/undefinied
//OBJETO
// const user:{
//     firstName:string;
//     lastName:string;
//     age:number;
// } = {
//     firstName: "João",
//     lastName: "Paixão",
//     age: 28
// }
// user.lastName = "dos Anjos"
// console.log(user.lastName);
//UNKNOWN
// let itemInput: unknown
// let itemName: string
// itemInput = 10
// itemInput = "Apple"
// if(itemInput === "string"){
//     itemName = itemInput
// }
//NEVER
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("The application crashed", 500);
console.log(generateError("The application crashed", 500));
