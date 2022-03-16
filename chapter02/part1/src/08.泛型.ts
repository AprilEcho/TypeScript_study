// function fn(a: number): number {
//   return a;
// }

//在定义函数或类的时候，如果遇到类型不明确就可以使用泛型

function fn<T>(a: T): T {
  return a;
}

let result = fn(10);
let result2 = fn<string>('hello');

console.log(result, result2)

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

interface Inter {
  length: number
}

function fn3<T extends Inter>(a: T): number {
  return a.length;
}

fn3('123');

class Myclass<T>{
  name:T;
  constructor(name:T) {
    this.name = name;
  }
}

const my = new Myclass<string>('孙悟空')
console.log(my)