import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { CarService } from './Services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialComponent } from './social/social.component';

const appRoutes: Routes = [
  { path:'dashboard', component:DashboardComponent},
  {path:'social', component:SocialComponent},
  { path: '**', component:PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
