import {Planet,Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator";


//service class
export class GalacticAgeCalculator  {
  constructor(){}

  calculateAge(person,planet){
    let age = person.age * planet.earthAgeFactor;
    return age;
  }

}