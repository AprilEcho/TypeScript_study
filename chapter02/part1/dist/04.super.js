"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫！！！');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 18);
    console.log(dog);
    dog.sayHello();
})();
