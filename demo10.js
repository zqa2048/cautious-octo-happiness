"use strict";
class QW {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    interest() {
        console.log('找小姐姐');
    }
}
let qw = new QW('周星驰', 18, 'coding');
console.log(qw);
qw.interest();
class QWER extends QW {
    constructor() {
        super(...arguments);
        this.xingxiang = '帅气';
    }
    zhuanQian() {
        console.log('一天赚了一个亿');
    }
    interest() {
        super.interest();
        console.log('建电商平台');
    }
}
let shuai = new QWER('技术帅', 17, '演讲');
console.log(shuai);
shuai.interest();
shuai.zhuanQian();
