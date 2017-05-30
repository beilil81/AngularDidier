
import { NgModule } from '@angular/core';
import { ItemFormComponent } from "app/itemform.component";
import { ItemComponent } from "app/item.component";
import { Routes, RouterModule } from '@angular/Router';


export const appRoutes: Routes = [
    {path: '' , redirectTo: 'list', pathMatch: 'full'},
    {path: 'list' , component: ItemComponent},
    {path: 'form' , component: ItemFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
   
  ],
  exports: [
       RouterModule
  ]

})
export class AppRoutingModule { } // export pour rendre la classe "exportable"

