let temperature = 20;

if (temperature >= 30) {
    console.log("It's hot");
} else if (temperature >= 20) {
    console.log("It's warm");
} else {
    console.log("It's cold");
}


let marks = 50;

if (marks >= 90){
    console.log("A");
} else if (marks >= 70){
    console.log("B");
} else if (marks >= 50){
    console.log("C");
} 
 else {
    console.log("F");
}


let loggedIn = true;
let message = loggedIn ? "Welcome back!" : "PLease log in.";
console.log(message);