import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
      //  13.3.1  import de ItemPipe
import { ItemPipe } from './pipes/item.filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent, // 10.4.2 declarer la class ItemComponent dans @ngModule
    ItemFormComponent,
    // 13.3.2 declaration de ItemPipe 
    ItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // export pour rendre la classe "exportable"

