//类是对象具体事物的抽象，对象是类的具体表现
class XiaoJieJie{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('hello world')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('zqa',18)
console.log(jiejie)
jiejie.say()