import React from 'react';

const FactorialPage = () => {
  const calculateFactorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  };

  const number = 5;
  const factorial = calculateFactorial(number);

  return (
    <div>
      <h1>Factorial Calculation</h1>
      <p>
        The factorial of {number} is {factorial}
      </p>
    </div>
  );
};

export default FactorialPage;
