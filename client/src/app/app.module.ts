import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { FooterModule } from './modules/footer/footer.module';
import { LandingModule } from './modules/landing/landing.module';
import { NavbarModule } from './modules/navbar/navbar.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SkillsModule } from './modules/skills/skills.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    AboutModule,
    SkillsModule,
    ProjectsModule,
    ContactsModule,
    FooterModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
