// Control Flow: Determine if a number is positive, negative, or zero
let number = -2; // Change this value to test different cases

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log(`${number} is zero.`);
}

// Function Implementation: Check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Testing the Function with Different Numbers
console.log(`Is 4 even? ${isEven(4)}`); // true
console.log(`Is 7 even? ${isEven(7)}`); // false
console.log(`Is 0 even? ${isEven(0)}`); // true
