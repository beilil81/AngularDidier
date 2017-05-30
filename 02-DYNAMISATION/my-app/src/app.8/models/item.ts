//  7.1 creer class Item()
export class Item{
    
    // 7.1.2 déclarer 3 propriétés private
    // private reference: string;
    // private name: string;
    // private state: number;

    public reference: string; // ici en public juste pour l'exercice
    public name: string;
    public state: number;    
    public animateState: string; // 2.3.2 init variable dans constructor 

    // 7.1.3 constructor qui prend un objet en argument
    constructor(data:any){
        this.reference = data.reference;
        this.name =  data.name;
        this.state = data.state;
        this.animateState = 'inactive';
    }
        

}