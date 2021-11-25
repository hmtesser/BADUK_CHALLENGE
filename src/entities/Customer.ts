
export class Customer {

  
// ID aleatório gerado pela lib uuidv4
  public name:string;
  public email:string;
  public telefone:string;


  constructor(props: Customer) {

    Object.assign(this, props);


}

}

