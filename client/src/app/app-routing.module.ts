import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "Hey!",
    loadChildren: () => import('./modules/landing/landing.module')
    .then(m => m.LandingModule)
  },
  {
    path: "about",
    loadChildren: () => import('./modules/about/about.module')
    .then(m => m.AboutModule)
  },
  {
    path: "skills",
    loadChildren: () => import('./modules/skills/skills.module')
    .then(m => m.SkillsModule)
  },
  {
    path: "projects",
    loadChildren: () => import('./modules/projects/projects.module')
    .then(m => m.ProjectsModule)
  },
  {
    path: "Contact-me!",
    loadChildren: () => import('./modules/contacts/contacts.module')
    .then(m => m.ContactsModule)
  },
  {
    path: "Media-Accounts",
    loadChildren: () => import('./modules/footer/footer.module')
    .then(m => m.FooterModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
