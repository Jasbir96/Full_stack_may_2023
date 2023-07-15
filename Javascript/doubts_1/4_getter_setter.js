//  function constructor 
// function A(name) {
//     _val = 100;
//     this.name = name;
// }
// console.log(typeof A);

// const jasbir = new A("Jasbir");
// console.log(jasbir)



// class A {
//     // _val=100
//     constructor() {
//         this.name = "hello world";
//     }
//     get getDetails() {
//         return this.name + "has $" + this._val;

//     }
//     set setName(name) {
//         this.name = name;
//     }
// }
// // console.log(typeof A);


// const jasbir = new A;
// console.log(jasbir.getDetails);
// jasbir.setName="Loki";
// console.log(jasbir.getDetails);
// console.log(jasbir);

let val = 100;
class A {

    set foo(_val) {
        console.log("38", _val);
        val = _val;
    }
    get foo() {
        return val;
    }
}

class B extends A {
    get foo() {
        return val;
    }
    set foo(_val) {
        console.log("38", _val);
        val = _val;
    }
}
class C extends A {


}
const b = new B();
const c = new C();

console.log("val", val);
// you intend to set you value using foo setter
b.foo = 200;
c.foo = 300;
// b.foo = "hi";
console.log(b.foo);
console.log(c.foo);
console.log("val", val)
