const evenNumberFilter = (arr) => {
  const result = arr.filter((num) => num % 2 == 0);
  return result;
};

console.log(evenNumberFilter([12, 34, 45, 23, 6, 78, 54, 90]));
