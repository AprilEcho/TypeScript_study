let a: number;
a = 10
//a = 'hello';  //报错

let b: string;
b = 'hello';


// function sum(a:number, b:number) {
//   return a + b;
// }

function sum(a: number, b: number): number {
  return a + b;
  // return a+'hello';//报错
}

console.log(sum(123, 456));