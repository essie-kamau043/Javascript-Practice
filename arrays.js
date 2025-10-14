const colors = ["Pink", "Blue", "Yellow", "Green", "Red"];

console.log(colors[3]);
colors.push("purple");
colors.unshift("cyan");

console.log(colors);

colors.pop();

console.log(colors);

for (let color of colors){
    console.log(colors);
}

const numbers = [2,4,6,8,10];
const squares = numbers.map((num) => num * num);
console.log(squares);

const sum = numbers.reduce ((total, num) => total + num, 0);
console.log(sum);

const isGreaterThanTen = numbers.filter(num => num > 10);
console.log(isGreaterThanTen);