class Person {
  //实例属性
  //readonly是只读属性，不能修改
  name: string = '孙悟空';

  //在属性前使用static关键字定义类属性（静态属性）
  static age: number = 18;

  //定义方法
  sayHello(){
    console.log('你好')
  }

}

const per = new Person()

per.name = '猪八戒'

console.log(per)

console.log(Person.age)

per.sayHello()