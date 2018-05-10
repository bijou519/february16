import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { RegistryComponent } from './components/registry/registry.component';
import { HoneymoonComponent } from './components/honeymoon/honeymoon.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'honeymoon', component: HoneymoonComponent },
  { path: 'registry', component: RegistryComponent },
  // { path: '**', component: PageNotFoundComponent }
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
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
