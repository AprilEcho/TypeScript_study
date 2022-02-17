let a: object;
a = {}
a = function () {
}

let b: { name: string, age?: number }
b = {name: '孙悟空', age: 19}

//[propName:string]:any表示任意类型字符串
let c: { name: string, [propName: string]: any }
c = {name: '猪八戒', age: 18}

//两个参数，返回值是number
let d: (a: number, b: number) => number;
d = function (n1, n2) {
  return n1 + n2;
}

// string[]  表示字符串数组
let e: string[];
e = ['a', 'b']

let f: number[];
let g: Array<number>
g = [1, 2]

let h: [string, string];
h = ['hello', '1']

enum Gender {
  Male,
  Female
}

let i: { name: string, gender: Gender }
i = {
  name: '孙悟空',
  gender: Gender.Male
}

console.log(i.gender === Gender.Male)

// & 表示同时
let j: { name: string } & { age: number };
j = {
  name: '孙悟空',
  age: 18
}

//类型别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType;
k = 2;

