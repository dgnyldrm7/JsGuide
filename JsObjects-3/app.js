import instance from './package.js';

const result = new instance("dgn");

console.log(result.sayHello());

result.name = "dgn2";

console.log(result.name);

console.log(result.Name);
