"use strict";
var shauiGe;
(function (shauiGe) {
    class Dehua {
        constructor() {
            this.name = '刘德华';
        }
        talk() {
            console.log('my name is 刘德华!');
        }
    }
    shauiGe.Dehua = Dehua;
})(shauiGe || (shauiGe = {}));
var bajie;
(function (bajie) {
    class Dehua {
        constructor() {
            this.name = '马德华';
        }
        talk() {
            console.log('my name is 马德华');
        }
    }
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
let pi1 = new shauiGe.Dehua;
let pi2 = new bajie.Dehua;
console.log(pi1, pi2);
pi1.talk();
pi2.talk();
