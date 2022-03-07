"use strict";
class Person {
    constructor() {
        //实例属性
        //readonly是只读属性，不能修改
        this.name = '孙悟空';
    }
    //定义方法
    sayHello() {
        console.log('你好');
    }
}
//在属性前使用static关键字定义类属性（静态属性）
Person.age = 18;
const per = new Person();
per.name = '猪八戒';
console.log(per);
console.log(Person.age);
per.sayHello();
