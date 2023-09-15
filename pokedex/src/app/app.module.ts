import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonSimpleCardComponent } from './Components/pokemon-simple-card/pokemon-simple-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSimpleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
