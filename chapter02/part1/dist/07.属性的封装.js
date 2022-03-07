"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName() {
        //   return this.name;
        // }
        //
        // setName(value: string) {
        //   this.name = value;
        // }
        //
        // getAge() {
        //   return this.age;
        // }
        //
        // setAge(value: number) {
        //   if (value >= 0) {
        //     this.age = value;
        //   }
        // }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const per = new Person('孙悟空', 18);
    // per.setName('猪八戒')
    //
    // per.setAge(-33)
    //
    // console.log(per.getName());
    per.name = "猪八戒";
    console.log(per.name);
    class A {
        constructor(name) {
            this.name = name;
        }
    }
    class B extends A {
        test() {
            console.log(this.name);
        }
    }
    const b = new B('流浪者');
    // b.name = '123'
    b.test();
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('新宿猫', 20);
    console.log(c.name);
    console.log(c.age);
})();
