// function for formating weather type name received from API
function formatWeatherType(type) {
  // adding space between words
  const withSpace =
    type !== 'RainLight'
      ? type.replace(/([a-z])(?=[A-Z])/g, '$1 ')
      : // reversing 'RainLight' to 'Light Rain'
        type
          .replace(/([a-z])(?=[A-Z])/g, '$1 ')
          .split(' ')
          .reverse()
          .join(' ');
  // changing letters to lower case
  const toLowerCase = withSpace.toLowerCase();
  // changing first letter to capital one
  const capitalized =
    toLowerCase.charAt(0).toUpperCase() + toLowerCase.slice(1);
  return capitalized;
}

export default formatWeatherType;
