const sumSquareDifference = (num) => {
  const sumSquare = n => n === 1 ? n : n ** 2 + sumSquare(n - 1);
  const Sum = n => n === 1 ? n : n + Sum(n - 1);

  return Sum(num) ** 2 - sumSquare(num);
};

export default sumSquareDifference;