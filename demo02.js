"use strict";
var age = 18;
var stature = 178.3;
var nan = NaN;
console.log(age);
console.log(stature);
console.log(nan);
console.log('----------------------------');
var names = '周乾';
console.log(names);
console.log('-------------------');
var b = true;
var c = false;
//ts boolean 只有这两种明确的布尔类型，不再有0 NaN 等非真类型。
console.log(b, c);
console.log('---------------------');
var REN;
(function (REN) {
    REN["nan"] = "\u7537\u4EBA";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\uD83D\uDC7A";
})(REN || (REN = {}));
console.log(REN);
console.log('---------------------');
var wan = 'zqa505';
wan = '111';
wan = [1, 2, 3];
console.log(wan);
