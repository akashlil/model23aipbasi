// function Person(name, age) {
//     bh = Object.create(Person.prototype)
//     bh.name = name;
//     bh.age = age;
//    return bh;
// }

// single function add prototype
// Person.prototype.add= function () {
//    console.log(`my name is ${bh.name}`);
// }

// multipul function add prototype

// Person.prototype = {
//     add() {
//             console.log(`my name is ${bh.name}`);
//     }
//     event() {
//             console.log(`my name is ${bh.name}`);
//     }

// }

// const sakib = Person("sakib", 52);
// console.log(sakib.add());
// console.log(bh);

// যদি আমার new keywork লিখি তাহলে object তরি করতে হয় না। এব  person function ar prototype, object ar ভিতরে দিতে হয় না। অটো চলে যাই। auto return hoye jai.
// bh = Object.create(Person.prototype)


// new keyword
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.add = function () {
//       console.log(`i am a cricter ${this.name}, i am ${this.age}`);
// }
  
// const sakib = new Person("sakib", 52);
// console.log(sakib.add());

// inheritence function to function
function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.add = function () {
    console.log(`i am a cricter ${this.name}, i am ${this.age}`);
}


function Cricketer(name,age,type, sale) {
    Person.call(this)
    this.name = name;
    this.age = age;
    this.type = type;
    this.sale = sale;
}


Cricketer.prototype = Object.create(Person.prototype);//best cobe use all
// Cricketer.prototype = Person.prototype;
Cricketer.prototype.constructor = Cricketer;



const sakib = new Cricketer("sakib", 52,"all roundor ","52000");
console.log(sakib.add());