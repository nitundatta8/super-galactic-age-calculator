import {Planet,Earth,Mercury,Venus,Mars} from "./../src/age-calculator";

describe('Planet',function(){
  let planet;
  let earth;
  beforeEach(function(){
     planet = new Planet();
     earth = new Earth();
  });

  test ('verifies planet is created', function() {
      expect(planet.earthAgeFactor).toEqual(0);
  });

  test ('verifies earth is created', function() {
      expect(earth.earthAgeFactor).toEqual(1);
  });

  // test ('verifies planet is created', function() {
  //   expect(planet.earthAgeFactor).toEqual(0);
  // });

  // test ('verifies planet is created', function() {
  //   expect(planet.earthAgeFactor).toEqual(0);
  // });
});