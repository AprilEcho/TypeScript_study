//使用字面量进行类型赋值
let a: 10;
a = 10;

//可以用|连接多个类型
let c: boolean | string;
c = true;
c = '123';

let d: any;
d = 1;
d = '12';
d = true;


let e: unknown;

e = 'hello';


let s: string;

s = d;

if (typeof e === "string") {
  s = e;
}


//类型断言
s = e as string;

s = <string>e;

//void 表示空，表示没有返回值
function fn():void{

}

//never 表示永远不会有结果
function fn2():never{
  throw new Error('报错！');
}