fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c5d0fd45bf8d80932dced6a26fe5b930')
  .then(response => response.json())
  .then(data => console.log(data));