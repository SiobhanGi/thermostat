const MIN_TEMP = 10;

function Thermostat(temp = new Temperature()) {
  this.temp = temp.default;
  this._minTemp = MIN_TEMP;
  this._maxTemp = 25;
  this.powerSaving = true;
  this._maxTempLookup = {
    PSM: 25,
    nPSM: 32
  }
}

Thermostat.prototype.up = function (){
  this.temp ++
}

Thermostat.prototype.down = function (){
  this.temp --
}

Thermostat.prototype.psOn = function (){
  this.powerSaving = true
  this._maxTemp = this._maxTempLookup.PSM
}

Thermostat.prototype.psOff = function (){
  this.powerSaving = false
  this._maxTemp = this._maxTempLookup.nPSM
}

Thermostat.prototype.resetTemp = function (temp = new Temperature){
  this.temp = temp.default
}

Thermostat.prototype.usage = function (){
  if (this.temp < 18) {
    return 'Low usage';
  } else if (this.temp < 25) {
    return 'Medium usage';
  } else {
    return 'High usage';
  }
}

Thermostat.prototype.psmToggle = function(){
  if (this.powerSaving = true ) {
    this.psOff;
  } else {
    this.psOn;
  }
}
