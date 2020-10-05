const strictEqual = (num1, num2) => {
  return (typeof num1 == typeof num2) && (num1 == num2)
}

module.exports = strictEqual


