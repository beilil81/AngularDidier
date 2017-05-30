//  7.1 creer class Item()
export class Item{
    
    // 7.1.2 déclarer 3 propriétés private
    public reference: string;
    public name: string;
    public state: number;
    // 2.3.1 declarer variable animateState  
    public animateState: string;

    // 7.1.3 constructor qui prend un objet en argument
    constructor(data:any){
        this.reference = data.reference;
        this.name =  data.name;
        this.state = data.state;
        //   2.3.2 init variable dans le constructeur
        this.animateState = 'inactive'
    }
//  2.3.3 créer fonction toggleAnimateState()
    public toggleAnimateState(){ 
        this.animateState = this.animateState === 'inactive' ? 'active' : 'inactive';
        console.log(this.animateState);
    }
}