//   13.1.1 import de pipe et pipeTransform
import { Pipe, PipeTransform } from '@angular/core';
//  13.1.2 declarer @PIPE
@Pipe({
    name:'itemFilter',
    pure: false
})
// 13.1.3 utilisation methode pipeTransform
export class ItemPipe implements PipeTransform {
      transform(value: any, ...args: any[]): any{
          //console.log(value);
          let filtre = args[0].toUpperCase();
            // 13.1.4 return tableau à partir de notre collection filtrée
          return filtre ? value.filter(item => item.name.toUpperCase()
                               .indexOf(filtre) != -1) : value; 

      }
}
