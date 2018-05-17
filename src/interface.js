$(function(){
  var thermostat = new Thermostat()

  $("#up").click(function(){
    thermostat.up()
    console.log(thermostat.temp)

  });

  $("#down").click(function(){
    thermostat.down()
    console.log(thermostat.temp)
  });

  $("#reset").click(function(){
    thermostat.resetTemp()
    console.log(thermostat.temp)
  });

  // $("psm").click(function(){
  //   thermostat.
  // })
});
