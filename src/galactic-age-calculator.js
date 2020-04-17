import {Planet,Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator";


//service class
export class GalacticAgeCalculator  {
  constructor(){}

  calculateAge(personAge,planetAgeFactor){
    let age = Math.round(personAge * planetAgeFactor);
    return age;
  }

  calculateAveLifeExp(person){
    
    if(person.lifestyle === 'healthy lifestyle' && person.diet === 'healthy diet'  && person.activityLevel==='moderate'){
      return  Math.round(person.age + 45); 
    }else{
      return person.age + 10;
    }
  }

}