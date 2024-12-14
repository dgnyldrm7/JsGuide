import x from '../JsFunctions-2/component/package.js';
var namespace = {};


/*
//how i call Calculate function from Main function?
var data = x();
data() // from Calculate



function SayHi()
{
    console.log('Hi');
}

var data = (function SayHello(name)
{
    console.log('Hello : ' + name);
    var result = "Hello, " + name;

    return result;
})("doğan"); // Hello, Hi

console.log(data); // undefined



//arrow function - sorter way to write function
var calculate = (x, y) => (x + y);
console.log(calculate(5, 10)); // 15

//from function to degisken variable
var degisken = function(){

    return "abc";
}

//arrow function - similar to above function
var newDegisken = () => "abc".toUpperCase();
newDegisken(); // abc

const container = document.querySelector('.container');

container.innerHTML = newDegisken(); // abc

console.log(newDegisken()); // abc



function Calculate(x, y)
{
    
    console.log(arguments[0]);//5
    console.log(arguments[1]);//5

    console.log(arguments.length);//2

    return x + y;
}

console.log(Calculate.length);//2
Calculate(5, 10); // 15
*/

namespace.functions = () => {
    console.log('from App.js');
    var data = x();

    return data;
}

namespace.object = {
    name: 'doğan',
    surname: 'yıldırım',
    age: 24,
    address: 'İstanbul',
    job: {
        title: 'Software Developer',
        company: 'Kodluyoruz'
    }
}


namespace.functions();

console.log(namespace.object);

console.log(namespace.functions());


