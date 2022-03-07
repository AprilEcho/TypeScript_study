"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this);
    }
}
const dog = new Dog('旺财', 18);
const dog2 = new Dog('小白', 12);
dog.bark();
dog2.bark();
