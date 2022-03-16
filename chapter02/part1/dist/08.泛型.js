"use strict";
// function fn(a: number): number {
//   return a;
// }
//在定义函数或类的时候，如果遇到类型不明确就可以使用泛型
function fn(a) {
    return a;
}
let result = fn(10);
let result2 = fn('hello');
console.log(result, result2);
function fn2(a, b) {
    console.log(b);
    return a;
}
function fn3(a) {
    return a.length;
}
fn3('123');
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const my = new Myclass('孙悟空');
console.log(my);
