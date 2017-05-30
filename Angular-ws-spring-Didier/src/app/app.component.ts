import { Component, OnInit } from '@angular/core';
import { Auteur } from "./model/auteur";
import { AuteurService } from "./service/auteur.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  auteurs: Auteur[];
  sA: Auteur;  //auteur sélectionné via liste
  constructor(private _auteurService: AuteurService) {
    //_auteurService est injecté ici via angular
  }

  ngOnInit(): void {
    this._auteurService.rechercherListeAuteurs()
      .subscribe(listeAut => { this.auteurs = listeAut; //subscribe elle declenche un evenement indiféré
        if(this.auteurs.length >=1)
        this.sA=this.auteurs[0]; //selectionné le premier par défault si y a un element 
                 },
    
       e => console.log(e.message));
  }

  public onSelectionChange(event: any): void {
     let selectedId= event.target.value;
     for(let a of this.auteurs){
       if(a.id==selectedId){
         this.sA=a;
         break;
       }
     }

  }

  public onUpdateAuteur(): void {

    this._auteurService.majAuteur(this.sA)
    .subscribe(auteurMisAjour => console.log("auteur mis à jour : "+ auteurMisAjour.prenom
                            +" "+auteurMisAjour.nom))
    console.log(".....update.....");
  }





}
