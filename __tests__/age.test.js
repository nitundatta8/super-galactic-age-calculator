import {Planet,Earth,Mercury,Venus,Mars,Jupiter} from "./../src/age-calculator";

describe('Planet',function(){
  let planet;
  let earth;
  let mercury; 
  let venus;
  let mars;
  let jupiter;
   
  beforeEach(function(){
     planet = new Planet();
     earth = new Earth();
     mercury = new Mercury();
     venus = new Venus();
     mars = new Mars();
     jupiter = new Jupiter();
     
  });

  test ('verifies planet is created', function() {
      expect(planet.earthAgeFactor).toEqual(0);
  });

  test ('verifies earth is created', function() {
      expect(earth.earthAgeFactor).toEqual(1);
  });

  test ('verifies mercury is created', function() {
    expect(mercury.earthAgeFactor).toEqual(.24);
  });
  
  test ('verifies venus is created', function() {
    expect(venus.earthAgeFactor).toEqual(.62 );
  });
  
  test ('verifies mars is created', function() {
    expect(mars.earthAgeFactor).toEqual(1.88 );
  });
  
  test ('verifies jupiter is created', function() {
    expect(jupiter.earthAgeFactor).toEqual(11.86 );
  });
  
});