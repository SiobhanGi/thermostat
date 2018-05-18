navigator.geolocation.getCurrentPosition(function(position) {

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",

    data: {
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        APPID: '640f7b83a809dee5f3bdadae5d2603ab'
    },

    type: "GET",

    dataType: "json",

  })
  .done (function( json) {
    $("<span>").text( (json.name) + "  " ).appendTo( ".screen" );
    $("<span>").text( (Math.round(json.main.temp - 273.15))+String.fromCharCode(176)).appendTo( ".screen" );
  })
});
