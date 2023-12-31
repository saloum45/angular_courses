import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SaisieComponent } from './saisie/saisie.component';
import { FormsModule} from '@angular/forms';
import { StarRatingComponent } from './shared/components/star-rating/start-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseDonneeComponent } from './base-donnee/base-donnee.component';
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    SaisieComponent,
    StarRatingComponent,
    BaseDonneeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
