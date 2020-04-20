import * as moment from 'moment';

//service class
export class GalacticAgeCalculator  {
  constructor(){}

  calculateAge(personAge,planetAgeFactor){
    let age = Math.round(personAge * planetAgeFactor);
    return age;
  }

  calculateAveLifeExp(person){
    const aveAge = 80;
    if(person.lifestyle === 'healthy lifestyle' && person.diet === 'healthy diet'  && person.activityLevel==='moderate'){
      return  aveAge; 
    }else{
      return aveAge - 5;
    }
  }

  calcuExceedAveAge(personAgeInPlanet,aveAge){
    
     let exceedAveAge = Math.round(personAgeInPlanet - aveAge);
     return exceedAveAge;
  }

  findDays(planetAgeFactor){
    const daysInYear = 365;
    return planetAgeFactor * daysInYear;
  }

  getNextBirthDay(person,planetAgeFactor){
    let days = Math.floor(this.findDays(planetAgeFactor));
    let m = moment(person.bDay, 'YYYY-MM-DD');
    return  m.add(days, 'day').format('YYYY-MM-DD');
    

  }

}