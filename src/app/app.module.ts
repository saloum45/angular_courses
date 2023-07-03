import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SaisieComponent } from './saisie/saisie.component';
import { FormsModule} from '@angular/forms';
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    SaisieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
