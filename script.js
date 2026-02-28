// console.log("Hello World");
// document.write("Hello World");

// var num = 10;
// console.log(num);
// console.log(typeof(num));
// num = false;
// console.log(num);
// console.log(typeof(num));
// num = "Geet Tikkha";
// console.log(num);
// console.log(typeof(num));
// num = null;
// console.log(num);
// console.log(typeof(num));
// num = undefined;
// console.log(typeof(num));

// // function
// var sayHello = function() {
//     alert("hello world");
// }

// // array
// var numberArray = [1, 2, 3];
// var animals = new Array("cat", "dog", "mouse", "lion");

// // object
// var person = {
//     name: 'Barack Hussein Obama II',
//     age: '51',
//     title: '44th President of the United States'
// }




// const sym1 = Symbol(4);
// console.log(sym1);
// const sym2 = Symbol(4);
// console.log(sym2);
// if (sym1 == sym2) {
//     console.log("true");
// }
// else
// {
//     console.log("false")  // because each symbol is unique
// }

// {
//     alert("test");


// }

// var a = 100; var b = 13; var c = 10; var linebreak = "<br>";

// document.write("a + b + c =");
// result = a + b + c;
// document.write(result);
// document.write(linebreak);

// document.write("a + b =");
// result = a + b;
// document.write(result);
// document.write(linebreak);

// document.write("a - b=");
// result = a - b;
// document.write(result);
// document.write(linebreak);

// document.write("a / b=");
// result = a / b;
// document.write(result);
// document.write(linebreak);

// document.write("a % b=");
// result = a % b;
// document.write(result);
// document.write(linebreak);



// var a = 10;
// var b = 20;
// var linebreak = "<br />";

// document.write ("(a == b) =>");
// result = (a == b);
// document.write(result);
// document.write(linebreak);

// document.write ("(a < b) =>");
// result = (a < b);
// document.write(result);
// document.write(linebreak);

// document.write ("(a > b) =>");
// result = (a > b);
// document.write(result);
// document.write(linebreak);

// document.write ("(a != b) =>");
// result = (a != b);
// document.write(result);
// document.write(linebreak);


// document.write ("(a >= b) =>");
// result = (a >= b);
// document.write(result);
// document.write(linebreak);


// document.write ("(a <= b) =>");
// result = (a <= b);
// document.write(result);
// document.write(linebreak);





// loops

// var count;
// document.write("starting loop" + "<br />");
// for (count = 0; count < 10; count++) {
//     document.write("current count:" + count);
//     document.write("<br />");
// }
// document.write("loop stopped!");


// for in loop
// for(key in object) {
// // code block to be executed
// }
// const person = {
// fname: "Ajay",
// Iname: "Singh",
// age: 25
// }
// for (let x in person) {
// console.log("person details: " + x + ":" + person[x])   // person[x] can also be writtten as person.x
// }




// var a = 40;
// var b = 20;
// var linebreak = "<br />";

// document.write("Value of a => (a = b) => ");
// result = (a = b);
// document.write(result);
// document.write(linebreak);

// document.write("Value of a => (a += b) => ");
// result = (a += b);
// document.write(result);
// document.write(linebreak);

// document.write("Value of a => (a -= b) => ");
// result = (a -= b);
// document.write(result);
// document.write(linebreak);

// document.write("Value of a => (a *= b) => ");
// result = (a *= b);
// document.write(result);
// document.write(linebreak);

// document.write("Value of a => (a /= b) => ");
// result = (a /= b);
// document.write(result);
// document.write(linebreak);

// document.write("Value of a => (a %= b) => ");
// result = (a %= b);
// document.write(result);
// document.write(linebreak);



// while loop

// var count = 0;
// document.write("Starting loop");
// while (count < 10)
// {
//     document.write("Current Count:" + count + "<br/>");
//     count++;
// }
// document.write("loop stopped1");



// const person = {
//     fname : "Ajay",
//     Lname : "Singh",
//     age : 25
//     }
//     for (let x in person) {
//         console.log ("person details: " + x + ":" + person[x])
//     }


// var count = 0;
// console.log("starting loop");

// while (count < 10)
// {
//     console.log("Current count: " + count + "<br/>");
//     count ++;
// }
// console.log("loop stopped");

// if we want t use any html tag in javascript then put it in double quotes

// conditional if

// var age = 20;

// if (age > 18) {
//     document.write("<b>You are eligible to cast the vote.</b>");
// }


// conditional if else

// var age = 20;

// if (age > 18) {
//     console.log("You are an adult.");
// }
// else
// {
//     console.log("you are minor.");
// }

// var grade = 'A';
// document.write("Entering switch block <br/>");
// switch(grade) {
//     case 'A' : document.write("good job <br/>");
//     break;

//     case 'B' : document.write("preety good <br/>");
//     break;

//     case 'C' : document.write("passed <br/>");
//     break;

//     case 'D' : document.write("not so good <br/>");
//     break;

//      case 'E' : document.write("failed <br/>");
//     break;

//     default: document.write("unknown grade")
// }
// document.write ("existing switch block");



// javascript functions

// function myFuntion()
// {
//     alert("Hello World");
// }

// function with arguments

// function sayHello(name, age)
// {
//     document.write (name + "is" + age + "years old.");
// }


// var res = mul (12, 30);
// function mul(x , y)
// {
//     return x * y;
// }
// document.write(res);




// arrow functions

// // normal function
// function add(a, b) {
//     console.log(a + b);
// } add(10, 20);

// // arrow function
// var add2 = (a, b) => {
//     console.log(a + b);
// }

// arrow fuction for single line parameters

// var add3 = (a, b) => console.log(a + b);
// add3(30, 20);


// object - key value pair (represents collection of properties)

// var person = {
//     name : "John Mac",
//     age : 30,
//     isMarried : true,
//     address : {
//         street : "Vijay Nagar",
//         flatNO : 201
//     }
// }
// // console.log(person);
// for (let x in person) {
//     console.log("person details: " + x + ":" + person[x])
// }


// var person2 = new Object();
// person2.name = "geet";     // to add properties to this object
// person2.age = 32;
// person2.ismarried = true;
// person2.address = {};
// person2.address.street = "nagar road";
// person2['address']['flatNO'] = 33;
// console.log(person2)



// var person = {
//     name : 'John Mac',
//     age : 30,
//     isMarried : true,
//     child : ['Cheeku'],
//     getInfo : function () {
//         var address = {
//             street : 'Vijay Nagar',
//             flatNO : 20
//         };
//         console.log(address.street);
//     }
// };
// person.getInfo();