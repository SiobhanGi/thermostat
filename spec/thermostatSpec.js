describe('Thermostat', function(){

  var thermostat
  var temp

  beforeEach(function(){
    thermostat = new Thermostat();
    temp = new Temperature
  })

  it('has the correct safety values for max temp', function(){
    expect(thermostat._maxTempLookup.PSM).toEqual(25)
    expect(thermostat._maxTempLookup.nPSM).toEqual(32)
  })


  describe('#up', function(){
    it('can increase the temperature', function(){
      thermostat.up()
      expect(thermostat.temp).toBeGreaterThan(temp.default)
    })
    it('doesnt exceed max temp', function(){
      thermostat.psOn()
      for(var i = 0; i < 6; i++) {
      thermostat.up();
      }
      expect(thermostat.temp).toEqual(thermostat._maxTemp)
    })
  })

  describe('#down', function(){
    it('can decrease the temperature', function(){
      thermostat.down()
      expect(thermostat.temp).toBeLessThan(temp.default)
    })
  })

  describe('#powerSaving', function(){
    it('has a default setting of PSM on', function(){
      expect(thermostat.powerSaving).toEqual(true)
    })
  })

  describe('#psOn', function(){
    beforeEach(function(){
      thermostat.psOff()
      thermostat.psOn()
    })
    it('sets power saving to true', function(){
      expect(thermostat.powerSaving).toEqual(true)
    })

    it('sets the max temperature to set dictionary value', function(){
      expect(thermostat._maxTemp).toEqual(thermostat._maxTempLookup.PSM)
    });

    it('resets temp if current temp exceeds max psm temp when psOn', function(){
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.psOn()
      expect(thermostat.temp).toEqual(thermostat._maxTempLookup.PSM)
    })
  })

  describe('#psOff', function(){
    it('sets power saving to false', function(){
      thermostat.psOff()
      expect(thermostat.powerSaving).toEqual(false)
    })
    it('sets the max temperature to set dictionary value', function(){
      thermostat.psOff()
      expect(thermostat._maxTemp).toEqual(thermostat._maxTempLookup.nPSM)
    });
  })

  describe('#reset', function(){
    it('it sets the temperature back to default', function(){
      thermostat.resetTemp()
      expect(thermostat.temp).toEqual(20)
    })
  })

  describe('#usage', function(){
    it('returns low usage', function() {
      for(var i = 0; i < 8; i ++ ) {
        thermostat.down();
      }
      expect(thermostat.usage()).toEqual('Low usage')
    })
    it('returns medium usage', function() {
      expect(thermostat.usage()).toEqual('Medium usage')
    })
    it('returns high usage', function() {
      for(var i = 0; i < 6; i ++ ) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual('High usage')
    })
  })

  describe('#psmToggle', function(){
    it('sets powersaving mode to false if true', function(){
      thermostat.psOff();
      thermostat.psmToggle();
      expect(thermostat.powerSaving).toEqual(true)
    })
    it('sets powersaving mode to true if false', function(){
      thermostat.psOn();
      thermostat.psmToggle();
      expect(thermostat.powerSaving).toEqual(false)
    })
  })
})
