(function () {

  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log('动物在叫')
    }
  }

  class Dog extends Animal {

    run() {
      console.log(`${this.name}在跑`)
    }

    sayHello() {
      console.log('汪汪汪')
    }

  }

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵')
    }
  }


  const dog = new Dog("旺财", 18);
  const cat = new Cat("喵星", 18);
  console.log(dog)
  dog.sayHello();
  dog.run();

  console.log(cat);
  cat.sayHello();


})()