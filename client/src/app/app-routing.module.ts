import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/pages/about/about.component';
import { ContactsComponent } from './modules/contacts/pages/contacts/contacts.component';
import { FooterComponent } from './modules/footer/pages/footer/footer.component';
import { LandingComponent } from './modules/landing/page/landing/landing.component';
import { ProjectsComponent } from './modules/projects/pages/projects/projects.component';
import { SkillsComponent } from './modules/skills/pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "Hey!",
    component: LandingComponent,
    children: []
  },
  {
    path: "About",
    component: AboutComponent,
    children: []
  },
  {
    path: "Skills",
    component: SkillsComponent,
    children: []
  },
  {
    path: "Projects",
    component: ProjectsComponent,
    children: []
  },
  {
    path: "Contacts",
    component: ContactsComponent,
    children: []
  },
  {
    path: "Accounts",
    component: FooterComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
