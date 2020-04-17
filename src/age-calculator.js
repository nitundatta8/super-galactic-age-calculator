export class Planet{
  constructor(){
      this.earthAgeFactor = 1;
  }
}

export class Earth extends Planet{
  constructor(){
   super();
   this.earthAgeFactor =1;
  }
}
export class Mercury extends Planet {
  constructor(){
    super();
    this.earthAgeFactor =1;
   }
}

export class Venus extends Planet {
  constructor(earthAgeFactor){
   super(earthAgeFactor);
  }
}
export class Mars extends  Planet   {
  constructor(earthAgeFactor){
   super(earthAgeFactor);
  }
}
export class Jupiter extends Planet  {
  constructor(earthAgeFactor){
   super(earthAgeFactor);
  }
}

// export class GalacticAgeCalculator  {
//   constructor(){}

// }


