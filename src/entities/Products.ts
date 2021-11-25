export class Products {
  public name:string;
  public price:number;
  public quantity:number;

  constructor(props:Products){
    Object.assign(this,props)
  }
}