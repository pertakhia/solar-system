import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/modules/home/home.component';
import { PlanetsComponent } from './core/modules/planets/planets.component';
import { PlanetDetailsComponent } from './core/modules/planets/planet-details/planet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  {
    path: 'planets/:id',
    component: PlanetDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
