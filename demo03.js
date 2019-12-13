"use strict";
function search(age) {
    return '找到了' + age + '岁的小姐姐！';
}
var num = 18;
var result = search(num);
console.log(result);
function search2(age, stature) {
    let yy;
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result = search2(num);
console.log(result);
result = search2(num, '大长腿');
console.log(result);
console.log('------------');
function search3(age = 18, stature = '水蛇腰') {
    let yy;
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
result = search3();
console.log(result);
result = search3(17, '大波浪');
console.log(result);
console.log('-------------');
function search4(age, ...xuqiu) {
    let yy = '找到了' + age + '岁';
    for (let i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    return yy + '的小姐姐';
}
result = search4(10, '瓜子脸', '大波浪', '水蛇腰', '大长腿');
console.log(result);
console.log('-------------');
