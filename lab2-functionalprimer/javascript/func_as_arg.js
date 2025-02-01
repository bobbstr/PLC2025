//Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(x, y) {
    let arr = [];
    for (let i = x; i <= y; i++) {
        arr.push(i);
    }
    return arr;
}

function applicatorFunc(inpFunc, s, x, y) {
    if (s == 's') {
        const arr = inpFunc(x, y);
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    } else {
        const arr = inpFunc(x, y);
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / (y - x + 1);
    }
}

let x = applicatorFunc(arrFunc, 's', 1, 10);
console.log(x);