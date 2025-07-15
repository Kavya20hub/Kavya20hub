function binToDec(s) {
    return parseInt(s, 2);
}



let t = parseInt(prompt("enter test cases:"));

for (let i = 1; i <=t; i++) {
    let s = prompt("enter the string");
    console.log(binToDec(s));
}
