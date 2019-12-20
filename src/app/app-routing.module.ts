import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

// loads the HeroesComponent when navigating to its URL
// URL: localhost:4200/heroes
// URL: localhost:4200/dashboard
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect default route to dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes',component: HeroesComponent}
];

// gives the Router somewhere to go after the routes have been configured
// @NgModule = metadata initializes the router and starts it listening for browser locatin changes. 
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] // exports, to be available for the rest of the app
})
export class AppRoutingModule { }
