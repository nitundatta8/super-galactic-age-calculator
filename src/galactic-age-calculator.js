import {Planet,Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator";


//service class
export class GalacticAgeCalculator  {
  constructor(){}

  calculateAge(personAge,planetAgeFactor){
    let age = personAge * planetAgeFactor;
    return age;
  }

}