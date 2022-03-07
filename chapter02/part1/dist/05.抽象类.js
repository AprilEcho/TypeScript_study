"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财');
    console.log(dog);
    dog.sayHello();
})();
