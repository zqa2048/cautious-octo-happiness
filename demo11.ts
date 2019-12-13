// interface Husband{
//     sex:string
//     interest:string
//     maiBaoBao?:boolean
// }
// let myHusband:Husband = {sex:'男',interest:'看书，做家务',maiBaoBao:true}
// console.log(myHusband)


interface SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch=function (source:string,subString:string) {
    let flag = source.search(subString)
    console.log(flag)
    return (flag!=-1)
}
console.log(mySearch('高富帅','瘦'))