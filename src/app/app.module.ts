import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './core/modules/header/header.component';
import { FooterComponent } from './core/modules/footer/footer.component';
import { HomeComponent } from './core/modules/home/home.component';
import { PlanetsComponent } from './core/modules/planets/planets.component';
import { PlanetDetailsComponent } from './core/modules/planets/planet-details/planet-details.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, PlanetsComponent, PlanetDetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
