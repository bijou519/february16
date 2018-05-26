import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { RegistryComponent } from './components/registry/registry.component';
import { HoneymoonComponent } from './components/honeymoon/honeymoon.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from '../app/services/login.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'honeymoon', component: HoneymoonComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivitiesComponent,
    OurStoryComponent,
    WeddingComponent,
    RegistryComponent,
    HoneymoonComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
