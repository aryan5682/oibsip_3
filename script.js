document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unit');
    const errorText = document.getElementById('errorText');
    const convertButton = document.getElementById('convertButton');
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const res = document.getElementById('res');
  
    convertButton.addEventListener('click', function () {
      const temperature = parseFloat(temperatureInput.value);
      const selectedUnit = unitSelect.value;
  
      if (isNaN(temperature)) {
        errorText.textContent = 'Please enter a valid number';
        result1.textContent = '';
      } else {
        errorText.textContent = '';
  
        if (selectedUnit === 'fahrenheit') {
          const convertedTemp = (temperature - 32) * (5 / 9);
          const convertedTempK = (temperature - 32) * (5 / 9)+273.15;
          res.textContent='Result'
          result1.textContent = `Fahrenheit to Celsius: ${convertedTemp.toFixed(2)} °C`;
          result2.textContent = `Fahrenheit to Kelvin: ${convertedTempK.toFixed(2)} K`;
        } else if (selectedUnit === 'celsius') {
          const convertedTemp = (temperature * 9 / 5) + 32;
          const convertedTempK = temperature +273.15;
          res.textContent='Result'
          result1.textContent = `Celsius to Fahrenheit : ${convertedTemp.toFixed(2)} °F`;
          result2.textContent = `Celsius to Kelvin: ${convertedTempK.toFixed(2)} K`;
        }
        else if (selectedUnit === 'kelvin') {
            const convertedTemp = (temperature -273.15)*9/5 + 32;
            const convertedTempK = temperature -273.15;
            res.textContent='Result'
            result1.textContent = `Kelvin to Fahrenheit : ${convertedTemp.toFixed(2)} °F`;
            result2.textContent = `Kelvin to Celsius : ${convertedTempK.toFixed(2)} K`;
          }
        
      }
    });
  });
  