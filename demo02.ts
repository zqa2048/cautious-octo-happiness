var age:number =18
var stature:number = 178.3
var nan:number = NaN
console.log(age)
console.log(stature)
console.log(nan)
console.log('----------------------------')


var names:string = '周乾'
console.log(names)

console.log('-------------------')

var b:boolean = true
var c:boolean = false
//ts boolean 只有这两种明确的布尔类型，不再有0 NaN 等非真类型。
console.log(b,c)
console.log('---------------------')

enum REN{nan='男人',nv='女人',yao='👺'}
console.log(REN)
console.log('---------------------')


var wan:any = 'zqa505'
wan = '111'
wan=[1,2,3]
console.log(wan)