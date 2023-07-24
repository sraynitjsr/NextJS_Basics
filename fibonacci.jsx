import React from 'react';

const FibonacciPage = () => {
  const generateFibonacciSeries = (n) => {
    const series = [0, 1];

    for (let i = 2; i < n; i++) {
      const nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }

    return series;
  };

  const n = 10;
  const fibonacciSeries = generateFibonacciSeries(n);

  return (
    <div>
      <h1>Fibonacci Series</h1>
      <p>
        The first {n} numbers in the Fibonacci series are: {fibonacciSeries.join(', ')}
      </p>
    </div>
  );
};

export default FibonacciPage;
