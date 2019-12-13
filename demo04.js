"use strict";
// let zqa = {
//     name:"zhouqian",
//     website:'zqa505',
//     age:18,
//     saySometing:function(){
//         console.log('为了学习typeScript')
//     }
// }
// console.log(zqa.name)
// zqa.saySometing()
//-------------------------------------------------------------
//数组 -------  array(数组) new String(字符串) Date(时间) RegExp(正则) 这四种是引用类型的数组 
// let arr1:number[]=[1,2,3]               //number类型的数组的定义和字面量赋值方法
//                                         //以下同理
// let arr2:Array<string> = ['aa','bb','cc']
// let arr3:Array<boolean> = [true,false,true]
//---------------------------------------
let arr1 = new Array(1, 2, 3); //构造函数赋值法
let arr2 = new Array('aa', 'bb', 'cc');
let arr3 = new Array(true, false, true);
//元祖类型
let arr4;
arr4 = new Array('周乾', 18);
console.log(arr1[1]);
console.log('--------------------------');
console.log(arr2[1]);
console.log('--------------------------');
console.log(arr3[0]);
console.log('--------------------------');
console.log(arr4[1]);
