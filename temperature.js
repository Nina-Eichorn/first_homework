function fToC(fahrenheit) {
    let fahr = fahrenheit;
    let degrees = (fahr - 32) * 5/9;
    let finalc = Math.round (degrees);

    console.log (`${fahr} Fahrenheit is converted to ${finalc} Celsius.`);
}

function cToF(celsius) {
    let cels = celsius;
    let degree = (cels * 9/5) + 32;
    let finalf = Math.round (degree);

    console.log (`${cels} Celsius is converted to ${finalf} Fahrenheit.`);
}

console.log (`This is JavaScript temperature conversion homework for Ms. Ferguson:`)

fToC (72)

cToF (13)

//changes so I could commit again and again
let firstName = Nina;

function fname () {
    let fname = firstName;
}

let lastName = Eichorn;

function lname () {
    let lname = lastName;
}

function address(){
    let adrs = avei;
    console.log(adrs)
}

console.log (address())













