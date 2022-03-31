const ftoc = function(temp) {
  const cels = (temp-32)*(5/9);
  result = parseFloat(cels.toFixed(1));
  return result;

};

const ctof = function(temp) {
  const far = ((temp)*(9/5)) + 32;
  result = parseFloat(far.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
