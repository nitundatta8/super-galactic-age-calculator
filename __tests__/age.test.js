import {Planet,Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator.js";
import {GalacticAgeCalculator} from "./../src/galactic-age-calculator.js";


describe('Planet',function(){
  let planet;
  let earth;
  let mercury; 
  let venus;
  let mars;
  let jupiter;
  let person;
  let galacticAgeCalculator;
  let personAge;
   
  beforeEach(function(){
     planet = new Planet();
     earth = new Earth();
     mercury = new Mercury();
     venus = new Venus();
     mars = new Mars();
     jupiter = new Jupiter();
     person = new Person(40);
     personAge = person.age;
     galacticAgeCalculator = new GalacticAgeCalculator();
     
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

  test ('verifies person is created', function() {
    expect(person.age).toEqual(40);
  });

  test ('verifies person age in Earth', function() {
    let pEarthAgeFactor = earth.earthAgeFactor;
    let personAgeInEarth= galacticAgeCalculator.calculateAge(personAge,pEarthAgeFactor);
    expect(personAgeInEarth).toEqual(40);
  });

  test ('verifies person age in Mercury', function() {
    let pMercuryAgeFactor = mercury.earthAgeFactor;
    let personAgeInMercury= galacticAgeCalculator.calculateAge(personAge,pMercuryAgeFactor);
    expect(personAgeInMercury).toEqual(9.6);
  });

  
});