import * as rls from "readline-sync";

let arr1: number[] = new Array(6);
for (let i: number = 0; i < arr1.length; i++) {
    arr1[i] = rls.questionInt(`Arr#1 -> number in position ${i + 1}: `);
}
let arr2: number[] = new Array(6);
for (let i: number = 0; i < arr2.length; i++) {
    arr2[i] = rls.questionInt(`Arr#2 -> number in position ${i + 1}: `);
}

let arr3: number[] = new Array(6);




