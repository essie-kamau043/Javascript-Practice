function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("John");
sayHello("Jane");

function isEven(num){
    return num % 2 === 0;

}

console.log(isEven(4));
console.log(isEven(5));

function isOdd(num){
    return num % 2 !== 0;
}

console.log(isOdd(4));
console.log(isOdd(5));


function maxOfTwo(a,b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}

console.log(maxOfTwo(4,5));
console.log(maxOfTwo(5,4));


function square(num){
    return num * num;
}

console.log(square(6))