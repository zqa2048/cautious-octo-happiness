//public 共有的，内部外部都可用
// protected  受保护的修饰符
//private  私有的
//readonly 只读修饰符
//public readonly + 表达式
class ZQA{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello(){
        console.log('hello,good morning!')
    }
    protected sayLove(){
        console.log('love')
    }
}
let zqa:ZQA = new ZQA('女','迪丽热巴',22)
console.log(zqa)

console.log(zqa.sex)
console.log(zqa.age)
console.log(zqa.name)

zqa.sayHello()
zqa.sayLove()
