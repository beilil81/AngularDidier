import {Pipe, PipeTransform} from '@angular/core'; // 13.1.1 imports de Pipe et PipeTransform 

@Pipe({ // @Pipe = décorateur; 13.1.2 déclarer @Pipe
    name: 'itemFilter',
    pure: false // à la moindre modif à l'écran, l'ensemble des composants est relu (à utiliser avec modération car consomme des ressources) 

})

export class ItemPipe implements PipeTransform{
    transform(value: any, ...args: any[]): any { // 13.1.3 utilisation methode transform dans la classe ItemPipe
        //console.log(value);
        //console.log(args[0]);
        let filtre = args[0].toLowerCase(); // passer en minuscules
        // 13.1.4 return tableau à partir de la collection filtrée
        return filtre ? value.filter(item => item.name.toLowerCase().indexOf(filtre) != -1) : value; // fonction filter() de javascript
    }
}