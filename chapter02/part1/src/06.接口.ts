(function () {

  //描述对象的类型
  type myType = {
    name: string,
    age: number
  };

  //接口用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法，同时接口可以当成类型声明去使用
  interface myInterface {
    name: string,
    age: number
  }

  interface myInterface {
    gender: string
  }

  const obj: myInterface = {
    name: '孙悟空',
    age: 18,
    gender: '男'
  }

  interface myInter {
    name: string;

    sayHello(): void;
  }

  class MyClass implements myInter {
    name = '猪八戒'

    sayHello() {
      console.log('呼呼呼')
    }
  }


})()