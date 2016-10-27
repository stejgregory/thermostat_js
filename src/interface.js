$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemperature(); // update model
    updateTemperature();
    updateBackground();
  })

  $('#temperature-down').click(function() { // event listener
    thermostat.decreaseTemperature(); // update model
    updateTemperature();
    updateBackground();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateBackground();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
    updateBackground();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
    updateBackground();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

  function updateBackground() {
    $('#topBar').attr("class", thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=d99fb405014408f53b6794d0050d7db6';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $('#display-city').text(city);
  })
})
