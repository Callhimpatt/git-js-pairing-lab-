// Jahmari-Problem 1: fiveToHundred();
const fiveToAHundred = () => {
    for (let i = 5; i <= 100; i++) console.log([i]);
};
console.log(fiveToAHundred());

// Patrick-problem 2: mulitplesOfThree()
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThree());

// Jahmari-problem 3: multiplesOfThreeOrFive
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) console.log(i);
    }
};
console.log(multiplesOfThreeOrFive());

// Patrick-problem 4: untilNum();
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

console.log(untilNum(5))

// Jahmari-problem 5: multiply();
const multiply = (num1, num2) => {
    console.log(num1 * num2);
};
console.log(multiply(4, 5));


// Patrick-problem 6: add();
const add = (arg1, arg2) => {
    if (arg1 === arg2) {
        return (arg1 + arg2) * 3
    } else {
        return (arg1 + arg2)
    }
}
console.log(add(6, 6));

// Jahmari-problem 7: betweenTwentyAndFourty();
const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true;
    }
    else {
        return false;
    }
}
console.log(betweenTwentyAndFourty(19));


// Patrick-problem 8 : triangleArea();
const triangleArea = (arg1, arg2) => {
    return (arg1 * arg2) / 2
}
console.log(triangleArea(5, 7))    //returns 17.5


// Jahmari-problem 9 : isNegative();
const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else num > 0;
    return false;
};
console.log(isNegative(4));

// Patrick-problem 10: largest();
const largest = (arg1, arg2, arg3) => {
    if (arg1 > arg2 && arg1 > arg3) {
        return arg1
    } else if (arg2 > arg3) {
        return arg2
    } else {
        return arg3
    }
}
console.log(largest(41, 108, 86))

// Jahmari-bonus 1 : Date();
const d = new Date();
const n = d.toLocaleTimeString();
console.log(n);

const getExtention = (filename) => {
    return filename.split('.').pop();
}
console.log(getExtention("danger.webp"));
