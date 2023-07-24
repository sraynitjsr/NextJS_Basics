import React from 'react';

const IsPrimePage = () => {
  const isPrimeNumber = (num) => {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const number = 17;
  const isPrime = isPrimeNumber(number);

  return (
    <div>
      <h1>Prime Number Check</h1>
      <p>
        {number} is {isPrime ? 'prime' : 'not prime'}
      </p>
    </div>
  );
};

export default IsPrimePage;
