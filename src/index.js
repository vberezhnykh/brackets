module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(subArr => {
      if (str[i] === subArr[0] && str[i + 1] === subArr[1]) {
        str = str.slice(0, i) + str.slice(i + 2, str.length);
        i -= 2;
      }
    });
  }
  return (str.length === 0);
}