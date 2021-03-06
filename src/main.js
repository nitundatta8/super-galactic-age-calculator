import {Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator.js";
import {GalacticAgeCalculator} from "./../src/galactic-age-calculator.js";


var person;
$(document).ready(function(){
    
  let earth = new Earth();
  let mercury = new Mercury();
  let venus = new Venus();
  let mars = new Mars();
  let jupiter = new Jupiter();
  let galacticAgeCalculator = new GalacticAgeCalculator();
  
  $("#entryForm").submit(function(event){
    event.preventDefault();
    let age = $("#age").val();
    $("#age").val('');
    person = new Person(age,"healthy lifestyle","healthy diet","moderate");
    let earthAge = galacticAgeCalculator.calculateAge(person.age,earth.earthAgeFactor);
    $(".earth").text("Your age in Earth is " + earthAge + " years.");

    let mercuryAge = galacticAgeCalculator.calculateAge(person.age,mercury.earthAgeFactor);
    $(".mercury").text("Your age in Mercury is " + mercuryAge + " years.");
    
    let venusAge = galacticAgeCalculator.calculateAge(person.age,venus.earthAgeFactor);
    $(".venus").text("Your age in Venus is " + venusAge + " years.");
    
    let marsAge = galacticAgeCalculator.calculateAge(person.age,mars.earthAgeFactor);
    $(".mars").text("Your age in Mars is " + marsAge + " years.");
    
    let jupiterAge = galacticAgeCalculator.calculateAge(person.age,jupiter.earthAgeFactor);
    $(".Jupiter").text("Your age in Jupiter is " + jupiterAge + " years.");
  });
    
  $("#bDayForm").submit(function(event){
    event.preventDefault();
    let bDayInEarth = $("#bDay").val();
    console.log(" ==" + bDayInEarth)
    
    person.bDay = bDayInEarth;
    console.log(person)
    $("#bDay").val('');
    
    let mercuryBday = galacticAgeCalculator.getNextBirthDay(person,mercury.earthAgeFactor);
    let venusBday = galacticAgeCalculator.getNextBirthDay(person,venus.earthAgeFactor);
    let marsBday = galacticAgeCalculator.getNextBirthDay(person,mars.earthAgeFactor);
    let jupiterBday = galacticAgeCalculator.getNextBirthDay(person,jupiter.earthAgeFactor);
    console.log(bDayInEarth)
    console.log(mercuryBday+ " ----")

    var row ='<tr>' +
      
      '<td>'+ bDayInEarth + '</td>' +
      '<td>'+ mercuryBday +'</td>'+
      '<td>'+ venusBday +'</td>' +
      '<td>'+ marsBday +'</td>' +
      '<td>'+ jupiterBday +'</td>'+ 
    '</tr>'

    $(".table tbody").append(row);
  });

     
});


