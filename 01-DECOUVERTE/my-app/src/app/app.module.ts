import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
// 12.5.1 import ItemformComponent
import { ItemformComponent } from './itemform.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    // 12.5.2 declaration ItemformComponent
    ItemformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
