// var person = new Object();
// person.name = 'Pippo';
// person.social = new Object();
// person.social.facebook = true;

// console.log(person);
// console.log(person.name + " has a facebook account");

// $ciao = "ciaone";

// var object = {
//     company: 'Facebook',
//     ceo: {
//         firstName: 'Mark',
//         favColor: 'blue'
//     }
// };

// console.log(object.ceo.firstName);

// function multiply(x, y) {
//     return x * y
// }

// function makeM(multiply, x) {
//     return multiply * x
// }

// console.log(makeM(multiply(12, 7), 2));

// function prova(a) {
//     function vediamo(b){
//         return a * b
//     }
//     return vediamo
// }

// var proviamo = prova(8);
// console.log(proviamo(10));

// var a = {
//     x: 7
// };

// var b = a;

// console.log(a);
// console.log(b);

// b.x = 15;
// console.log(a);
// console.log(b);


////////////////////////

// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2)
// }

// var myCircle = new Circle(7);
// console.log(myCircle);

////////////////////////

// var circle = {
//     radius: 10,
//     getArea: function() {
//         console.log(this);
//         console.log(this.radius);
//         return Math.PI * Math.pow(this.radius, 2)
//     }
// }

// console.log(circle.getArea());

// var array = new Array();
// array[0] = "Bubba Mubba";
// array[1] = 10;
// array[2] = function (name) {
//     console.log(name);
// };
// array[3] = {
//     course: 'Digital Product Design',
//     type: 'Master Juice'
// }

// console.log(array);
// array[2]("Sofia potrebbe iscriversi al corso " + array[3].course + ", che è un " + array[3].type + " creato da " + array[0]);

// array.push("Pushato");
// console.log(array);

// var names = ["Sofia", "Alice", "Lijo"];
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i] + " ha partecipato al workshop di " + array[0] + " sul " + array[3].course);
// }

// var obobo = ["Dani", "Sofia", "Lara"];
// for (var name in obobo) {
//     console.log("Hello " + obobo[name]);
// }

// var dani = {};
// dani.name = "Dani";
// dani.sayHello = function() {
//     console.log("Hello " + dani.name);
// }

// var francesca = {};
// francesca.name = "Francesca";
// francesca.sayHi = function() {
//     console.log("Hi " + francesca.name);
// }

// function Person(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age
// }

// Person.prototype.greet = function() {
//     console.log("Hello, my name is " + this.name);
// }

// var Francesca = new Person("Francesca", "Bagnato", 26);
// console.log(Francesca);