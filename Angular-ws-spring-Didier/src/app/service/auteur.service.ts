import { Auteur } from "../model/auteur";
import { Injectable } from "@angular/core";
import {Headers, Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuteurService {
    private _headers = new Headers({'Content-Type': 'application/json'});

    //  private listeAuteurs : Auteur[] ; //jeux de données (simulation)

    /* constructor(){
         this.listeAuteurs = [
           { "id" : 1 , "nom" : "therieur" , "prenom" : "alain"},
           { "id" : 2 , "nom" : "air" , "prenom" : "axelle"}
         ];
     }
 
     public rechercherListeAuteurs() : Observable<Auteur[]>{
        return Observable.of(this.listeAuteurs);//simulation sans WS 
     }
     */

    constructor(private _http: Http) {
        // _http injecté ici servira à appeler des ws REST
    }

    public rechercherListeAuteurs(): Observable<Auteur[]> {
        let urlws: string = "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/all";
        return this._http.get(urlws).map(Response => Response.json())
            .catch(e => Observable.throw('error:' + e));

    }

    public majAuteur(a: Auteur): Observable<Auteur> {
        let urlws: string = "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/"+ a.id;
        return this._http
            .put(urlws, JSON.stringify(a), {headers: this._headers})
            .map(Response => Response.json())
            .catch(e => Observable.throw('error:' + e));


    }



}