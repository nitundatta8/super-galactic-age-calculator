import {Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator.js";
import {GalacticAgeCalculator} from "./../src/galactic-age-calculator.js";

$(document).ready(function(){
    
    let earth = new Earth();
    let mercury = new Mercury();
    let venus = new Venus();
    let mars = new Mars();
    let jupiter = new Jupiter();
    let galacticAgeCalculator = new GalacticAgeCalculator();
    let person;
    $("#entryForm").submit(function(event){
      event.preventDefault();
      let age = $("#age").val();
      $("#age").val('');
    person = new Person(age,"healthy lifestyle","healthy diet","moderate");
    let earthAge = galacticAgeCalculator.calculateAge(person.age,earth.earthAgeFactor);
    $(".earth").text("Your age in Earth is " + earthAge + " years.");
    });
    
    
    $("#entryDetails").click(function(){
      let mercuryAge = galacticAgeCalculator.calculateAge(person.age,mercury.earthAgeFactor);
      $(".mercury").text("Your age in Mercury is " + mercuryAge + " years.");
      
      let venusAge = galacticAgeCalculator.calculateAge(person.age,venus.earthAgeFactor);
      $(".venus").text("Your age in Venus is " + venusAge + " years.");
      
      let marsAge = galacticAgeCalculator.calculateAge(person.age,mars.earthAgeFactor);
      $(".mars").text("Your age in Mars is " + marsAge + " years.");
      
      let jupiterAge = galacticAgeCalculator.calculateAge(person.age,jupiter.earthAgeFactor);
      $(".Jupiter").text("Your age in Jupiter is " + jupiterAge + " years.");
    });
    
    
     
});


