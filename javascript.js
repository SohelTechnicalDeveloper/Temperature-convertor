function convertTemperature()  {

      const inputTemperature = parseFloat(document.getElementById("num").value);
      const unit = document.getElementById("unit").value;

      let convertedTemperature;

      if(unit == 'Fahrenheit') //convert to Fahrenheit
      {
         convertedTemperature = (inputTemperature * 9/5) + 32;
         document.getElementById("result").textContent= inputTemperature+'  Degrees Celsius'+ '  =  '  +convertedTemperature+'  °F.'
      }

      else if(unit == 'Celsius') //convert to celsius
      {
         convertedTemperature = (inputTemperature - 32) * 5/9;
         document.getElementById("result").textContent = inputTemperature+'  Degrees Fahrenheit'+ ' = '  +convertedTemperature+' °C.'
      }
      else if(unit =='Kelvin') //convert to kelvin
      {
          convertedTemperature =(inputTemperature + 273.15);
          document.getElementById("result").textContent = inputTemperature+' Degrees Celsius'+' = '  +convertedTemperature+'  °K.'
      }

      else
      {
         document.getElementById("result").textContent = 'Please Select a valid  unit.';
      }
}