import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from './pipes/item.filter'; 
import { TitleModule } from './title/title.module';
import { HightLightDirective } from './directives/highlight.directive';
import { StateDirective } from './directives/state.directive';
import { ItemService } from "app/services/item.service";
import { Config } from "app/config";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent, 
    ItemFormComponent,
    ItemPipe,
    HightLightDirective,
    StateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TitleModule
  ],
  providers: [Config,
              ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { } // export pour rendre la classe "exportable"

