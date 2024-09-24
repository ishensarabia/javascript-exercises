const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * 5 / 9;
  // round to 1 decimal
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = temperature * 9 / 5 + 32;
  // round to 1 decimal
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
