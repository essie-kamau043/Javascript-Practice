const car = {
    brand: "Honda",
    model : "Fit",
    year : 2018,
    color : "Black"
};

console.log(car.brand)
console.log(car.year)

car.owner = "Techie"

console.log(car.owner)

car.color = "Red"

console.log(car.color)

delete car.year;

console.log(car)


const cars = [
    {brand: "Mazda",color: "green"},
    {brand: "Merceds-Benz",color: "White"},
    {brand: "Toyota",color: "Grey"}
];

for (const car of cars){
    console.log(`The ${car.color} car is a ${car.brand}.`)
}

