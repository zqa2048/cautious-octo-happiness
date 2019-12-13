"use strict";
//public 共有的，内部外部都可用
// protected  受保护的修饰符
//private  私有的
//readonly 只读修饰符
//public readonly + 表达式
class ZQA {
    constructor(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('hello,good morning!');
    }
    sayLove() {
        console.log('love');
    }
}
let zqa = new ZQA('女', '迪丽热巴', 22);
console.log(zqa);
console.log(zqa.sex);
console.log(zqa.age);
console.log(zqa.name);
zqa.sayHello();
zqa.sayLove();
