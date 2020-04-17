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
    this.earthAgeFactor =.62;
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

// export class GalacticAgeCalculator  {
//   constructor(){}

// }


