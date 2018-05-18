$(function(){
  var thermostat = new Thermostat()


// debugger
  function tempColour() {
    if (thermostat.usage() === "Low usage") {
      $(".temp").css("color", "#8fc866");
    } else if (thermostat.usage() === "Medium usage") {
      $(".temp").css("color", "#ffa260");
    } else {
      $(".temp").css("color", "#ef6eae");
    }
  }

  $(".temp").text(thermostat.temp);
  tempColour();

  $("#up").click(function(){
    thermostat.up()
    tempColour();
    $(".temp").text(thermostat.temp);
  });

  $("#down").click(function(){
    thermostat.down()
    tempColour();
    $(".temp").text(thermostat.temp);
  });

  $("#reset").click(function(){
    thermostat.resetTemp()
    tempColour();
    $(".temp").text(thermostat.temp);
  });

  $("#psmToggle").click(function(){
    thermostat.psmToggle();
    tempColour();
    $(".temp").text(thermostat.temp);
  })
});
