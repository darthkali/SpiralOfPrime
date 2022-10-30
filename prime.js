function isPrime(num) {
    if (num === 2 || num === 3)
        return true;
    if (num <= 1 || num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num ; i+=6)
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    return true;
}

module.exports = isPrime;