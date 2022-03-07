(function () {
  class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
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
      return this._name
    }

    set name(value: string) {
      this._name = value
    }

  }

  const per = new Person('孙悟空', 18);

  // per.setName('猪八戒')
  //
  // per.setAge(-33)
  //
  // console.log(per.getName());

  per.name = "猪八戒"

  console.log(per.name)


  class A {
    protected name: string;

    constructor(name: string) {
      this.name = name
    }
  }

  class B extends A {

    test() {
      console.log(this.name)
    }

  }

  const b = new B('流浪者');

  // b.name = '123'

  b.test()

  class C{
    constructor(public name:string,public age:number) {
    }
  }

  const c = new C('新宿猫',20)

  console.log(c.name)
  console.log(c.age)



})()