import React from 'react';

const LargestNumberPage = () => {
  const findLargestNumber = (num1, num2, num3) => {
    let largest = num1;

    if (num2 > largest) {
      largest = num2;
    }

    if (num3 > largest) {
      largest = num3;
    }

    return largest;
  };

  const num1 = 10;
  const num2 = 25;
  const num3 = 50;
  const largestNumber = findLargestNumber(num1, num2, num3);

  return (
    <div>
      <h1>Largest Number Check</h1>
      <p>
        The largest number among {num1}, {num2}, and {num3} is: {largestNumber}
      </p>
    </div>
  );
};

export default LargestNumberPage;
