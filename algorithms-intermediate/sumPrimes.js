// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1
//  and itself. For example, 2 is a prime number because it is only divisible 
//  by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.



const sumPrimes = (max) => {

  const isItPrime = (n) => {
    let div = 2;
    while (div < n) {
      if (n % div === 0) return false;
      div++;
    }
    return true;
  };

  const nextPrime = (n) => {
    if (isItPrime(n + 1)) return n + 1;
    else return nextPrime(n + 1);
  };

  const primesArray = (max) => {
    let n = 2;
    const arr = [];
    while (n <= max) {
      if (isItPrime(n)) arr.push(n);
      n++;
    }
    return arr;
  };

  const arr = primesArray(max);
  return arr.reduce((a, b) => a + b);
};

console.log(sumPrimes(7));
