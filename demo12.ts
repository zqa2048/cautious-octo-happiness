namespace shauiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('my name is 刘德华!')
        }
    }
}


namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('my name is 马德华')
        }
    }
}

let pi1:shauiGe.Dehua = new shauiGe.Dehua
let pi2:bajie.Dehua = new bajie.Dehua
console.log(pi1,pi2)
pi1.talk()
pi2.talk()