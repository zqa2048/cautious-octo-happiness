function search(age:number):string{
    return '找到了'+age+'岁的小姐姐！'
}
var num:number = 18
var result:string = search(num)

console.log(result)

function search2(age:number,stature?:string):string{
    let yy:string
    yy = '找到了'+age+'岁'
    if(stature!=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'
}
var result=search2(num)
console.log(result)
result = search2(num,'大长腿')
console.log(result)
console.log('------------')

function search3(age: number=18,stature:string='水蛇腰'): string {
    let yy: string
    yy = '找到了' + age + '岁'
    if (stature != undefined) {
        yy = yy + stature
    }
    return yy + '的小姐姐'
}
result=search3()
console.log(result)
result = search3(17,'大波浪')
console.log(result)


console.log('-------------')


function search4(age:number,...xuqiu:string[]): string {
    let yy: string='找到了' + age + '岁'
    for (let i=0;i< xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if (i<xuqiu.length-1){
            yy = yy + '、'
        }
    }
    return yy + '的小姐姐'
}
result = search4(10,'瓜子脸','大波浪','水蛇腰','大长腿')
console.log(result)
console.log('-------------')
