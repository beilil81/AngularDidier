import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from './pipes/item.filter'; // 13.3.1 import de ItemPipe

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent, 
    ItemFormComponent,
    ItemPipe // 13.3.2 declaration de ItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule // 2.4.2 declaration dans les imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // export pour rendre la classe "exportable"

