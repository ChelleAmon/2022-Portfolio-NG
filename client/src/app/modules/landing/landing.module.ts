import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './page/landing/landing.component';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
  ],

  exports: [
    LandingComponent,
  ]
})
export class LandingModule { }
