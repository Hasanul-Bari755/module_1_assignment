const discount = (num) => {
  if (num < 50) {
    return `no discount is applied.`;
  } else if (num >= 50 && num <= 100) {
    return (5 * num) / 100;
  } else if (num >= 100 && num <= 200) {
    return (10 * num) / 100;
  } else if (num > 200) {
    return (15 * num) / 100;
  }
};

console.log(discount(0));
