"use strict";
//类是对象具体事物的抽象，对象是类的具体表现
class XiaoJieJie {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('hello world');
    }
}
let jiejie = new XiaoJieJie('zqa', 18);
console.log(jiejie);
jiejie.say();
