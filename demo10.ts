class QW{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}
let qw:QW = new QW('周星驰',18,'coding')
console.log(qw)
qw.interest()


class QWER extends QW{
    public xingxiang:string = '帅气'
    public zhuanQian(){
        console.log('一天赚了一个亿')
    }
    public interest(){
        super.interest()
        console.log('建电商平台')
    }
}
let shuai = new QWER('技术帅',17,'演讲')
console.log(shuai)
shuai.interest()
shuai.zhuanQian()