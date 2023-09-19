import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonSimpleCardComponent } from './Components/pokemon-simple-card/pokemon-simple-card.component';
import { LoadMoreBtnComponent } from './Components/load-more-btn/load-more-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSimpleCardComponent,
    LoadMoreBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
