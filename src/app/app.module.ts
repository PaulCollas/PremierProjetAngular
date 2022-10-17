import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';
import { DeuxiemeComposantComponent } from './deuxieme-composant/deuxieme-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComposantComponent,
    DeuxiemeComposantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
