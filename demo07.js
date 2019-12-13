"use strict";
//RegExp  string
//构造函数声明法
let reg1 = new RegExp('zqa');
console.log(reg1);
let reg2 = new RegExp('zqa', 'gim');
console.log(reg2);
//字面量声明法
// let reg3:RegExp =  /zqa/
// let reg4:RegExp = /zqa/gim
// console.log(reg3,reg4)
//test
// let reg3:RegExp = /zqa/i
// let website:string = 'zqa.com'
// let result1:boolean = reg3.test(website)
// console.log(result1)
// //exec
let reg3 = /zqa/igm;
let website = 'zqa.com \
        ZqA.org';
console.log(reg3.exec(website));
