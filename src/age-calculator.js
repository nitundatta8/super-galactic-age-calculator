

export class Planet{
  constructor(){
      this.earthAgeFactor = 0;
  }
}

export class Earth extends Planet{
  constructor(){
   super();
   this.earthAgeFactor = 1;
  }
}
export class Mercury extends Planet {
  constructor(){
    super();
    this.earthAgeFactor =.24;
   }
}

export class Venus extends Planet {
  constructor(){
    super();
    this.earthAgeFactor =.64;
   }
}
export class Mars extends  Planet   {
  constructor(){
    super();
    this.earthAgeFactor =1.88;
   }
}
export class Jupiter extends Planet  {
  constructor(){
    super();
    this.earthAgeFactor = 11.86;
   }
}


export class Person{
  constructor(age, lifestyle, diet, activityLevel){
    this.age = age;
    this.lifestyle = lifestyle;
    this.diet = diet;
    this.activityLevel = activityLevel;
    
  }
}


