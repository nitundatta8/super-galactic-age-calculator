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
     person = new Person(90,"healthy lifestyle","healthy diet","moderate");
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
    expect(venus.earthAgeFactor).toEqual(.64 );
  });
  
  test ('verifies mars is created', function() {
    expect(mars.earthAgeFactor).toEqual(1.88 );
  });
  
  test ('verifies jupiter is created', function() {
    expect(jupiter.earthAgeFactor).toEqual(11.86 );
  });

  test ('verifies person is created', function() {
    expect(person.age).toEqual(90);
  });

  test ('verifies person age in Earth', function() {
    let pEarthAgeFactor = earth.earthAgeFactor;
    let personAgeInEarth= galacticAgeCalculator.calculateAge(personAge,pEarthAgeFactor);
    expect(personAgeInEarth).toEqual(90);
  });

  test ('verifies person age in Mercury', function() {
    let pMercuryAgeFactor = mercury.earthAgeFactor;
    let personAgeInMercury= galacticAgeCalculator.calculateAge(personAge,pMercuryAgeFactor);
    expect(personAgeInMercury).toEqual(22);
  });

  test ('verifies person age in Venus', function() {
    let pVenusAgeFactor = venus.earthAgeFactor;
    let personAgeInVenus= galacticAgeCalculator.calculateAge(personAge,pVenusAgeFactor);
    expect(personAgeInVenus).toEqual(58);
  });

  test ('verifies person age in Mars', function() {
    let pMarsAgeFactor = mars.earthAgeFactor;
    let personAgeInMars= galacticAgeCalculator.calculateAge(personAge,pMarsAgeFactor);
    expect(personAgeInMars).toEqual(169);
  });

  test ('verifies person age in Jupiter', function() {
    let pJupiterAgeFactor = jupiter.earthAgeFactor;
    let personAgeInJupiter = galacticAgeCalculator.calculateAge(personAge,pJupiterAgeFactor);
    expect(personAgeInJupiter).toEqual(1067);
  });

  test ('verifies person"s" average age in Earth', function() {
    let pEarthAgeFactor = earth.earthAgeFactor;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInEarth = galacticAgeCalculator.calculateAge(aveAge,pEarthAgeFactor)
    expect(pAveAgeInEarth).toEqual(80);
  });

  test ('verifies person"s" average age in Mercury', function() {
    let pMercuryAgeFactor = mercury.earthAgeFactor;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInMercury= galacticAgeCalculator.calculateAge(aveAge,pMercuryAgeFactor);
    expect(pAveAgeInMercury).toEqual(19);
  });

  test ('verifies person"s" average in Venus', function() {
    let pVenusAgeFactor = venus.earthAgeFactor;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInVenus= galacticAgeCalculator.calculateAge(aveAge,pVenusAgeFactor);
    
    expect(pAveAgeInVenus).toEqual(51);
  });
  
  test ('verifies person"s" average in Mars', function() {
    let pMarsAgeFactor = mars.earthAgeFactor;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInMars= galacticAgeCalculator.calculateAge(aveAge,pMarsAgeFactor);
    expect(pAveAgeInMars).toEqual(150);
  });
  
  test ('verifies person"s" average in Jupiter', function() {
    let pJupiterAgeFactor = jupiter.earthAgeFactor;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInJupiter = galacticAgeCalculator.calculateAge(aveAge,pJupiterAgeFactor);
    expect(pAveAgeInJupiter).toEqual(949);
  });
  
  //compair person"s" current age with average age 
  
  test ('compair person"s" current age with average age in Earth', function() {
    let pEarthAgeFactor = earth.earthAgeFactor;
    let personAgeInEarth = galacticAgeCalculator.calculateAge(personAge,pEarthAgeFactor);
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInEarth = galacticAgeCalculator.calculateAge(aveAge,pEarthAgeFactor);
    let pAge = galacticAgeCalculator.calcuExceedAveAge(personAgeInEarth,pAveAgeInEarth);
    expect(pAge).toEqual(10);
  });
  
  test ('compaire person"s" current age with average age in Mercury', function() {
    let pMercuryAgeFactor = mercury.earthAgeFactor;
    let personAgeInMercury= galacticAgeCalculator.calculateAge(personAge,pMercuryAgeFactor);
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInMercury= galacticAgeCalculator.calculateAge(aveAge,pMercuryAgeFactor);
    let pAge = galacticAgeCalculator.calcuExceedAveAge(personAgeInMercury,pAveAgeInMercury);
    expect(pAge).toEqual(3);
  });

  test ('compaire person"s" current age with average age in Venus', function() {
    let pVenusAgeFactor = venus.earthAgeFactor;
    let personAgeInVenus= galacticAgeCalculator.calculateAge(personAge,pVenusAgeFactor);;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInVenus= galacticAgeCalculator.calculateAge(aveAge,pVenusAgeFactor);
    let pAge = galacticAgeCalculator.calcuExceedAveAge(personAgeInVenus,pAveAgeInVenus);
    expect(pAge).toEqual(7);
  });

  test ('compaire person"s" current age with average age in Mars', function() {
    let pMarsAgeFactor = mars.earthAgeFactor;
    let personAgeInMars= galacticAgeCalculator.calculateAge(personAge,pMarsAgeFactor);;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInMars= galacticAgeCalculator.calculateAge(aveAge,pMarsAgeFactor);
    let pAge = galacticAgeCalculator.calcuExceedAveAge(personAgeInMars,pAveAgeInMars);
    expect(pAge).toEqual(19);
  });

  test ('compaire person"s" current age with average age in Jupiter', function() {
    let pJupiterAgeFactor = jupiter.earthAgeFactor;
    let personAgeInJupiter= galacticAgeCalculator.calculateAge(personAge,pJupiterAgeFactor);;
    let aveAge= galacticAgeCalculator.calculateAveLifeExp(person);
    let pAveAgeInJupiter= galacticAgeCalculator.calculateAge(aveAge,pJupiterAgeFactor);
    let pAge = galacticAgeCalculator.calcuExceedAveAge(personAgeInJupiter,pAveAgeInJupiter);
    expect(pAge).toEqual(118);
  });

  
});