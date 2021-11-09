
function primeNumber(num) {
    let i;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }  
    }
    return true;
}

console.log(primeNumber(22));
console.log(primeNumber(19));